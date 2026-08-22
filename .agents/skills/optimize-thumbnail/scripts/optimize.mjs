#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// CLI 인수 파싱
const args = process.argv.slice(2);
const params = {};
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith("--")) {
    const key = args[i].slice(2);
    const value = args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true;
    params[key] = value;
    if (value !== true) i++;
  }
}

const inputPath = params.input;
const slug = params.slug;
const category = params.category || "tech";
const width = parseInt(params.width, 10) || 1200;
const height = parseInt(params.height, 10) || 630;
const quality = parseInt(params.quality, 10) || 82;

if (!inputPath || !slug) {
  console.error("Usage: node optimize.mjs --input <path-to-image> --slug <post-slug> [--category tech|book-review] [--width 1200] [--height 630] [--quality 82]");
  process.exit(1);
}

const resolvedInput = path.resolve(process.cwd(), inputPath);
if (!fs.existsSync(resolvedInput)) {
  console.error(`Error: Input file not found: ${resolvedInput}`);
  process.exit(1);
}

const targetDir = path.resolve(process.cwd(), `public/images/${category}/${slug}`);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const targetWebPPath = path.join(targetDir, "thumbnail.webp");
const webpUrl = `/images/${category}/${slug}/thumbnail.webp`;

async function run() {
  const originalStats = fs.statSync(resolvedInput);
  const originalSizeKb = (originalStats.size / 1024).toFixed(1);

  console.log(`Optimizing image: ${resolvedInput} (${originalSizeKb} KB)`);

  // Sharp 이미지 변환 및 리사이징 (16:9 fit cover)
  await sharp(resolvedInput)
    .resize(width, height, {
      fit: "cover",
      position: "center",
    })
    .webp({ quality })
    .toFile(targetWebPPath);

  const optimizedStats = fs.statSync(targetWebPPath);
  const optimizedSizeKb = (optimizedStats.size / 1024).toFixed(1);
  const reductionPercent = (
    ((originalStats.size - optimizedStats.size) / originalStats.size) *
    100
  ).toFixed(1);

  console.log(`✅ Thumbnail optimized successfully!`);
  console.log(`   - Output: ${targetWebPPath}`);
  console.log(`   - Size: ${originalSizeKb} KB ➔ ${optimizedSizeKb} KB (${reductionPercent}% reduced)`);
  console.log(`   - Web URL: ${webpUrl}`);

  // 마크다운 포스트 파일이 존재하면 Frontmatter 자동 갱신
  const possiblePostPaths = [
    path.resolve(process.cwd(), `src/content/posts/${slug}.md`),
    path.resolve(process.cwd(), `src/content/posts/${slug}-book-review.md`),
    path.resolve(process.cwd(), `src/content/posts/drafts/${slug}.md`),
  ];

  for (const postPath of possiblePostPaths) {
    if (fs.existsSync(postPath)) {
      let content = fs.readFileSync(postPath, "utf-8");
      
      // image / thumbnail 필드 치환
      let updated = false;
      if (/^image:\s*.*$/m.test(content)) {
        content = content.replace(/^image:\s*.*$/m, `image: "${webpUrl}"`);
        updated = true;
      }
      if (/^thumbnail:\s*.*$/m.test(content)) {
        content = content.replace(/^thumbnail:\s*.*$/m, `thumbnail: "${webpUrl}"`);
        updated = true;
      }

      if (updated) {
        fs.writeFileSync(postPath, content, "utf-8");
        console.log(`   - Updated post frontmatter: ${postPath}`);
      }
      break;
    }
  }
}

run().catch((err) => {
  console.error("Optimization failed:", err);
  process.exit(1);
});
