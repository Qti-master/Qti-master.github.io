# GitHub Pages 개발자 포트폴리오

프레임워크나 빌드 과정 없이 바로 배포할 수 있는 한국어 단일 페이지 포트폴리오입니다. 반응형 다크 테마, 키보드 접근성, 축소 모션 설정, 모바일 메뉴를 포함합니다.

## 개인 정보 바꾸기

[`script.js`](./script.js)의 `PORTFOLIO_CONTENT` 객체만 수정하면 이름, 소개, 기술 스택, 프로젝트, 연락처를 교체할 수 있습니다.

- `projects`의 `demo`, `source`에는 실제 배포 주소와 GitHub 저장소 주소를 넣으세요.
- `contacts`의 이메일과 GitHub/LinkedIn 주소를 실제 정보로 바꾸세요.
- 브라우저 탭 제목은 이름에 맞춰 자동으로 변경됩니다.

## 로컬에서 확인하기

`index.html`을 브라우저로 열면 됩니다. 외부 의존성이 없으므로 별도 설치나 빌드는 필요하지 않습니다.

## GitHub Pages 배포

프로필 페이지 주소를 사용하려면 GitHub 사용자명과 정확히 같은 저장소 이름, 즉 `username.github.io`를 만드세요.

1. 이 파일들을 `username.github.io` 저장소의 루트에 올리고 기본 브랜치(`main`)에 푸시합니다.
2. GitHub 저장소의 **Settings → Pages**로 이동합니다.
3. **Build and deployment**의 Source에서 **Deploy from a branch**를 선택합니다.
4. Branch를 `main`, 폴더를 `/(root)`로 선택한 뒤 저장합니다.
5. 배포가 끝나면 `https://username.github.io`에서 확인합니다. `username`은 실제 GitHub 아이디로 바꾸세요.

프로젝트 저장소에 배포하는 경우에는 상대 경로로 작성되어 있으므로 파일 수정 없이 `https://username.github.io/repository-name/`에서도 동작합니다.

## 파일 구성

- `index.html` — 페이지 구조와 접근성 마크업
- `styles.css` — 반응형 다크 테마 및 모션
- `script.js` — 콘텐츠 렌더링, 메뉴, 앵커 이동, 스크롤 효과
