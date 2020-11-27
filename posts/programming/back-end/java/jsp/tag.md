# JSP 태그

## JSP 기본 태그

[JSP 문법](https://atoz-develop.tistory.com/entry/JSP-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95-%EC%B4%9D-%EC%A0%95%EB%A6%AC-%ED%85%9C%ED%94%8C%EB%A6%BF-%EB%8D%B0%EC%9D%B4%ED%84%B0-JSP-%EC%A0%84%EC%9A%A9-%ED%83%9C%EA%B7%B8-%EB%82%B4%EC%9E%A5-%EA%B0%9D%EC%B2%B4)

### Directives (지시자)

```jsp
<%@ %>
```

- Encoding 같은 해당 페이지에 대한 설정을 정의할 때 사용하는 태그입니다.

### Scriptlet Elements (스크립트릿)

```jsp
<% %>
```

- Java 코드가 들어가는 태그입니다.
- Servlet 파일을 만들 때 그대로 복사됩니다.

### Declarations (선언문)

```jsp
<%! %>
```

- Servlet 클래스의 필드, 메소드를 선언할 때 사용됩니다.
- 작성 위치는 상관 없습니다.

### Expressions (표현식)

```jsp
<%= %>
```

- 결과를 반환하는 Java 코드만 올 수 있습니다.