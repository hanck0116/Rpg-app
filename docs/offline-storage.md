# 오프라인 저장 안내

NewTRPG 시트 관리자는 서버 DB, 로그인, Firebase, Supabase, OpenAI API를 사용하지 않는다. 시트는 설치한 기기의 브라우저 IndexedDB 데이터베이스 `newtrpg-sheet-manager`에 저장된다.

저장소는 `characters`, `npcs`, `items`, `scenarios`, `settings`, `backups`, `rules`로 나뉜다. 앱 삭제, 브라우저 데이터 삭제, 사이트 데이터 삭제, 휴대폰 초기화 시 데이터가 사라질 수 있으므로 백업 탭에서 JSON을 주기적으로 내보내야 한다.

오프라인 실행은 PWA Service Worker가 빌드 산출물(JS/CSS/HTML/manifest/icon)을 캐시해서 처리한다. GitHub Pages에서 최초 1회 접속 및 홈 화면 설치 후에는 인터넷 없이 앱 화면을 열고 IndexedDB 데이터를 수정할 수 있다.
