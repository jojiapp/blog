# Abstraction (추상화)

## 추상화 란?

자식 클래스에서 공통점을 추출하여 부모 클래스에 선언하는 것을 말합니다.

## 추상 클래스 (Abstract Class) 란?

일반 클래스에서 추상화가 추가 된 클래스 입니다.

### 추상 클래스의 특징

- 추상 클래스는 직접 인스턴스를 생성할 수 없습니다.
- 추상 클래스에 선언된 추상 메소드는 **무조건 Overriding**해야 합니다.

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
  public static void main(String[] args){
    Foo foo = new Foo(); // error
    Foo goo = new Goo(); // 가능
    
    goo.print(); // Goo
    goo.println(); // Foo
  }
}
```

기본적으로 일반 클래스 상속과 똑같지만, `abstract` 키워드가 들어간 메소드는 반드시 **Overriding** 해야 하며,
직접 인스턴스 생성은 불가능 하여, 자식 인스턴스를 주입 받아야 합니다.
그렇다고 추상 클래스에 무조건 추상 메소드가 들어갈 필요는 없습니다.

추상 메소드를 **Overriding**하기 싫다면, 해당 클래스로 추상 클래스가 되면 됩니다.

> 단, 그렇다고 하더라도 `abstract` 키워드가 붙은 클래스(추상 클래스)는 인스턴스를 직접 생성할 수는 없고, 반드시 자식 클래스의 인스턴스를 주입 받아야 합니다.
