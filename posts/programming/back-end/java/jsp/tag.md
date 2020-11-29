# Tag (태그)

## JSP 기본 태그

[JSP 문법](https://atoz-develop.tistory.com/entry/JSP-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95-%EC%B4%9D-%EC%A0%95%EB%A6%AC-%ED%85%9C%ED%94%8C%EB%A6%BF-%EB%8D%B0%EC%9D%B4%ED%84%B0-JSP-%EC%A0%84%EC%9A%A9-%ED%83%9C%EA%B7%B8-%EB%82%B4%EC%9E%A5-%EA%B0%9D%EC%B2%B4)

### Directives (지시자)

```html
<%@ %>
```

- Encoding 같은 해당 페이지에 대한 설정을 정의할 때 사용하는 태그입니다.

### Scriptlet Elements (스크립트릿)

```html
<% %>
```

- Java 코드가 들어가는 태그입니다.
- Servlet 파일을 만들 때 그대로 복사됩니다.

### Declarations (선언문)

```html
<%! %>
```

- Servlet 클래스의 필드, 메소드를 선언할 때 사용됩니다.
- 작성 위치는 상관 없습니다.

### Expressions (표현식)

```html
<%= %>
```

- 결과를 반환하는 Java 코드만 올 수 있습니다.

## JSP 액션 태그

### useBean

- Java 인스턴스를 가져오거나, 생성하는 태그입니다.

> **Java 인스턴스**를 **Bean**이라고 합니다.

*com.company.Foo.java*
```java
public class Foo {
  private String name;
  private int age;
  
  public String getName() {
      return name;
    }
  
    public void setName(String name) {
      this.name = name;
    }
  
    public int getAge() {
      return age;
    }
  
    public void setAge(int age) {
      this.age = age;
    }
}
```

```html
<jsp:useBean id="foo" class="com.company.Foo />
```

```java
Foo foo = new Foo();
```

- 위의 두 개는 동일합니다.

### setProperty

- 해당하는 **Java Bean**의 필드 값을 설정하는 태그입니다.
- 해당하는 필드의 **Setter**를 호출합니다.

```html
<jsp:setProperty name="foo" property="name" value="jojapp"/>
```

- **name**: **Java Bean**의 **id 값**을 적어주면 됩니다.
- **property**: **필드 명**을 적어주면 됩니다.
- **value**: **설정 할 값**을 적어주면 됩니다.

#### Parameter 값 전체 주입하기

```java
String name = request.getParameter("name");
int age = Integer.parseInt(request.getParameter("age"));
```

기존에는 이렇게 **Parameter 값**을 하나하나 변수에 넣어줘야 했습니다.
**Parameter**는 `String` 타입이기 때문에, 다른 타입의 경우 변환 작업이 필요헀었습니다.

그러나, `useBean`과 `setProperty`를 사용하면 간편하게 값을 바인딩 할 수 있습니다. 

```html
<jsp:useBean id="foo" class="com.company.Foo>
  <jsp:setProperty name="foo" property="*"/>
</jsp:useBean>
```

- `*` 을 적어주면 넘어온 **Parameter**를 `foo`객체 안의 필드에 값을 다 설정해 줍니다. (다른 형도 자동으로 변환하여 넣어줍니다.)

> 단, 넘어온 **Parameter**가 `foo` 객체 안의 필드와 이름, 개수가 모두 일치해야 합니다. 일치하지 않으면 에러가 납니다.

> **form**에서 **post방식**으로 넘긴 값도 받아집니다. (그것도 `request.getParameter()`로 받기 때문에 **Parameter**로 통일했습니다.)

### getProperty

- 해당하는 **Java Bean**의 필드 값을 가져오는 태그입니다.
- 해당하는 필드의 **Getter**를 호출합니다.

```html
<jsp:setProperty name="foo" property="name"/>
```

- **name**: **Java Bean**의 **id 값**을 적어주면 됩니다.
- **property**: **필드 명**을 적어주면 됩니다.

### forward

- 현재 페이지의 정보를 유지한 채 페이지를 이동하는 태그입니다.

```html
<jsp:forward page="a.jsp"/>
```

- a.jsp 페이지로 이동합니다. (`request`의 정보는 유지한 채 이동합니다.)

```html
<jsp:forward page="a.jsp">
  <jsp:param name="name" value="jojiapp"/>
</jsp:forward>
```

- 페이지를 이동 할 때 **Parameter**를 같이 넘겨 줄 수 있습니다.

> `reuqest`객체는 유지하지만, `pageContext` 객체는 사라지고 해당 페이지의 `pageContext`객체가 새롭게 생성됩니다.

### include

- 현재 페이지에 다른 페이지를 `include` 하는 태그 입니다.

*a.jsp*
```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<span>페이지 a삽입</span>
```

*index.jsp*
```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>index</title>
</head>
<body>
  <span>index 페이지</span>
  <jsp:include page="a.jsp"/>
</body>
</html>
```

- **index 페이지 페이지 a삽입** 으로 **a.jsp**가 제대로 `include` 된걸 볼 수 있습니다.

```html
<jsp:include page="a.jsp">
  <jsp:param name="name" value="jojiapp"/>
</jsp:include>
```

- `include`태그 안에도 **Parameter**를 넣어 넘겨줄 수 있습니다.

> 주의 할 점은 페이지를 `include`하는 것이기 때문에, 중복되는 \<html\>같은 태그는 적지 않도록 해야 합니다.

> 중복되는 코드는 빼라고 하면서 `<%@ page contentType="text/html;charset=UTF-8" language="java" %>`는 왜 각각 적어줬을까?
> 그 이유는, 페이지를 `include`할 때 해당 페이지를 **Servlet**파일로 만들고 해당 **Servlet**파일을 붙여 넣는것입니다.
> 즉, `<%@ page contentType="text/html;charset=UTF-8" language="java" %>`가 없으면 **Servlet**파일로 만들 때, **Encoding**이 되지 않아 문자가 깨지게 됩니다.
