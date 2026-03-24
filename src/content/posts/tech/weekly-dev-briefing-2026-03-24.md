---
title: "금주 개발 뉴스 브리핑 (2026-03-24)"
description: "이번 주에 체크할 만한 개발 정세/변경사항을 강사·개발자 관점에서 압축 정리한다."
date: 2026-03-24T00:00:00Z
image: "/images/tech/web-technologies.jpg"
categories: ["tech"]
tags: ["weekly", "dev-briefing", "nextjs", "openai", "codex", "gemini-cli", "claude"]
draft: true
---

> 이 포스트는 매주 AI가 관심 지정해둔 기술들의 공식 문서와 GitHub 변동사항을 수집하고, 핵심만 한글로 요약·정리해 발행하는 주간 브리핑이다.
> 원문 링크를 함께 남겨 빠르게 확인할 수 있게 했고, 블로그 주인장의 학습과 더불어 방문객들에게 동향 정보 제공을 목적으로 개발 뉴스를 100% 자동화했다.

---

## 1. Next.js 변경사항

- 내용 정리/번역:
- 출처: <a href="https://github.com/vercel/next.js/releases" target="_blank" rel="noopener">Next.js Releases</a>
  - **서버 HMR 관련 개선/수정**이 포함됐다(개발 중 핫리로드/디버깅 경험에 영향).
  - **Turbopack** 관련 최적화/버그 픽스가 누적됐다(빌드/개발 성능, 동작 안정성).
  - **Server Actions** 관련 동작/호환 이슈를 보정하는 변경이 포함됐다.
  - 메타데이터/라우팅 관련 출력/동작 이슈를 다루는 변경이 포함됐다.
  - Windows 환경에서의 링크/파일 처리(junction/symlink) 관련 개선이 포함됐다.
- 스코어링: 영향도 4/5 · 적용가능성 4/5 · 강의가치 4/5 · 신뢰도 5/5 · 신선도 5/5 (총점 22/25)
- 링크:
  - <a href="https://github.com/vercel/next.js/releases/tag/v16.2.0" target="_blank" rel="noopener">https://github.com/vercel/next.js/releases/tag/v16.2.0</a>
  - <a href="https://github.com/vercel/next.js/releases/tag/v16.2.1-canary.2" target="_blank" rel="noopener">https://github.com/vercel/next.js/releases/tag/v16.2.1-canary.2</a>
  - <a href="https://github.com/vercel/next.js/releases/tag/v16.2.1-canary.1" target="_blank" rel="noopener">https://github.com/vercel/next.js/releases/tag/v16.2.1-canary.1</a>
  - <a href="https://github.com/vercel/next.js/releases/tag/v16.2.1" target="_blank" rel="noopener">https://github.com/vercel/next.js/releases/tag/v16.2.1</a>
  - <a href="https://github.com/vercel/next.js/releases/tag/v16.2.1-canary.3" target="_blank" rel="noopener">https://github.com/vercel/next.js/releases/tag/v16.2.1-canary.3</a>

## 2. React 변경사항

- 내용 정리/번역:
  - 금주 브리핑 할 변동사항 없음


## 3. JS/TS 변경사항

- 내용 정리/번역:
  - 금주 브리핑 할 변동사항 없음

## 4. TanStack 변경사항

- 내용 정리/번역:
  - 금주 브리핑 할 변동사항 없음

## 5. OpenAI 변경사항

- 내용 정리/번역:
- 출처: <a href="https://openai.com/blog/rss.xml" target="_blank" rel="noopener">OpenAI Blog (General)</a>
  - **에이전트 운영/안전**: <a href="https://openai.com/index/how-we-monitor-internal-coding-agents-misalignment" target="_blank" rel="noopener">How we monitor internal coding agents for misalignment</a>
  - **인수/조직 변화**: <a href="https://openai.com/index/openai-to-acquire-astral" target="_blank" rel="noopener">OpenAI to acquire Astral</a>
  - 주요 글/이슈: <a href="https://openai.com/index/equipping-workers-with-insights-about-compensation" target="_blank" rel="noopener">Equipping workers with insights about compensation</a>
  - **새 모델/라인업 업데이트(GPT 계열)**: <a href="https://openai.com/index/introducing-gpt-5-4-mini-and-nano" target="_blank" rel="noopener">Introducing GPT-5.4 mini and nano</a>
  - 주요 글/이슈: <a href="https://openai.com/index/japan-teen-safety-blueprint" target="_blank" rel="noopener">OpenAI Japan announces Japan Teen Safety Blueprint to put teen safety first</a>
  - 주요 글/이슈: <a href="https://openai.com/index/creating-with-sora-safely" target="_blank" rel="noopener">Creating with Sora Safely</a>
