exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('login required');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('access allowed for only not logged in users');
  }
};

// {
// req 객체의 주요 속성과 메서드
// req.method: HTTP 요청 메서드(GET, POST 등).
// req.url: 요청된 URL.
// req.headers: 요청 헤더.
// req.query: 쿼리 문자열 파라미터.
// req.body: 요청 본문 (POST나 PUT 요청에서 주로 사용).
// req.params: URL 경로 파라미터.
// req.cookies: 쿠키.
// req.session: 세션 데이터.
// req.user: Passport.js를 사용할 때, 인증된 사용자 정보.
// req.isAuthenticated(): Passport.js에서 사용자를 인증했는지 여부를 반환하는 메서드.
// req.logout(callback): Passport.js에서 사용자 로그아웃을 처리하는 메서드.
// }