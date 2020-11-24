# Overriding (오버라이딩)

## Overriding 이란?

상속 관계에서 부모 클래스가 정의 해 놓은 메소드를 자식 클래스가 재정의 하는 것을 말합니다.

> Overriding이 있기에 클래스 다형성이 가능합니다.

## Overriding 규칙

- 부모클래스의 메소드와 시그니처(**리턴 타입, 메소드 명, 매개변수**)가 동일해야 합니다.
- 접근 제한자는 더 좁아질 수 없습니다.
- 새로운 예외를 `throws` 할 수 없습니다.

## Overriding 하는 방법

*Foo.java*
```java
public class Foo {

  public void print() {
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

- `@Override` 는 없어도 무관하지만, 만약 시그니처가 다른 메소드를 정의한다면 그건 **Overloading**이 됩니다. 실수로 그런 상황이 발생 했을 때 이상하다고 알려주는 **Annotation**이기 때문에 대도록 붙여주시는게 좋습니다.

*Ex.java*
```java
public class Ex {

  public void main(String[] args) {
    Foo foo = new Foo();
    foo.print(); // Foo

    Goo goo = new Goo();
    goo.print(); // Goo
  }
}
```

부모 클래스로 부터 상속받은 메소드를 재정의 하면, 부모 클래스의 메소드는 **은닉** 됩니다.
따라서, 해당 메소드를 사용하면 재정의 된 메소드가 실행됩니다.

## 클래스의 다형성

**클래스의 다형성**은 하나의 자료형에 다른 객체를 넣어 다양한 결과를 가져 오는 것을 말합니다.

*Foo.java*
```java
public class Foo {

  public void print() {
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

  public void main(String[] args) {
    Foo goo = new Goo();
    goo.print(); // Goo
  }
}
```

`Goo` 클래스는 `Foo` 클래스를 상속 받았기 때문에 **UpCasting**이 가능합니다.
**UpCasting**을 하면 객체의 주소는 그대로지만, `Foo` 클래스가 사용할 수 있는 범위에서만 사용이 가능합니다. (위의 경우는 **UpCasting**을 해도 동일)

하지만 생성된 객체는 여전히 같으므로 `print()` 메소드를 호출하면 `Goo` 클래스에서 재정의 된 `print()` 메소드가 호출 됩니다.

> 하나의 자료형에 다른 객체를 넣어 다양한 결과를 가져 오는 것. 그것이 클래스의 다형성입니다.