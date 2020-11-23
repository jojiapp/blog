# Overloading (오버로딩)

## Overloading 이란?

오버로딩은 같은 클래스 내에서 같은 이름으로 메소드를 여러 개 만드는 것을 말합니다.

## Overloading 규칙

- `같은 이름`이여야 합니다.
- 파라미터의 `타입`, `개수`, `순서` 중 하나라도 달라야 합니다.

## Overloading 정의 방법

```java
public class Foo {
  public void print(String str) {
    System.out.printf("문자열 : %s", str);
  }
  public void print(int num) {
    System.out.printf("숫자 : %d", num);
  }
  public void print(String str, int num) {
    System.out.printf("문자열과 숫자 : %s, %d", str, num);
  }
  public void print(int num, String str) {
    System.out.printf("숫자와 문자열 : %d, %s", num, str);
  }
}
```

- 이런식으로 파라미터의 `타입`, `개수`, `순서` 중 하나라도 다르면 같은 이름으로 메소드를 만들 수 있습니다.
- 오버로딩 된 메소드는 호출 시 전달 받은 인자에 따라 해당하는 메소드가 실행됩니다.

## Overloading 시 주의할 점

오버로딩은 `같은 이름`과 `파라미터의 타입, 개수, 순서`가 핵심입니다.

```java
public class Foo {
  public void print(String str) {
    System.out.printf("문자열 : %s", str);
  }
  public void print(String text) {
    System.out.printf("문자열 : %s", text);
  }
}
```

- 위와 같이 파라미터의 이름이 다른 것은 아무런 의미가 없습니다. 반드시 `타입`, `개수`, `순서` 중 하나가 달라야만 합니다.

```java
public class Foo {
  public String print(String str) {
    System.out.printf("문자열 : %s", str);
    return str;
  }
  public void print(String str) {
    System.out.printf("문자열 : %s", text);
  }
}
```

- 위와 같이 파라미터의 리턴 타입 또한 아무런 영향을 받지 않습니다. 우리가 호출 할 때 넘겨주는 파라미터로 어떤 메소드를 실행할지 판단 하기 때문입니다.

> 생성자도 오버로딩이 가능하며, 규칙은 똑같습니다.