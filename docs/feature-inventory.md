# NewTRPG Obsidian 기능 분석 및 PWA 이식표

기준 자료는 저장소 루트의 `rpg trpg.zip`을 `reference-unpacked/RPG`로 해제하여 확인했다. 핵심 자료는 `NewTRPG_PlayerSheet_v0.4.1_...md`, `NPC_...` 전투시트 폴더, `.obsidian/plugins/trpg-sheet-migrator`, `.obsidian/plugins/newtrpg-zip-manager`, 시나리오별 아이템/NPC Markdown이다.

| 기능명 | 기존 위치 | 앱 구현 파일 | 구현 상태 | 비고 |
|---|---|---|---|---|
| 플레이어 기본 시트/frontmatter | `RPG/NewTRPG_PlayerSheet_v0.4.1_...md` | `src/rules/newtrpg/schema.ts`, `src/main.tsx` | 1차 구현 | 필수 필드와 버전 정보 포함 |
| 능력치 6종 및 보정 | 플레이어/NPC 시트 본문 | `src/rules/newtrpg/calculation.ts` | 1차 구현 | 기본/종족/직업/아이템/스킬/임시/지속효과/최종 |
| 최대 HP 계산 | 플레이어 시트 계산 블록 | `src/rules/newtrpg/calculation.ts` | 구현 | 체력×10 + 보정 합산 |
| 물리/정신/마법 공격 | 플레이어 시트 계산 블록 | `src/rules/newtrpg/calculation.ts` | 구현 | 광전사 HP 감소 보정 일부 포함 |
| 종족 특수 규칙 | 시트 계산식/버튼 | `src/rules/newtrpg/calculation.ts` | 부분 구현 | 인간 난이도, 슬라임 외모, 용린 민첩 |
| 난이도 목록 | 플레이어 시트 판정 섹션 | `src/rules/newtrpg/constants.ts` | 구현 | 요청 목록 기본값 반영 |
| 일반 판정 | Meta Bind/JS 버튼 | `src/rules/newtrpg/judgement.ts` | 구현 | 자동성공, 대성공, 대실패 |
| 상대 판정 | 시트 상대 다이스 섹션 | `src/rules/newtrpg/judgement.ts`, `src/main.tsx` | 구현 | NPC 선택은 1차 UI |
| 커스텀 다이스 | 시트 다이스 버튼 | `src/rules/newtrpg/dice.ts` | 구현 | d6, +1d6, 3d10+5 등 |
| 장비/아이템 문자열 | 아이템 Markdown frontmatter | `src/rules/newtrpg/items.ts` | 구현 | 쉼표/줄바꿈 효과 파싱 |
| 스킬 구조 | 스킬/만다라 관련 노트 | `src/rules/newtrpg/skills.ts`, `src/main.tsx` | 부분 구현 | 고급효과 보존 필드 마련 |
| 상태이상/지속효과 | 시트 상태 섹션 | `src/rules/newtrpg/effects.ts` | 부분 구현 | 턴 감소/임시 보정 제거 |
| 경험치/등급 | 경험치 계산 노트 | `src/rules/newtrpg/experience.ts` | 구현 | F~EX 등급, 임무 위험도 |
| NPC 전투시트 | `NPC_...` 폴더 Markdown | `src/rules/newtrpg/schema.ts`, `src/main.tsx` | 1차 구현 | 캐릭터 엔진 재사용 |
| JSON 백업/복구 | zip-manager 플러그인 | `src/storage/indexedDb.ts`, `src/main.tsx` | 구현 | 전체/캐릭터 단위 |
| Obsidian Markdown 가져오기/내보내기 | Markdown frontmatter | `src/main.tsx` | 부분 구현 | 단순 frontmatter 호환 |
| 오프라인/PWA | Obsidian 앱 의존 | `vite.config.ts`, `public/icon.svg` | 구현 | Workbox 캐시/manifest |
| 앱 업데이트 확인 | zip-manager versions | `src/pwa/update.ts` | 구현 | SW update 호출 |
| 마이그레이션 | migrator 플러그인 | `src/storage/migrations.ts` | 1차 구현 | 원본 보존 정책 문서화 필요 |
