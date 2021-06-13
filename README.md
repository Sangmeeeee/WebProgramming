
# WebProgramming 3팀
고급웹프로그래밍(ITEC16004) 팀 프로젝트를 위한 깃허브 레포지토리

## 주제

### 후보
  - ~~[주식사이트](https://www.investing.com/)~~
  - **[Instagram](https://www.instagram.com/) with OCR**
  -  ~~[github](https://github.com/)~~

### 최종 주제
  - **[Instagram](https://www.instagram.com/) with ocr**

## 과제 목표
인스타그램과 OCR(img to text)기능을 합하여 ocr로 변환한 이미지를 기록하고, 언제든지 불러와 텍스트로 사용하고 본인의 공부 기록이나 원서등을 기록하는것을 목표로한다.

## 개발 Stack

<img src="./img/tesseract.png" width="50%" height="auto">

tesseract.js

<img src="./img/papago.png" width="50%" height="auto">

papagoAPI
	
<img src="./img/react.png" width="50%" height="auto">

React.js
	
<img src="./img/node.png" width="50%" height="auto">

Node.js with express
	
<img src="./img/amazon.png" width="50%" height="auto">

AmazonAws

## 팀원
**Node.js와 React.js의 특성상 동일 언어로 구현되었기 때문에 프론트와 백엔드 서로간의 커뮤니케이션이 원활하게 이루어졌으며, 동일 언어의 특성상 서로간의 담당업무에서 모르는 부분을 같이 의논하여 해결했기 때문에 공평한 업무가 이루어짐**
| 팀원 | 담당업무 |
|-----|-------------------------------------------------------------------------------------|
|[김도형](https://github.com/DooooH)| **백엔드(Node.js)**<br>response to OCR request<br>response to Img src request<br>response to StorePost request<br>response to StoreUser request<br>|
|[손승우](https://github.com/S0N05)|**프론트엔드(React.js)**<br>create Login Page<br>create UserResiter<br>create Posted Img Layer<br>add Search(not yet)<br>|
|[안상준](https://github.com/twknds)|**백엔드(Node.js)**<br>create DB Models<br>response to Register User request<br>response to Login User request<br>response to Exist User request<br>|
|[이상민](https://github.com/Sangmeeeee)|**프론트엔드(React.js)**<br>response to translate request<br>create Posted Img Layer<br>add animation to mainpage<br>create User Page<br>|


## 세부사항 및 추가사항
### [서버 레포지토리 확인](https://github.com/Sangmeeeee/WebProgramming/tree/main/ocrstagram/servers)

### [웹 프론트 레포지토리 확인](https://github.com/Sangmeeeee/WebProgramming/tree/main/ocrstagram/)

### [전체 세부사항 확인](https://github.com/Sangmeeeee/WebProgramming/tree/main/보고서)

### 추가사항
- Search 기능을 추가하기로 예정하였으나 Server에서 data를 받아오는것 까지는 성공하였지만 Serach tag사용법에 미숙하여 구현하지 못함.
