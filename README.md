# Silkroad Again Redesign (Static)

실크로드 어게인 스타일을 참고한 정적 랜딩 페이지입니다.

## 파일 구조

- `index.html`: 페이지 마크업
- `styles.css`: 스타일
- `script.js`: 직업 탭/폼 UI 인터랙션
- `.github/workflows/deploy-pages.yml`: GitHub Pages 자동 배포 워크플로우

## 로컬 실행

```bash
python3 -m http.server 8080
```

브라우저에서 `http://localhost:8080` 접속.

## GitHub Pages 배포 설정

1. 이 저장소를 GitHub에 push
2. GitHub 저장소에서 **Settings → Pages** 이동
3. **Build and deployment**를 **GitHub Actions**로 선택
4. `main` 브랜치에 push하면 자동 배포

## 주의

- 현재 사전예약 폼은 데모 UI 동작만 포함합니다.
- 실제 저장 기능은 API 연동이 필요합니다.
