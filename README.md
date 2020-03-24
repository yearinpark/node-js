//npm install -> 외부 라이브러리 사용하지 않을때는따로 설치할필요가 없음, node modules에 있는 파일 가져오려는거임. (express를 쓸 때는 외부 라이브러리 사용하기 때문에 npm install해야함)

터미널 : node app.js 실행 



[과제 - 일반 node 방식]
1) 라우팅 "localhost:3000/"으로 브라우저에 들어가면 "Hello World" "localhost:3000/test"으로 브라우저에 들어가면 "Test Now"  
2) 리다이렉트 "localhost:3000/redirect"으로 브라우저에 들어가면 "localhost:3000/"로 전환


///express 파일 외부에서 복사해올 경우 :
1) index.js, package.json 복사
2) npm install //하면 package-lock.json 파일이 생성됨
3) npm start
