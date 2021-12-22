# ComputerApplicationDesign
ComputerApplicationDesign

|이름|내용|
|------|---|
|김기현||
|김동현||
|송경진||
|최혜민||
|허  민||

![image](https://user-images.githubusercontent.com/74190329/142432091-38a343f3-64aa-431f-9789-48b5121a2c74.png)

# system architecture

<img src=https://user-images.githubusercontent.com/58874807/144533684-40770b0c-2b00-4659-adf6-dca8815e715c.png width="60%"/>


# 허 민

## **FrontEnd - 동작이 이상한 부분**
### 1. 프론트엔드 서비스 분석
### 2. 기존 리액트 레거시 코드 DB 이슈 핸들링
### 3. 기존 리액트 컴포넌트 렌더링 이슈 핸들링
### 4. 사용자 기반 컴포넌트 UI 문서화

# 송경진

## **FrontEnd - 추가부분**

### 1. 운동 데이터 타입 생성 및 컨트롤러에 운동 데이터 생성 함수 구현
### 2. 식단 데이터 타입 생성 및 컨트롤러에 식단 데이터 생성 함수 구현
### 3. 식단, 운동 추가 페이지 구현

# 김기현

### 1. kafka 연결을 통한 db query요청 장애 대응(transcarion 유지), 클러스터화
    - kafka
    - zookeeper
### 2. 각 마이크로 서비스의 api,서버의 자원 상태를 체크하는 log 수집해서 prometheus로 전송
    - spring micrometer - 각 마이크로 서비스의 api 상태, 자원상태 체크 로그 수집
    - spring actutar
### 3. micro service circuitbreaker 기능 추가
    - resilience4j
    - prometheus를 통한 모니터링 가능 설정
### 4. nginx이미지위에 front코드 올려서 container화 dockerfile 작성
    - nginx
    - react
    bug-fix -> react-script module이 버전이 너무 낮아서 version up
### 5. docker-compose
    front container, prometheus.yml 수정
### 6. spring api 추가, 의존성 관리
    exercise-service - Controller: 운동 추가 하는 api 추가
    gateway-service - user health check api(user's ip, port etc..)
### Git 관리

# 김동현

### 1. Notion 관리
### 2. Git 관리
### 3. docker-compose
```
healthcheck curl - 각 컨테이너마다 태그 설정
network - curl을 위한 컨테이너 ip설정
init SQL - 데이터베이스 뼈대 생성, 더미 데이터 추가
```
### 4. 결함포옹 모듈
```
HealthCheck.py
RunContainer.py
```

# 최혜민

### 설계안 초안 구성 ppt 및 발표
### 1. 시나리오 1
```
DynamicAllocation.py
```
### 2. Alertmanager to Slack
```
alert_rules.yml
alertmanager.yml
```


