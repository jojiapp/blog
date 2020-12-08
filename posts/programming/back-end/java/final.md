# Final (상수)

## Final 이란?

`final` 키워드가 붙으면 변경이 불가능 합니다.

## 변수에 final이 붙었을 경우

```java
public class Foo {
  String name = "foo";
  final int age = 20;

  public static void main(String[] args) {
    name = "goo"; // 가능
    age = 23; // 불가능
  }
}
```

- 변수에 `final` 키워드가 붙으면 상수가 되어, 값 변경이 불가능 합니다.

## 메소드에 final이 붙었을 경우

*Foo.java*

```java
public class Foo {
  public void print() {
    System.out.println("foo");
  }

  public final void println() {
    System.out.println("foo");
  }
}
```

*Goo.java*

```java
public class Goo {

  @Override
  public void print() {
    System.out.println("goo");
  }

  @Override
  public final void println() {
    System.out.println("goo"); // 오버라이딩 불가능
  }
}
```

- 메소드에 `final`이 붙으면 **Overriding**이 불가능 합니다.

## 클래스에 final이 붙었을 경우

*Foo.java*

```java
public final class Foo {
  String name;
  int age;
}
```

*Goo.java*

```java
public class Goo extends Foo {
  String email;
} // 상속 불가능
```

- 클래스에 `final`이 붙으면 상속이 불가능 합니다.
