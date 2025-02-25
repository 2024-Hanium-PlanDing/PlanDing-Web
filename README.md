# 📖 손쉬운 일정 관리와 플래너 공유 플랫폼 PlanDing
<div align="center">

![PlanDing](https://github.com/user-attachments/assets/63bda6b3-45d4-4e55-9a5a-47829b9bebc0)

</div>

- 프로젝트 소개 영상 : https://youtu.be/a1mq1rUVoYg
- S3 배포 URL : http://planding-front.s3-website.ap-northeast-2.amazonaws.com/
- 배포 URL : https://planding.site

<br>

## 프로젝트 소개

- PlanDing은 일정 관리와 그룹 스터디를 지원하는 플랫폼 입니다.
- 개인 및 팀 일정 관리: 사용자들이 개인적으로 또는 팀 단위로 일정을 체계적으로 계획하고 관리할 수 있습니다.
- 협업 기능: 팀 프로젝트의 경우, 효율적인 협업을 지원하여 팀원 간의 원활한 커뮤니케이션과 작업 분담을 가능하게 합니다.
- 개별 일정 플래너: 사용자가 각자 개별 일정에 맞춘 플래너 기능을 활용하여 보다 세밀한 계획을 세울 수 있습니다.


<br>

## 팀원 구성

<div align="center">


|                                     박철현                                     |                                     김상운                                      |                                    박민수                                    |                                    이민규                                    |
| :----------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
| <img src="https://github.com/user-attachments/assets/b6afafac-bed6-4c35-acb0-7e588fa9d0cb" width="120" /> | <img src="https://github.com/user-attachments/assets/b6afafac-bed6-4c35-acb0-7e588fa9d0cb" width="120" /> | <img src="https://github.com/user-attachments/assets/b6afafac-bed6-4c35-acb0-7e588fa9d0cb" width="120"> | <img src="https://github.com/user-attachments/assets/b6afafac-bed6-4c35-acb0-7e588fa9d0cb" width="120"> |
|                                     **Web**                                     |                                     **Backend**                                      |                                    **Android**                                    |                                    **Design**                                    |
|                    [@hyeon](https://github.com/play3step)                    |                    [@SangWoon123](https://github.com/SangWoon123)                     |                   [@comst19](https://github.com/comst19)                   |                [@22](https://github.com/)                |
</div>

<br>

## 1. 개발 환경

- Front : React, TailwindCSS, Redux
- Back-end : 제공된 API 활용
- 협업 툴 : Jira, Confluence, Notion

<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, TailwindCSS
- React: 컴포넌트 기반의 UI 라이브러리로, 재사용성 높은 구조와 성능 최적화를 제공하여 대규모 애플리케이션 개발에 적합.

- TailwindCSS: 유틸리티 기반 CSS 프레임워크로, 빠르고 효율적인 스타일 적용과 프로덕션 최적화가 가능.

### Redux
- Redux: 전역 상태 관리 라이브러리로, 복잡한 상태를 일관되게 관리하고 미들웨어를 통한 비동기 처리와 상태 추적이 용이.

### axios
- axios: 비동기 HTTP 통신 라이브러리로, async/await 통합 및 요청/응답 인터셉터 제공.

### stompjs

- stompjs: WebSocket 기반 STOMP 프로토콜을 통해 실시간 양방향 통신을 쉽게 구현하고 관리.

- STOMP 사용 이유: 기본 WebSocket API만으로는 구독/발행 패턴을 구현하는 데 어려움이 있습니다. STOMP는 이러한 메시지 전달을 쉽게 하고, 특정 채널에 대한 구독 및 메시지 라우팅을 편리하게 관리할 수 있습니다.
  
### SSE

- SSE 설명: SSE는 서버가 클라이언트에게 실시간 데이터를 푸시하는 방식의 통신.

- event-source-polyfill 사용 이유: 기본 EventSource API 대신 event-source-polyfill을 사용한 이유는 구형 브라우저 호환성과 네트워크 안정성을 높이기 위함입니다. 특히, 일부 브라우저에서 발생할 수 있는 연결 끊김 문제를 해결하고, 보다 원활한 실시간 통신을 보장합니다.


### eslint, prettier

- eslint: 코드 품질 유지와 일관된 코딩 스타일 적용을 통해 오류 방지 및 협업 효율성 향상.

- prettier: 자동 코드 포맷팅을 통해 일관성 유지 및 eslint와 통합된 관리.



### 브랜치 전략


<br>

## 3. 프로젝트 구조

```
├── README.md
├── .eslintrc.js
├── .gitignore
├── .prettierrc.json
├── package-lock.json
├── package.json
│
├── public
│    └── index.html
└── src
     ├── App.jsx
     ├── index.jsx
     ├── api
     │     └── 
     ├── asset
     │     ├── fonts
     │     ├── 
     │     ├── 
     │     └── 
     │          .
     │          .
     │          .
     ├── atoms
     │     ├── 
     │     └── 
     ├── common
     │     ├── 
     │     ├── 
     ├── pages
     │     ├── 
     │     ├── 
     │     ├── 
     │     ├── 
     │     ├── 
     ├── routes
     │     ├── 
     │     └── 
     └── styles
           └──
```

<br>

## 4. 역할 분담

### 🍊박철현

- **역할**
    - 팀장
    - 프론트엔드 개발

<br>
    
### 👻김상운

- **역할**
    - confluence 관리
    - 백엔드 개발

<br>

### 😎박민수

- **역할**
    - Jira 관리
    - 안드로이드 개발

<br>

### 🐬이민규
- **역할**
    - 웹 디자인

<br>

## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024.03 ~ 2024.10 (7개월)
- 프로젝트 기획 & 디자인 : 2024.03 ~ 2024.05 (2개월)
- 기능 구현 : 2024.05 ~ 2024.10 (5개월)
<br>

### 작업 관리

- 일정 및 세부 내용 관리: 자체적으로 만든 프로젝트 툴을 사용하여 관리.
  
- 보고서 정리: Notion을 사용해 보고서를 작성하고 정보를 정리.

- 스프린트 및 에픽 관리: Jira를 활용하여 스프린트와 에픽을 관리하고 팀원 간 업무를 조율.
  
- 수정 내용 및 코드 문서화: Confluence를 사용해 코드 수정 내용과 프로젝트 관련 문서를 정리.


<br>

## 6. 기능 설명

| 기능 | 설명 | 기능 | 설명 |
|:----:|:----:|:----:|:----:|
| `로그인` | 소셜 로그인(카카오) | `개인 스케줄 목록` | 선택된 날짜의 개인 스케줄 조회 (list) |
| `개인 스케줄 생성` | 선택된 날짜에 개인 스케줄 생성 | `그룹 스케줄 목록` | 선택된 날짜의 그룹 스케줄 조회 (list) |
| `전체 스케줄 목록` | 선택된 날짜가 포함되는 주의 모든 스케줄 조회 | `그룹 목록` | 사용자가 속한 그룹 조회 (list) |
| `그룹 생성` | 사용자가 그룹을 생성 | `그룹 상세 조회` | 그룹의 상세 페이지를 조회 |
| `그룹 스케줄 조회` | 선택된 날짜의 그룹 스케줄 조회 | `그룹 스케줄 상세조회` | 그룹 스케줄의 상세 목록을 확인 |
| `그룹 초대` | 원하는 사용자를 그룹에 초대 | `채팅` | 그룹원들과 실시간 채팅 가능 |
| `할 일 추가` | 그룹 스케줄에 할 일을 추가하여 관리 | `그룹 즐겨찾기` | 그룹을 즐겨찾기에 등록 |
| `즐겨찾기 목록` | 즐겨찾기한 그룹을 조회 (list) | `그룹초대 요청 목록` | 받은 그룹 초대 목록 조회 (list) |
| `초대 요청 수락` | 그룹 초대 요청을 수락 | `초대 요청 거절` | 그룹 초대 요청을 거절 |
| `플래너 생성` | 전체 스케줄에 대한 세부 계획 작성 및 관리	 | `스케줄 세부 내용 작성` | 각 스케줄에 대한 구체적인 세부 내용을 작성 |


<br>

## 7. 페이지별 기능



#1. 그룹 생성

https://github.com/user-attachments/assets/3f4ad64c-07df-42cb-a880-5db54e0a4fd1

#2. 그룹 초대 하기

https://github.com/user-attachments/assets/138bac15-f8ef-4ec9-b778-72b5efc884c9


#3. 그룹 초대 받기

https://github.com/user-attachments/assets/0051fb43-01ca-4f72-bfe0-f6f7cad9ed5f

#4. 그룹 채팅

https://github.com/user-attachments/assets/2c9971f4-a4d0-4972-9e8a-e59c107dc143

#5. 스케줄 생성

https://github.com/user-attachments/assets/29ef403b-fe85-4174-841b-5858048d6725

#6. 플래너 생성 

https://github.com/user-attachments/assets/6ff7ad38-02f3-4e72-8dc3-628a8accbca7







<br>



## 8. 트러블 슈팅

<br>

## 9. 개선 목표

<br>

## 10. 프로젝트 후기

### 🍊 박철현


<br>

### 👻 김상운


<br>

### 😎 박민수

<br>

### 🐬 이민규
