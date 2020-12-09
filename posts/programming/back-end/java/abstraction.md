# Abstraction (추상화)

## 추상화 란?

자식 클래스에서 공통점을 추출하여 부모 클래스에 선언하는 것을 말합니다.

## 추상 클래스 (Abstract Class) 란?

일반 클래스에서 추상화가 추가 된 클래스 입니다.

### 추상 클래스의 특징

- 추상 클래스는 직접 인스턴스를 생성할 수 없습니다.
- 추상 클래스에 선언된 추상 메소드는 **반드시 Overriding**해야 합니다.

### 추상 클래스 사용 방법

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

`class`들이 구현해야 하는 동작을 지정하는데 사용되는 자료형입니다.

`interface`를 받아 **Overriding**하는 클래스를 **구현 클래스**라고 합니다

> 추상 클래스가 일반 클래스 + 추상화라면, 인터페이스는 Only 추상화입니다.

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

- `implements` 키워드를 이용해서 여러 개의 `interface`를 다중 구현 할 수 있습니다.
- 전부 추상 메소드이기 때문에, 전부 **Overriding** 해주어야 합니다.

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

- 두 개의 `interface`를 다중 구현 했기 때문에, 두 개의 `interface`로 모두 **UpCasting**이 가능합니다.

### 인터페이스 다중 상속

*Foo.interface*

```java
public interface Foo {
  void printFoo();
}
```

*Goo.interface*

```java
public interface Goo {
  void printGoo();
}
```

*Hoo.interface*

```java
public interface Hoo extends printFoo, printGoo {
  void printHoo();
}
```

*Joo.java*

```java
public class Joo implements Hoo {

  @Override
  public void printFoo() {
    System.out.println("Foo");
  }

  @Override
  public void printGoo() {
    System.out.println("Goo");
  }

  @Override
  public void printHoo() {
    System.out.println("Hoo");
  }
}
```

`class`에서 `interface`는 `extends`로 받을 수 없고 반드시 `implements`로 받아야 합니다. 반면, `interface`가 `interface`를 받을 땐, `extends` 키워드를
사용하여 상속 받아야 합니다.

> `class`가 `interface`를 받을 땐 **구현**을 해야하는 것이고, `interface`가 `interface`를 받을 땐, **확장**을 하는 개념이기 때문입니다.

`class`는 `extends`는 하나만 가능하나, `implements`는 여러 개가 가능한 반면,
`interface`는 `extends`는 여러 개를 받을 수 있으나, `implements`는 불가능합니다.

### interface에 implements를 사용할 수 없는 이유

`implements` 키워드를 사용하여 받으면, 무조건 받은 `interface`를 **Overriding**을 해야 합니다. 그런데 `interface`는 **Overriding**이 불가능 하기 때문에 사용할
수 없는 것 입니다.

### class는 단일 상속만 되고, interface는 다중 상속이 가능한 이유

상속은 기능을 확장하는 기능입니다. 그런데, `class`는 **Overriding**하지 않으면 부모가 정의한 기능을 그대로 사용하게 됩니다. 이 때, 여러 개의 부모 클래스가 같은 이름의 메소드를 정의하였다면,
자식 클래스는 어떤 메소드를 호출해야할지 모르기 때문에 다중 상속이 불가능합니다.

반면, `interface`는 여러 개의 부모를 상속 받더라도, 똑같은 시그니처의 메소드가 있다면, 하나만 선언해두고, 해당 `interface`를 `implements`받은 `class`에서 해당 메소드를
**Overriding**하면, 상속 받은 모든 `interface`에서 **Overriding**한 메소드를 사용하면 되기 때문에 혼란이 없습니다.

> 즉, `interface`의 상속은 무조건 **Overriding**을 하기 때문에 어떤 것을 사용해야 할지 아는 반면,
> `class`의 상속은 **Overriding**에 대한 강제성이 없기 때문에, 메소드 호출에 혼란이 있을 수 있어 다중 상속이 불가능합니다.
