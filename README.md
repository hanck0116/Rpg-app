# NewTRPG 시트 관리자

모바일에서 NewTRPG/RPG/TRPG 플레이어 시트와 NPC 전투시트를 관리하는 오프라인 우선 PWA 앱이다. 저장소 이름은 `Rpg-app`이며 GitHub Pages 기본 경로는 `/Rpg-app/`이다.

## 2차 보강 핵심

- 플레이어 시트 생성, 자동 저장, 마지막 저장 시간/저장 결과 표시, 캐릭터 선택/복제/삭제를 지원한다.
- 캐릭터 데이터는 `id`, `createdAt`, `updatedAt`, `appVersion`, `rulesVersion`, `storageVersion`, `sheetVersion`를 포함한다.
- 대시보드에는 현재 캐릭터 이름, HP, 6대 능력치 최종값, 최근 판정 결과, 온라인/오프라인 상태가 표시된다.
- 일반 판정, 상대 판정, 커스텀 다이스를 플레이 중 즉시 실행할 수 있다.
- 장비와 아이템 효과 문자열은 쉼표, 세미콜론, 줄바꿈 구분자를 지원하며 능력치와 전투 수치에 즉시 반영된다.
- NPC는 캐릭터 계산 엔진을 공유하며 상대 판정, 피해, 회복, 전체 회복 대상으로 사용할 수 있다.
- 전체/캐릭터 JSON 백업과 복구, Obsidian Markdown frontmatter 일부 가져오기를 지원한다.

## 앱 접속과 설치

1. GitHub Pages 주소 `https://<사용자명>.github.io/Rpg-app/`를 휴대폰 브라우저에서 연다.
2. 브라우저 메뉴에서 **홈 화면에 추가** 또는 **앱 설치**를 누른다.
3. 첫 접속 후 앱 파일이 Service Worker 캐시에 저장된다.

## 오프라인 사용

- 최초 1회 접속/설치 후 인터넷이 없어도 앱 화면이 열린다.
- 플레이어 시트, NPC, 아이템, 장비, 판정 결과는 현재 기기의 IndexedDB에 저장된다.
- 서버 DB, 로그인, Firebase, Supabase, OpenAI API, 유료 호스팅을 사용하지 않는다.

## 백업과 복구

- **전체 백업 내보내기**: IndexedDB 전체 저장소를 `newtrpg-backup-날짜.json`으로 다운로드한다.
- **전체 백업 가져오기**: 내보낸 JSON을 붙여넣어 복구하며, 실행 전 확인창을 표시한다.
- **현재 캐릭터 내보내기/가져오기**: 캐릭터 1명만 JSON으로 이동한다.
- **Obsidian Markdown 가져오기**: frontmatter에서 이름, 능력치, 현재HP, 장비/아이템 목록, 상태이상을 가능한 범위에서 가져온다.
- **앱 데이터 초기화**: 두 번의 강한 경고 확인 후 기기 내 앱 DB를 삭제한다.

## 개발

```bash
npm install
npm run build
npm test
```

자세한 룰 수정 위치는 `docs/update-guide.md`, 오프라인 저장 구조는 `docs/offline-storage.md`, 기능 현황은 `docs/feature-inventory.md`를 참고한다.
