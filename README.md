# ComputerApplicationDesign
ComputerApplicationDesign

![image](https://user-images.githubusercontent.com/74190329/142432091-38a343f3-64aa-431f-9789-48b5121a2c74.png)

# 허 민

## **FrontEnd - 동작이 이상한 부분**

1. **Exercise** → db 테이블 내 exercise가 있는데도 선택이 안됨,
2. **Diet →** 음식 선택 후에도 테이블에 변화가 없음. → 새로고침 처리

# 송경진

## **FrontEnd - 추가부분**

1. 사용자 입력으로 음식 추가 페이지
2. 사용자 입력으로 운동 추가 페이지

# 김기현

## 모니터링 툴

1. 모니터링 툴 prometheus + Grafana 
    1. 오픈소스 → 파일 입출력 → 파일 읽기
2. 모니터링 툴 시각화

## 협업 환경 구성

1. Docker Image Push
2. 이미지 빌드 시, 더미 SQL 데이터 추가

### 메세지 큐 사용 kafaka나 rabbitmq
-> 시나리오 3으로도 사용할 수도

# 김동현

서버(컨테이너) 브로커 역할

Mosquitto → MQTT(어플)이 서버 구독 → 메시지 수령

## SQL 더미데이터 생성

## 시나리오 구성

1. **시나리오 1** - 동적 자원 할당
    1. 자원 점유율 확인할 수 있는가?
    2. 자원을 추가적으로 할당할 수 있는가?
    3. 모니터링 모듈 살펴보기
2. **시나리오 2** - 결함 포용
-> 꺼졌을 때 다시 시작할 수 있는가?
-> 헬스 모듈 체크
3. **시나리오 3** - (제안하는 서비스)
    1. 시나리오 1,2의 상황 발생으로 처리 상황을 메시지큐로 슈퍼바이저에게 전달
    2. **메세지 큐 사용** kafaka나 rabbitmq
    -> 시나리오 3으로도 사용할 수도

# 최혜민

## 설계안 초안 구성 ppt (10페이지 이내) → 12/3(목)까지

1. 팀소개
2. 전체 구조도(사용자 영역+운영 영역) + 설명

1. 사용자 영역 구조도 + 설명
2. 운영 영역 구조도 + 설명
3. 프로젝트 추진 일정
4. 역할 

## Git 관리
