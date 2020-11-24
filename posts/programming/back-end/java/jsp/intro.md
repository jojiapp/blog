# JSP 소개

## Servlet 이란?

[Servlet과 JSP 비교](https://m.blog.naver.com/acornedu/221128616501)

**Servlet**은 웹 기반 요청을 동적으로 처리 하는 **Java**의 **Server Side Program** 이며, 웹앱을 개발하기 쉽게 만든 **API**입니다.
규약에 맞는 클래스들을 상속 및 구현하여 만든 클래스를 **Servlet**이라고 합니다

- **Java** 코드 안에 **HTML** 코드가 들어갑니다. (정확히는 `String`으로 **HTML** 코드를 구현)

### Servlet의 단점

- **화면 Interface 구현**에 너무 많은 코드가 필요합니다.
- **HTML** 코드를 전부 `String`으로 처리해야 합니다.

## JSP (Java Server Page) 란?

**JSP**는 **Servlet**의 단점을 보완하고자 만든 **Servlet 기반의 스크립트 언어**입니다.
**Servlet**은 모든 **HTML**을 `String`으로 만들어야 했지만, **JSP**는 **HTML**과 **Java**를 모두 사용 할 수 있습니다.

- **HTML** 코드 안에 **Java** 코드가 들어갑니다. (정확히는 **HTML** 코드와 **Java** 코드를 같이 사용)

## MVC 패턴

- **Model**: 비즈니스 로직을 처리 (**DB**와 소통)
- **View**: 화면의 UI를 처리 (**JSP**)
- **Controller**: **Model**과 **View**를 연결해 주는 다리 역할

서버로 요청을 보내면 해당 **URL**과 일치하는 **Controller**가 받아서 **Model**과 작업을 한 뒤,
작업 한 데이터를 **View**에 보냅니다. 그러면 **View**는 받은 데이터를 가지고 동적인 웹 페이지를 만들어 사용자에게 보여줍니다.

기존에는 **JSP** 만으로 다 처리하는 **Model 1 방식**을 썼지만,
유지보수 시 힘든점이 많아 요즘은 **Servlet**과 **JSP**를 동시에 쓰는 **Model 2 (MVC 패턴) 방식**을 사용합니다.