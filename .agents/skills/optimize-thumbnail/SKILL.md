---
name: optimize-thumbnail
description: >-
  블로그 포스트의 썸네일 이미지를 최적화(WebP 변환, 16:9 리사이징, 압축)하고 포스트 Frontmatter를 자동으로 갱신하는 스킬. 사용자가 이미지를 썸네일로 지정해달라고 요청하거나 이미지 최적화가 필요할 때 사용한다.
---

# 썸네일 이미지 자동 최적화 스킬 (optimize-thumbnail)

블로그 포스트의 대표 이미지를 고효율 WebP 포맷(1200x630, 16:9 비율)으로 압축 및 리사이징하여 `public/images/<category>/<slug>/thumbnail.webp`에 배치하고, 대상 마크다운 포스트의 Frontmatter(`image`, `thumbnail`)를 자동으로 업데이트합니다.

## 사용 시점

- 사용자가 특정 이미지(업로드된 이미지, 로컬 파일 등)를 **"이거 썸네일 이미지로 해줘"** 또는 **"썸네일 최적화해줘"**라고 요청할 때.
- 새로운 블로그 포스트를 작성하거나 기존 포스트의 고용량 이미지(PNG/JPEG)를 WebP로 경량화할 때.

## 실행 절차

1. **대상 정보 확인**:
   - 원본 이미지 경로 (예: `/Users/kimjunhyun/.../image.png` 또는 `.user_uploaded/...`)
   - 포스트의 slug (예: `building-ai-second-brain-with-obsidian`)
   - 카테고리 (`tech` 또는 `book-review`, 기본값: `tech`)

2. **최적화 스크립트 실행**:
   ```bash
   node .agents/skills/optimize-thumbnail/scripts/optimize.mjs --input "<원본이미지경로>" --slug "<포스트slug>" --category "<tech|book-review>"
   ```

3. **결과 검증**:
   - `public/images/<category>/<slug>/thumbnail.webp` 생성 여부 및 용량(100KB 내외) 확인.
   - 대상 마크다운 포스트의 frontmatter(`image`, `thumbnail`)에 `/images/<category>/<slug>/thumbnail.webp`가 반영되었는지 확인.
