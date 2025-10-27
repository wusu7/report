# RESTful API 정의와 사용 방법

## 1. 서론

RESTful API는 현대 웹 개발에서 서버와 클라이언트 간 데이터 통신을 효율적으로 구현하기 위한 핵심 기술입니다. 본 보고서에서는 RESTful API의 정의, 특징, 구성요소, 설계 원칙, 사용 방법, 그리고 실습 예시까지 단계별로 정리합니다.

---

## 2. RESTful API 정의

### 2.1 REST란?

REST(Representational State Transfer)는 웹 기반 시스템의 아키텍처 스타일 중 하나로, 자원을 **URI(Uniform Resource Identifier)**로 정의하고, HTTP 메서드를 통해 상태를 표현하고 조작합니다.

### 2.2 RESTful API란?

RESTful API는 REST 아키텍처 스타일을 준수하여 설계된 API를 의미합니다.  
주요 특징:

- **자원(Resource) 중심**: 데이터나 기능을 자원 단위로 표현
- **HTTP 메서드 활용**: GET, POST, PUT, DELETE 등을 사용
- **무상태성(Stateless)**: 각 요청은 독립적이며 서버는 상태를 저장하지 않음
- **표현 형식(Representation)**: JSON, XML 등 다양한 형식으로 데이터 전달
- **URI 설계**: 직관적이고 의미 있는 URL 사용

---

## 3. RESTful API 구성 요소

| 구성 요소                  | 설명                                              |
| -------------------------- | ------------------------------------------------- |
| **URI**                    | 자원을 식별하는 주소 (예: `/users`, `/posts/123`) |
| **HTTP 메서드**            | 자원에 대한 행위 정의 (GET, POST, PUT, DELETE 등) |
| **요청(Request)**          | 클라이언트가 서버에 보내는 데이터 및 명령         |
| **응답(Response)**         | 서버가 클라이언트에 보내는 상태와 데이터          |
| **상태 코드(Status Code)** | 요청 결과를 표현 (200, 201, 400, 404, 500 등)     |

---

## 4. RESTful API 설계 원칙

1. **자원 중심 설계**: 명사 기반의 URI 사용  
   예: `/users`, `/users/123/posts`
2. **HTTP 메서드 일관성**:
   - GET: 데이터 조회
   - POST: 데이터 생성
   - PUT: 데이터 전체 수정
   - PATCH: 데이터 부분 수정
   - DELETE: 데이터 삭제
3. **무상태성 유지**: 요청마다 필요한 모든 정보를 포함
4. **표준 상태 코드 사용**: 요청 성공/실패를 명확히 표현
5. **표현 형식 일관성**: 주로 JSON 사용, 필요 시 XML 등 지원

---

## 5. RESTful API 사용 방법

### 5.1 요청 예시 (HTTP 메서드별)

#### GET - 데이터 조회

```http
GET /users/123
Host: api.example.com
Accept: application/json
```

#### POST - 데이터 생성

```http
POST /users
Host: api.example.com
Content-Type: application/json

{
  "name": "홍길동",
  "email": "hong@example.com"
}
```

#### PUT - 데이터 전체 수정

```http
PUT /users/123
Host: api.example.com
Content-Type: application/json

{
  "name": "홍길순",
  "email": "hong2@example.com"
}
```

#### DELETE - 데이터 삭제

```http
DELETE /users/123
Host: api.example.com
```

### 5.2 응답 예시

```json
{
  "status": 200,
  "message": "요청 성공",
  "data": {
    "id": 123,
    "name": "홍길동",
    "email": "hong@example.com"
  }
}
```

### 5.3 상태 코드 예시

| 코드 | 의미           |
| ---- | -------------- |
| 200  | 성공           |
| 201  | 생성 성공      |
| 400  | 잘못된 요청    |
| 401  | 인증 실패      |
| 404  | 자원 없음      |
| 500  | 서버 내부 오류 |

---

## 6. RESTful API 사용 실습

1. **API 테스트 도구 사용**: Postman, Insomnia, cURL
2. **요청 보내기**: GET, POST, PUT, DELETE 요청 작성
3. **응답 확인**: 상태 코드, 메시지, 데이터 확인
4. **에러 처리**: 잘못된 요청 시 서버 응답 확인 및 디버깅

---

## 7. 결론

RESTful API는 웹과 모바일 애플리케이션에서 데이터 통신의 표준 방식입니다.  
올바른 RESTful 설계는 유지보수성을 높이고, 클라이언트와 서버 간 효율적인 데이터 교환을 가능하게 합니다.  
이를 위해 URI, HTTP 메서드, 상태 코드, 데이터 표현 방식을 일관되게 사용하는 것이 중요합니다.