- 스코어링: 영향도 4/5 · 적용가능성 3/5 · 강의가치 3/5 · 신뢰도 4/5 · 신선도 5/5 (총점 19/25)
- 링크:
  - <a href="https://openai.com/index/how-we-monitor-internal-coding-agents-misalignment" target="_blank" rel="noopener">https://openai.com/index/how-we-monitor-internal-coding-agents-misalignment</a>
  - <a href="https://openai.com/index/openai-to-acquire-astral" target="_blank" rel="noopener">https://openai.com/index/openai-to-acquire-astral</a>
  - <a href="https://openai.com/index/equipping-workers-with-insights-about-compensation" target="_blank" rel="noopener">https://openai.com/index/equipping-workers-with-insights-about-compensation</a>
  - <a href="https://openai.com/index/introducing-gpt-5-4-mini-and-nano" target="_blank" rel="noopener">https://openai.com/index/introducing-gpt-5-4-mini-and-nano</a>
  - <a href="https://openai.com/index/japan-teen-safety-blueprint" target="_blank" rel="noopener">https://openai.com/index/japan-teen-safety-blueprint</a>

## 6. Codex 변경사항

- 내용 정리/번역:
- 출처: <a href="https://developers.openai.com/codex/changelog" target="_blank" rel="noopener">Codex Changelog</a>
  - **추가/신규**: 2026-03-19 — 2026-03-19 Codex CLI 0.116.0 $ npm install -g @openai/codex@0.116.0 View details New Features App-server TUI now supports device-code ChatGPT sign-in during onboarding and can refresh existing ChatGPT tokens.
  - 추가 a userpromptsubmit hook so prompts can be blocked or augmented before execution and before they enter history.
  - **버그 수정(Fix)**: Bug Fixes Fixed a first-turn stall where websocket prewarm could delay turn/start; startup now times out and falls back cleanly.
  - 개선 Linux sandbox startup on symlinked checkouts, missing writable roots, and Ubuntu/AppArmor hosts by preferring system bwrap when available.
  - 수정 an agent job finalization race and reduced status polling churn for worker threads.
  - **요금/쿼터/제한**: Documentation Refreshed the Python SDK public API docs, examples, and walkthrough around the generated app-server models.
- 스코어링: 영향도 4/5 · 적용가능성 3/5 · 강의가치 3/5 · 신뢰도 5/5 · 신선도 5/5 (총점 20/25)
- 링크:
  - <a href="https://developers.openai.com/codex/changelog" target="_blank" rel="noopener">https://developers.openai.com/codex/changelog</a>

## 7. Gemini 변경사항

- 내용 정리/번역:
  - 금주 브리핑 할 변동사항 없음


## 8. Gemini CLI 변경사항

