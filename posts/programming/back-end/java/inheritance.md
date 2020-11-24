# 상속 (Inheritance)

## 상속이란?

현실 세계에서 상속이란 부모가 자식에게 물려주는 유산 같은 것을 말합니다.
프로그래밍 세계에서도 똑같이 적용됩니다.
부모 클래스로 부터 물려받은 필드와 메소드는 정의 할 필요 없이 내 것처럼 사용할 수 있습니다.

> 조금 다른게 있다면, 현실 세계에선 부모님에게 상속 결정권이 있지만, 프로그래밍 세계에선 자식 클래스에게 상속 결정권이 있습니다.

> 상속은 OOP에서 다형성과 연관이 있습니다.

## 상속의 장점

- 코드 중복을 줄일수 있습니다.
    - 중복되는 필드나 메소드는 부모 클래스에 정의하고, 자식 클래스들은 부모 클래스를 상속받아 사용하면 되기 때문입니다.
- 유지보수가 쉽습니다.
    - 부모 클래스의 코드를 변경하면, 상속 받은 모든 자식 클래스도 변경된 코드를 사용하기 때문입니다.

## 상속 사용방법

*Foo.java*
```java
public class Foo {
  private String name;

  public String getName() {
    return name;
  }
  
  public void setName(String name) {
    this.name = name;
  }
}
```

*Goo.java*
```java
public class Goo extends Foo {
  private int age;
  
  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }
}
```

*Ex.java*
```java
public class Ex {
  public static void main(String[] args) {
    Goo goo = new Goo();
    goo.setName("Foo");
    System.out.println(goo.getName);
  }
}
```

`Goo` 클래스는 `setName()`메소드와 `getName()`메소드를 정의하지 않았음에도
`Foo` 클래스를 `extends` 키워드를 이용하여 상속받았기 때문에 사용이 가능하게 됐습니다.

> 상속은 하나만 가능하지만 내가 상속받은 부모 클래스가 다른 클래스(조상 클래스)를 또 상속 받는다면, 자식 클래스는 조상 클래스까지 모두 사용이 가능합니다.

### 상속되지 않는 사항

- **접근제한자**의 영향을 받기 때문에, `private`은 상속 되지 않습니다.
    - `default`도 패키지가 다르다면 상속 되지 않습니다.
- **생성자**는 상속되지 않습니다.
    - **생성자**는 클래스 명과 동일해야 하는데, 상속이 된다면 이 규칙이 깨져버리게 됩니다.

### 부모 클래스가 기본 생성자가 없을 시

기본적으로 객체를 생성할 때, 생성자가 호출됩니다.
생성자를 정의하지 않으면, 자동으로 기본 생성자가 생성되고, 우리는 해당 생성자를 호출하여 사용 했었습니다.

상속을 받게 되면 생성자 첫 줄에 `super()`로 부모 클래스의 생성자를 호출해 줘야만 합니다.
하지만 위에 예제를 보면 `super()`를 호출하지 않았는데도 아무 이상 없었습니다.

이것은 우리가 생성자를 생성하지 않아도 기본적으로 생성해주는 것과 같이, `super()`또한 첫 줄에 자동으로 들어가기 때문입니다.

그런데, 부모 클래스의 생성자 메소드가 기본 생성자 없이 정의되어 있다면 어떻게 될까요?

> `this` 키워드로 현재 객체에 접근할 수 있듯이, `super` 키워드로 부모 클래스에 접근할 수 있습니다.

*Foo.java*
```java
public class Foo {
  private String name;
   
  public Foo(String name) {
    this.name = name;
  }
  
  public String getName() {
    return name;
  }
  
  public void setName(String name) {
    this.name = name;
  }
}
```

*Goo.java*
```java
public class Goo extends Foo {
  private int age;

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }
}
```

- `super()`가 호출 될 수가 없기 때문에 에러가 납니다.

*Goo.java*
```java
public class Goo extends Foo {
  private int age;

  public Goo(String name) {
    super(name);
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }
}
```

- 그래서 위와 같이 자식 클래스의 생성자에서 `super()` 안에 파라미터를 넣어 넘겨줘야합니다.

> `this()`와 `super()`은 반드시 생성자의 첫 줄에 적어줘야 하기 때문에, 두 개를 같이 쓸려고 하면 에러가 납니다.
> 그럴 땐, Overloading 기능을 이용하여 가장 많은 기능을 하는 생성자에 `super()`를 적고, 나머지 생성자에서는 해당 생성자를 `this()`로 호출하여 사용하면 됩니다.

### 상속 받은 자식 클래스를 생성 시 자식 인스턴스 하나만 생성 될까?

*Foo.java*
```java
public class Foo {
  public int age;
}
```

*Goo.java*
```java
public class Goo extends Foo {
  public int age;

  public Goo() {
    this.age = 10;
    super.age = 20;
  }

  public void print() {
    System.out.println(this.age); // 10
    System.out.println(super.age); // 20
  }
}
```

상속을 받아서 하나의 인스턴스가 생성되어 `age` 필드가 하나 일거 같았지만, 위와 같이 `age` 필드가 별도로 존재합니다.
별도로 존재한다는 얘기는 부모 인스턴스 따로, 자식 인스턴스 따로 생성이 된다는 얘기입니다.

위에서 생성자 첫 줄에 `super()`이 호출 된다고 했습니다. 이 시점에서 부모 클래스의 인스턴스가 생성되는 것 입니다.

같은 논리로 자식 클래스에서 **Overriding**을 하더라도, `super` 키워드를 이용하여 부모 클래스의 메소드에 접근할 수 있습니다.
단, 외부에선 `super` 키워드를 사용할 수 없으니 당연히 접근할 수 없습니다.

> 상속을 받아서 '내 것 처럼' 사용하는 것이지 실제론 부모 인스턴스 따로 자식 인스턴스가 따로 생성됩니다.
> 그래서 `private`으로 상속 되지 않은 필드도 **Getter**, **Setter**를 이용해 사용가능한 것입니다.
