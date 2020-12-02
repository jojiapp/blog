# Built-in Object (내장 객체)

## 내장 객체 란?

[내장 객체 참조](https://pathas.tistory.com/184]

JSP에서 **자체적으로 생성하여 가지고 있는 객체**를 말합니다.
자동으로 생성되기 때문에, 우리는 그냥 사용하면 됩니다.

## pageContext

- **해당 페이지의 정보**를 담고 있는 객체입니다.

```html
<%
  pageContext.setAttribute("foo", "foo value"); // 속성 저장하기
  pageContext.getAttribute("foo"); // key 값과 동일한 속성 가져오기
%>
```

**pageContext** 객체는 **페이지가 변경될 때마다 새롭게 생성**되기 때문에, 위의 설정 값은 페이지가 변경되면 사라지게 됩니다.

## request

- **클라이언트의 요청 정보**를 저장하고 있는 객체입니다.

```html
<%
  String name = request.getParameter("name"); // 요청 시 같이 넘어온 Parameter를 받을 수 있습니다.

  request.setAttribute("foo", "foo value");
  request.getAttribute("foo");
%>
```

**request** 객체는 **페이지가 변경 될 때마다 새롭게 생성**되기 때문에, 위의 설정 값은 페이지가 변경되면 사라지게 됩니다.

### pageContext와 request의 차이

둘 다, 페이지가 변경되면 새롭게 생성되는 것은 똑같습니다.
그러나, **request**객체는 **클라이언트의 요청 정보**를 가지고 있기 때문에, **Parameter**값을 가져 올 수 있습니다.

**Parameter** 값을 가져 올 수 있다는 말은 해당 값을 다시 **Parameter** 값으로 넘겨 줌으로 써, 값을 유지 할 수 있다는 말입니다.

> 즉, **pageContext**나 **request** 둘 다, 페이지가 변경 되면 새롭게 생성되는건 같으나,
> **request** 객체는 요청 시 넘어온 데이터를 가지고 있으므로 **Scope**가 조금 더 큽니다.

## response

- **서버의 응답 정보**를 저장하고 있는 객체입니다.

```html
<%
  Cookie cookie = new Cookie("foo", "foo value");
  response.addCookie(cookie);
%>
``` 

Cookie를 생성하여 해당 Cookie를 **response**에 저장하였습니다.
이제 클라이언트가 요청에 대한 응답을 받으면, 해당 Cookie가 클라이언트의 컴퓨터에 저장되게 됩니다.

저장된 Cookie는 매 요청마다 자동으로 요청 정보(request)에 담겨져 옵니다.

> **response**와 **request**의 **Scope**는 동일합니다.

## session

- **클라이언트의 정보**를 저장하고 있는 객체입니다.

```html
<%
  session.setAttribute("foo", "foo value");
  session.getAttribute("foo");
%>
```

**session**은 브라우저당 하나 씩 생성되는 객체입니다.

브라우저를 닫거나, `session.invalidate();`를 사용하거나, **session의 id값**을 들고 있는 **Cookie**를 삭제하거나, 30분 동안 페이지의 이동이 없는게 아니라면,
페이지의 변경과 상관없이 유지되는 객체입니다.

그래서, 페이지가 계속 변경되도 유지되어야 하는 정보(로그인 정보 등)를 **session** 객체에 저장합니다.

> 페이지를 변경할 때 마다 생성되는 **request** 객체보다 **Scope**가 더 큽니다.

### 그럼 클라이언트와 계속 연결되어 있는 것인가?

**HTTP**는 한 번의 요청에 한 번의 응답을 하고 연결을 끊어버리는 정적인 프로토콜인데,
**session**은 마치 클라이언트와 연결되어 있는 것 처럼 클라이언트 마다 해당하는 정보를 보내주고 있습니다.

이것은, 사실 **Cookie**를 이용해서 가능한 것 입니다.

**session**은 브라우저 마다 하나씩만 생성된다고 했습니다.
이렇게 생성 된 **session**객체에는 **id 값**이 있는데, 이 **id 값**을 **Cookie**에 저장하여 클라이언트에게 보냅니다.

그러면, 요청을 할 때마다 클라이언트는 자신에게 저장된 **Cookie**를 같이 보내게 되고,
서버에 저장되어 있는 **session** 중,
**Cookie**로 넘어온 **session의 id 값**과 일치하는 **session**을 찾아 해당 **session**을 사용하는 것 입니다.

그래서, 해당 **Cookie**가 사라지게 된다면 **session**을 찾을 수 없어, 다시 새로운 **session**을 생성하여 저장하게 됩니다.

## application

- **Web Application의 정보**를 저장하고 있는 객체입니다.

```html
<%
  application.setAttribute("foo", "foo value");
  application.getAttribute("foo");
%>
```

서버가 실행 될 때 한 번만 생성되는 객체로, 모두가 공유하는 객체입니다.

> 브라우저 마다 생성되는 **session** 객체보다 **Scope**가 더 큽니다.

## out

- JSP 페이지의 출력할 내용을 가지고 있는 출력 스트림 객체

```html
<div>
<%
  out.print("foo");
%>
</div>
```

`foo`가 해당 위치에 출력 됩니다.

> 이 외에, config(설정 관련), page(페이지의 서블릿 객체), exception(예외 처리를 위한 객체)가 있습니다.