# Abstraction (추상화)

## 추상화 란?

자식 클래스에서 공통점을 추출하여 부모 클래스에 선언하는 것을 말합니다.

## 추상 클래스 (Abstract Class) 란?

일반 클래스에서 추상화가 추가 된 클래스 입니다.

### 추상 클래스의 특징

- 추상 클래스는 직접 인스턴스를 생성할 수 없습니다.
- 추상 클래스에 선언된 추상 메소드는 **반드시 Overriding**해야 합니다.

### 추상 클래스 사용방법

- 접근 제한자 뒤에 `abstract` 키워드를 붙여 만들 수 있습니다.

*Foo.java*

```java
public abstract class Foo {
  public abstract void print();

  public void println() {
    System.out.println("Foo");
  }
}
```

*Goo.java*

```java
public class Goo extends Foo {
  @Override
  public void print() {
    System.out.println("Goo");
  }
}
```

*Ex.java*

```java
public class Ex {
  public static void main(String[] args) {
    Foo foo = new Foo(); // error
    Foo goo = new Goo(); // 가능

    goo.print(); // Goo
    goo.println(); // Foo
  }
}
```

기본적으로 일반 클래스 상속과 똑같지만, `abstract` 키워드가 들어간 메소드는 반드시 **Overriding** 해야 하며, 직접 인스턴스 생성은 불가능 하여, 자식 인스턴스를 주입 받아야 합니다. 그렇다고
추상 클래스에 무조건 추상 메소드가 들어갈 필요는 없습니다.

추상 메소드를 **Overriding**하기 싫다면, 해당 클래스로 추상 클래스가 되면 됩니다.

> 단, 그렇다고 하더라도 `abstract` 키워드가 붙은 클래스(추상 클래스)는 인스턴스를 직접 생성할 수는 없고, 반드시 자식 클래스의 인스턴스를 주입 받아야 합니다.

## 인터페이스 (Interface) 란?

추상 클래스가 일반 클래스 + 추상화라면, 인터페이스는 Only 추상화입니다.

### 인터페이스 특징

- 상수와, 추상 메소드만 가질 수 있습니다.
- 상속과는 다르게 다중 구현이 가능합니다.
- 인터페이스는 직접 인스턴스를 생성할 수 없습니다.
- 인터페이스에 선언된 추상 메소드는 **반드시 Overriding**해야 합니다.

### 인터페이스 사용 방법

*Foo.interface*

```java
public interface Foo {
  String name = "foo";

  void print();
}
```

*Goo.interface*

```java
public interface Goo {
  int age = 24;

  void print(String name);
}
```

- `class` 대신 `interface`를 적습니다.
- `interface`는 정적 상수와 추상 메소드만 가능합니다.
    - 필드앞에 `public static final` 생략되어 있습니다.
    - 메소드 앞에 `public abstract` 생략 되어 있습니다.

*Hoo.class*

```java
public class Hoo implements Foo, Goo {

  @Override
  public void print() {
    System.out.println("Foo Interface");
  }

  @Override
  public void print(String name) {
    System.out.println("Goo Interface");
  }
}
```

- `implements` 키워드를 이용해서 여러 개의 `interface`를 상속 받을 수 있습니다.
- 모두 추상 메소드이기 때문에, 전부 **Overriding** 해주어야 합니다.

*Ex.java*

```java
public class Ex {

  public static void main(String[] args) {
    Foo foo = new Hoo();
    Goo goo = new Hoo();

    foo.print(); // Foo Interface
    goo.print("goo"); // Goo interface
  }
}
```

- 두 개의 인터페이스를 상속받아 다중 구현 했기 때문에, 두 개의 인터페이스로 모두 **UpCasting**이 가능합니다.
