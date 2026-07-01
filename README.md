# NewTRPG 시트 관리자

모바일에서 NewTRPG/RPG/TRPG 플레이어 시트와 NPC 전투시트를 관리하는 오프라인 우선 PWA 앱이다. 저장소 이름은 `Rpg-app`이며 GitHub Pages 기본 경로는 `/Rpg-app/`이다.

## 앱 접속과 설치

1. GitHub Pages 주소 `https://<사용자명>.github.io/Rpg-app/`를 휴대폰 브라우저에서 연다.
2. 브라우저 메뉴에서 **홈 화면에 추가** 또는 **앱 설치**를 누른다.
3. 첫 접속 후 앱 파일이 Service Worker 캐시에 저장된다.

## 오프라인 사용

- 최초 1회 접속/설치 후 인터넷이 없어도 앱 화면이 열린다.
- 플레이어 시트, NPC, 아이템, 장비, 판정 결과는 현재 기기의 IndexedDB에 저장된다.
- 서버 DB, 로그인, Firebase, Supabase, OpenAI API, 유료 호스팅을 사용하지 않는다.

## 데이터 주의사항

이 앱의 시트 데이터는 현재 기기 내부에 저장된다. 앱 삭제, 브라우저 데이터 삭제, 사이트 데이터 삭제, 휴대폰 초기화 시 데이터가 사라질 수 있다. 중요한 시트는 반드시 백업 탭에서 JSON 백업을 내보내야 한다.

## 백업과 복구

- **전체 백업 내보내기**: IndexedDB 전체 저장소를 JSON으로 다운로드한다.
- **전체 백업 가져오기**: 내보낸 JSON을 붙여넣어 복구한다.
- **현재 캐릭터 내보내기/가져오기**: 캐릭터 1명만 JSON으로 이동한다.
- **Obsidian Markdown 가져오기/내보내기**: frontmatter 기반 Markdown과 1차 호환된다.
- **앱 데이터 초기화**: 경고 확인 후 기기 내 앱 DB를 삭제한다.

## 주요 기능

- 플레이어 시트 생성/수정/저장
- 6대 능력치(힘, 민첩, 체력, 지능, 지혜, 외모)와 보정별 최종값 계산
- 최대 HP, 물리공격력, 정신/마법공격력, 피해감소, 난이도 보정
- 일반 판정, 상대 판정, 난이도 판정, 커스텀 다이스
- 아이템/장비 등록 문자열 파싱과 효과 자동 반영
- NPC 전투시트 1차 지원
- 스킬, 상태이상, 지속효과, 경험치/레벨 1차 지원
- PWA 오프라인 캐시와 업데이트 확인

## 업데이트 방법

모바일에서 GitHub 저장소 파일을 수정하거나 Codex로 작업한 뒤 `main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 및 GitHub Pages 배포를 수행한다. 앱 안의 설정 탭에서 **새 버전 확인**을 누르면 Service Worker 업데이트 확인을 요청한다.

## 개발

```bash
npm ci
npm run build
npm run test
```

자세한 룰 수정 위치는 `docs/update-guide.md`, 오프라인 저장 구조는 `docs/offline-storage.md`, 기존 Obsidian 기능 분석은 `docs/feature-inventory.md`를 참고한다.