- 내용 정리/번역:
- 출처: <a href="https://geminicli.com/docs/changelogs/" target="_blank" rel="noopener">Gemini CLI Changelogs</a>
  - **추가/신규**: 샌드박싱 강화: We’ve added native gVisor (runsc) and experimental LXC container sandboxing support for safer execution environments (#21062 by @Zheyuan-Lin, #20735 by @h30s).
- 스코어링: 영향도 4/5 · 적용가능성 3/5 · 강의가치 3/5 · 신뢰도 4/5 · 신선도 5/5 (총점 19/25)
- 링크:
  - <a href="https://geminicli.com/docs/changelogs/" target="_blank" rel="noopener">https://geminicli.com/docs/changelogs/</a>

## 9. Claude / Claude Code 변경사항

- 내용 정리/번역:
- 출처: <a href="https://github.com/anthropics/claude-code/releases" target="_blank" rel="noopener">Claude Code Releases</a>, <a href="https://code.claude.com/docs/en/changelog" target="_blank" rel="noopener">Claude Code Changelog</a>
  - **버그 수정(Fix)**: What's changed Added --console flag to claude auth login for Anthropic Console (API billing) authentication Added "Show turn duration" toggle to the /config menu Fixed claude -p hanging when spawned as a subprocess without explicit stdin (e.g.
  - **요금/쿼터/제한**: Python subprocess.run ) Fixed Ctrl+C not working in -p (print) mode Fixed /btw returning the main agent's output instead of answering the side question when triggered during streaming Fixed voice mode not activating correctly on startup when voiceEnabled: true is set Fixed left/right arrow tab navigation in /permissions Fixed CLAUDE_CODE_DISABLE_TERMINAL_TITLE not preventing terminal title from being set on startup Fixed custom status line showing nothing when workspace trust is blocking it Fixed enterprise users being unable to retry on rate limit (429) errors Fixed SessionEnd hooks not firing when using interactive /resume to switch sessions Improved startup memory usage by ~18MB across all scenarios Improved non-streaming API fallback with a 2-minute per-attempt timeout, preventing sessions from hanging indefinitely CLAUDE_CODE_PLUGIN_SEED_DIR now supports multiple seed directories separated by the platform path delimiter ( : on Unix, ; on Windows) [VSCode] Added /remote-control — bridge your session to claude.ai/code to continue from a browser or phone [VSCode] Session tabs now get AI-generated titles based on your first message [VSCode] Fixed the thinking pill showing "Thinking" instead of "Thought for Ns" after a response completes [VSCode] Fixed missing session diff button when opening sessions from the left sidebar What's changed Added StopFailure hook event that fires when the turn ends due to an API error (rate limit, auth failure, etc.) Added ${CLAUDE_PLUGIN_DATA} variable for plugin persistent state that survives plugin updates; /plugin uninstall prompts before deleting it Added effort , maxTurns , and disallowedTools frontmatter support for plugin-shipped agents Terminal notifications (iTerm2/Kitty/Ghostty popups, progress bar) now reach the outer terminal when running inside tmux with set -g allow-passthrough on Response text now streams line-by-line as it's generated Fixed git log HEAD failing with "ambiguous argument" inside sandboxed Bash on Linux, and stub files polluting git status in the working directory Fixed cc log and --resume silently truncating conversation history on large sessions (&gt;5 MB) that used subagents Fixed infinite loop when API errors triggered stop hooks that re-fed blocking errors to the model Fixed deny: ["mcp__servername"] permission rules not removing MCP server tools before sending to the model, allowing it to see and attempt blocked tools Fixed sandbox.filesystem.allowWrite not working with absolute paths (previously required // prefix) Fixed /sandbox Dependencies tab showing Linux prerequisites on macOS instead of macOS-specific info 보안: Fixed silent sandbox disable when sandbox.enabled: true is set but dependencies are missing — now shows a visible startup warning Fixed .git , .claude , and other protected directories being writable without a prompt in bypassPermissions mode Fixed ctrl+u in normal mode scrolling instead of readline kill-line ( What's changed Increased default maximum output token limits for Claude Opus 4.6 to 64k tokens, and the upper bound for Opus 4.6 and Sonnet 4.6 models to 128k tokens Added allowRead sandbox filesystem setting to re-allow read access within denyRead regions /copy now accepts an optional index: /copy N copies the Nth-latest assistant response Fixed "Always Allow" on compound bash commands (e.g.
  - **요금/쿼터/제한**: cd src &amp;&amp; npm test ) saving a single rule for the full string instead of per-subcommand, leading to dead rules and repeated permission prompts Fixed auto-updater starting overlapping binary downloads when the slash-command overlay repeatedly opened and closed, accumulating tens of gigabytes of memory Fixed --resume silently truncating recent conversation history due to a race between memory-extraction writes and the main transcript Fixed PreToolUse hooks returning "allow" bypassing deny permission rules, including enterprise managed settings Fixed Write tool silently converting line endings when overwriting CRLF files or creating files in CRLF directories Fixed memory growth in long-running sessions from progress messages surviving compaction Fixed cost and token usage not being tracked when the API falls back to non-streaming mode Fixed CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS not stripping beta tool-schema fields, causing proxy gateways to reject requests Fixed Bash tool reporting errors for successful commands when the system temp directory path contains spaces Fixed paste being lost when typing immediately after pasting Fixed Ctrl+D in /feedback text input deleting forward instead of the second press exiting the session Fixed API error when dragging a 0-byte image file into the prompt Fixed What's changed Added --bare flag for scripted -p calls — skips hooks, LSP, plugin sync, and skill directory walks; requires ANTHROPIC_API_KEY or an apiKeyHelper via --settings (OAuth and keychain auth disabled); auto-memory fully disabled Added --channels permission relay — channel servers that declare the permission capability can forward tool approval prompts to your phone Fixed multiple concurrent Claude Code sessions requiring repeated re-authentication when one session refreshes its OAuth token Fixed voice mode silently swallowing retry failures and showing a misleading "check your network" message instead of the actual error Fixed voice mode audio not recovering when the server silently drops the WebSocket connection Fixed CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS not suppressing the structured-outputs beta header, causing 400 errors on proxy gateways forwarding to Vertex/Bedrock Fixed --channels bypass for Team/Enterprise orgs with no other managed settings configured Fixed a crash on Node.js 18 Fixed unnecessary permission prompts for Bash commands containing dashes in strings Fixed plugin hooks blocking prompt submission when the plugin directory is deleted mid-session Fixed a race condition where background agent task output could hang indefinitely when the task completed between polling intervals Resuming a session that was in a worktree now switches back to that worktree Fixed /btw not including pasted text when used during an active response Fixed a race where fast Cmd+Tab followed by paste could beat the clipboard copy under tmux Fixed terminal tab title not updating with an auto-generated session description Fixed invisible hook attachments inflating the message count in transcript mode What's changed Added rate_limits field to statusline scripts for displaying Claude.ai rate limit usage (5-hour and 7-day windows with used_percentage and resets_at ) Added source: 'settings' plugin marketplace source — declare plugin entries inline in settings.json Added CLI tool usage detection to plugin tips, in addition to file pattern matching Added effort frontmatter support for skills and slash commands to override the model effort level when invoked Added --channels (research preview) — allow MCP servers to push messages into your session Fixed --resume dropping parallel tool results — sessions with parallel tool calls now restore all tool_use/tool_result pairs instead of showing [Tool result missing] placeholders Fixed voice mode WebSocket failures caused by Cloudflare bot detection on non-browser TLS fingerprints Fixed 400 errors when using fine-grained tool streaming through API proxies, Bedrock, or Vertex Fixed /remote-control appearing for gateway and third-party provider deployments where it cannot function Fixed /sandbox tab switching not responding to Tab or arrow keys Improved responsiveness of @ file autocomplete in large git repositories Improved /effort to show what auto currently resolves to, matching the status bar indicator Improved /permissions — Tab and arrow keys now switch tabs from within a list Improved background tasks panel — left arrow now closes from the list view Simplified plugin install tips to use a single /plugin install command instead of a two-step flow Reduced memory usage on startup in large repositories (~80 MB saved on 250k-file repos) Fixed managed settings ( enabledPlugins , {\"value\":{\"apiReferenceData\":{}},\"children\":[\"$\",\"$L48\",null,{\"value\":{\"pageMetadata\":{\"title\":\"Changelog\",\"description\":\"Release notes for Claude Code, including new features, improvements, and bug fixes by version.\",\"rss\":true,\"href\":\"/en/changelog\"},\"lastModified\":\"2026-03-20T23:15:25.002Z\",\"description\":{\"compiledSource\":\"\\\"use strict\\\";\\nconst {jsx: _jsx} = arguments[0];\\nconst {useMDXComponents: _provideComponents} = arguments[0];\\nfunction _createMdxContent(props) {\\n const _components = {\\n p: \\\"p\\\",\\n ..._provideComponents(),\\n ...props.components\\n };\\n return _jsx(_components.p, {\\n children: \\\"Release notes for Claude Code, including new features, improvements, and bug fixes by version.\\\"\\n });\\n}\\nfunction MDXContent(props = {}) {\\n const {wrapper: MDXLayout} = {\\n ..._provideComponents(),\\n ...props.components\\n };\\n return MDXLayout ?
- 스코어링: 영향도 4/5 · 적용가능성 3/5 · 강의가치 3/5 · 신뢰도 5/5 · 신선도 5/5 (총점 20/25)
- 링크:
  - <a href="https://github.com/anthropics/claude-code/releases/tag/v2.1.79" target="_blank" rel="noopener">https://github.com/anthropics/claude-code/releases/tag/v2.1.79</a>
  - <a href="https://github.com/anthropics/claude-code/releases/tag/v2.1.78" target="_blank" rel="noopener">https://github.com/anthropics/claude-code/releases/tag/v2.1.78</a>
  - <a href="https://github.com/anthropics/claude-code/releases/tag/v2.1.77" target="_blank" rel="noopener">https://github.com/anthropics/claude-code/releases/tag/v2.1.77</a>
  - <a href="https://github.com/anthropics/claude-code/releases/tag/v2.1.81" target="_blank" rel="noopener">https://github.com/anthropics/claude-code/releases/tag/v2.1.81</a>
  - <a href="https://github.com/anthropics/claude-code/releases/tag/v2.1.80" target="_blank" rel="noopener">https://github.com/anthropics/claude-code/releases/tag/v2.1.80</a>

## 10. 커뮤니티의 뜨거운 감자

- 출처: <a href="https://www.reddit.com/r/OpenAI/top.json?t=week&limit=40" target="_blank" rel="noopener">Reddit r/OpenAI (hot)</a>, <a href="https://www.reddit.com/r/ClaudeAI/top.json?t=week&limit=40" target="_blank" rel="noopener">Reddit r/ClaudeAI (hot)</a>, <a href="https://www.reddit.com/r/programming/top.json?t=week&limit=40" target="_blank" rel="noopener">Reddit r/programming (hot)</a>, <a href="https://www.reddit.com/r/LocalLLaMA/top.json?t=week&limit=40" target="_blank" rel="noopener">Reddit r/LocalLLaMA (hot)</a>, <a href="https://www.reddit.com/r/webdev/top.json?t=week&limit=40" target="_blank" rel="noopener">Reddit r/webdev (hot)</a>, <a href="https://www.reddit.com/r/javascript/top.json?t=week&limit=40" target="_blank" rel="noopener">Reddit r/javascript (hot)</a>, <a href="https://www.reddit.com/r/Bard/top.json?t=week&limit=40" target="_blank" rel="noopener">Reddit r/Bard (hot)</a>, <a href="https://www.reddit.com/r/MachineLearning/top.json?t=week&limit=40" target="_blank" rel="noopener">Reddit r/MachineLearning (hot)</a>, <a href="https://www.reddit.com/r/reactjs/top.json?t=week&limit=40" target="_blank" rel="noopener">Reddit r/reactjs (hot)</a>, <a href="https://www.reddit.com/r/typescript/top.json?t=week&limit=40" target="_blank" rel="noopener">Reddit r/typescript (hot)</a>
- 이번 주 커뮤니티의 뜨거운 감자(번역):
  - **<a href="https://www.reddit.com/r/OpenAI/comments/1rzcikg/how_the_development_of_chatgpt_slowly_killed/" target="_blank" rel="noopener">How the development of ChatGPT slowly killed Chegg. I watched it happen live as an employee</a>**
    - 원문: How the development of ChatGPT slowly killed Chegg. I watched it happen live as an employee
  - **<a href="https://www.reddit.com/r/ClaudeAI/comments/1rzyqqt/found_3_instructions_in_anthropics_docs_that/" target="_blank" rel="noopener">Found 3 instructions in Anthropic's docs that dramatically reduce Claude's hallucination. Most people don't know they exist.</a>**
    - 원문: Found 3 instructions in Anthropic's docs that dramatically reduce Claude's hallucination. Most people don't know they exist.
  - **<a href="https://www.reddit.com/r/programming/comments/1s1e4il/software_dev_job_postings_are_up_15_since_mid_2025/" target="_blank" rel="noopener">Software dev job postings are up 15% since mid 2025</a>**
    - 원문: Software dev job postings are up 15% since mid 2025
  - **<a href="https://www.reddit.com/r/ClaudeAI/comments/1rxb8k3/73_of_ai_spend_now_on_anthropic_openai_now_down/" target="_blank" rel="noopener">73% of AI spend now on Anthropic, OpenAI now down to 26%</a>**
    - 원문: 73% of AI spend now on Anthropic, OpenAI now down to 26%
  - **<a href="https://www.reddit.com/r/LocalLLaMA/comments/1rwa0f7/unsloth_announces_unsloth_studio_a_competitor_to/" target="_blank" rel="noopener">Unsloth announces Unsloth Studio - a competitor to LMStudio?</a>**
    - 원문: Unsloth announces Unsloth Studio - a competitor to LMStudio?
  - **<a href="https://www.reddit.com/r/ClaudeAI/comments/1rwdqer/this_is_unprecedented_in_the_history_of_america/" target="_blank" rel="noopener">This is unprecedented in the history of America</a>**
    - 원문: This is unprecedented in the history of America
  - **<a href="https://www.reddit.com/r/ClaudeAI/comments/1s00ajb/im_a_phd_student_in_ai_and_i_built_a_10agent/" target="_blank" rel="noopener">I'm a PhD student in AI and I built a 10-agent Obsidian crew because my brain couldn't keep up with my life anymore</a>**
    - 원문: I'm a PhD student in AI and I built a 10-agent Obsidian crew because my brain couldn't keep up with my life anymore
  - **<a href="https://www.reddit.com/r/ClaudeAI/comments/1rw8dy6/opus_46_just_noticed_a_tentative_prompt_injection/" target="_blank" rel="noopener">Opus 4.6 just noticed a tentative prompt injection in a pdf I fed into it</a>**
    - 원문: Opus 4.6 just noticed a tentative prompt injection in a pdf I fed into it
  - **<a href="https://www.reddit.com/r/webdev/comments/1rx4jkp/ai_really_killed_programming_for_me/" target="_blank" rel="noopener">AI really killed programming for me</a>**
    - 원문: AI really killed programming for me
  - **<a href="https://www.reddit.com/r/ClaudeAI/comments/1rxyarx/i_built_a_claude_skill_that_writes_accurate/" target="_blank" rel="noopener">I built a Claude skill that writes accurate prompts for any AI tool. To stop burning credits on bad prompts. We just hit 600 stars on GitHub‼️</a>**
    - 원문: I built a Claude skill that writes accurate prompts for any AI tool. To stop burning credits on bad prompts. We just hit 600 stars on GitHub‼️

## 수집/작성 원칙

- 이 브리핑은 `/Users/kimjunhyun/.openclaw/workspace/DEVNEWS_GUIDE.md` 규칙을 따른다.
- 수집 채널(릴리즈/블로그/피드)에서 가져온 내용을 **한글로 정리·요약**해 게시한다.
- **의미 없는 버전 bump / dependency 업데이트 나열**은 본문에서 제외한다.
- 모든 섹션은 가능하면 **근거 링크**를 포함한다(할루시네이션 방지).
- 변화의 우선순위는 아래 관점으로 판단한다.
  - **영향도**: 실무/생태계에 바뀌는 범위가 큰가
  - **적용가능성**: 2주 내 내 프로젝트/강의에 적용 가능한가
  - **강의가치**: 데모/과제/설명으로 전환 가능한가
  - **신뢰도**: 공식/검증 가능한 출처인가
  - **신선도**: 이번 주 흐름을 대표하는가
- 중요한 포인트는 **굵게** 표시한다.
