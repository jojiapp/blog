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

## 상속되지 않는 사항

- **접근제한자**의 영향을 받기 때문에, `private`은 상속 되지 않습니다.
    - `default`도 패키지가 다르다면 상속 되지 않습니다.
- **생성자**는 상속되지 않습니다.
    - **생성자**는 클래스 명과 동일해야 하는데, 상속이 된다면 이 규칙이 깨져버리게 됩니다.

## 상속 받은 자식 클래스를 생성 시 자식 인스턴스 하나만 생성 될까?

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
필드가 별도로 존재한다는 얘기는 부모 인스턴스와 자식 인스턴스가 각각 생성 되었다는 얘기입니다.

## 그럼 언제 부모 인스턴스가 생성될까?

인스턴스를 생성 할 때 상속 받은 것이 있다면, 생성자의 첫 줄에 부모 클래스의 생성자가 호출 됩니다.

난 그런거 적은적이 없는데? 라고 할 수 있지만, 부모 클래스의 생성자를 호출하지 않으면 컴파일러가 자동으로 생성자 첫 줄에 부모 클래스의 기본 생성자(`super()`)를 넣어줍니다.
이렇게 자식 인스턴스를 생성하면 자식 클래스 생성자에서 부모 생성자를 호출 하여 부모 인스턴스를 생성합니다.

그래서 자식 클래스에서 필드와 메소드를 **Overriding**을 하더라도, `super` 키워드를 이용하여 부모 인스턴스의 필드와 메소드에 접근할 수 있는 것입니다.
단, 외부에선 `super` 키워드를 사용할 수 없으니 당연히 직접 접근은 할 수 없습니다.

> `this` 키워드로 현재 객체에 접근할 수 있듯이, `super` 키워드로 부모 인스턴스에 접근할 수 있습니다.

## 정말 각각 인스턴스가 생성될까?

*Foo.java*
```java
public class Foo {
  int age;

  public Foo() {
    System.out.println(this);
    this.age = 10;
    System.out.println(this.age);
  }
}
```

*Goo.java*
```java
public class Goo extends Foo {
  int age;

  public Goo() {
    System.out.println(this);
    this.age = 20;
    System.out.println(this.age);
  }
}
```

*Ex.java*
```java
public class Ex {
  public static void main(String[] args){
    Goo goo = new Goo();
  }
}
```

이렇게 출력시, `Foo`클래스에서의 `this`와 `Goo`클래스에서의 `this`의 값은 동일하게 나옵니다.
그런데, `age`의 값은 또 각각 **10**, **20**이 출력 됩니다.

같은 값을 가진 `this`를 사용했는데 이상합니다.

우선, `Foo` 생성자에서 찍은 `this`는 `Goo` 클래스의 인스턴스 주소가 맞습니다.
그럼 따로 생성 안된거 아냐? 라고 생각 할 수 있지만, `age`필드의 값이 각각 들어간 걸 보면 따로 생성 된게 맞습니다.

기본적으로 부모 클래스의 인스턴스 주소를 알 수는 없습니다.
그러나, 필드를 따로 사용 할 수 있는 이유는, `this`에서 .을 찍는 순간 나에게서 가장 가까운 요소를 찾게 됩니다.

즉, `this`의 값은 자식 클래스의 인스턴스 주소로 동일하지만, 인스턴스는 각각 생성 되었고, 부모 클래스에서 `this.필드`를 적으면 해당 클래스 내의 필드를 사용하게 되는 것 입니다.

> 상속을 받아서 **'내 것 처럼'** 사용하는 것이지 실제론 부모 인스턴스 따로 자식 인스턴스가 따로 생성됩니다.
> 그래서 `private`으로 상속 되지 않은 필드도 **Getter**, **Setter**를 이용해 사용 가능한 것입니다.

## 부모 클래스가 기본 생성자가 없을 시

상속을 받게 되면 생성자 첫 줄에 부모 클래스의 생성자를 호출해야만 한다고 했습니다.

부모 클래스 생성자를 호출하지 않으면 컴파일러가 자동으로 생성자 첫 줄에 부모 클래스의 기본 생성자(`super()`)를 넣어 준다고 했는데, 
부모 클래스의 생성자가 기본 생성자 없이 정의되어 있다면 어떻게 될까요?


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

- 부모 클래스의 기본 생성자가 없기 때문에 `super()`가 호출 될 수 없어서 에러가 납니다.

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

- 그래서 위와 같이 자식 클래스의 생성자에서 명시적으로 부모 클래스의 생성자를 호출 해줘야 합니다.

> `this()`와 `super()`은 반드시 생성자의 첫 줄에 적어줘야 하기 때문에, 두 개를 같이 쓸려고 하면 에러가 납니다.
> 그럴 땐, Overloading 기능을 이용하여 가장 많은 기능을 하는 생성자에 `super()`를 적고, 나머지 생성자에서는 해당 생성자를 `this()`로 호출하여 사용하면 됩니다.

## 참조형 타입의 형 변환

기본형 타입을 형 변환할 때, 자료형이 큰 쪽으로는 자동 형 변환이 되었고, 작은 쪽으로는 명시적으로 타입을 지정해 줘야 했습니다.

참조형 타입도 위와 동일하나, 무조건 형 변환이 가능한 것은 아닙니다.

*Foo.java*
```java
public class Foo {
  String name;
  
  public Foo(String name) {
    this.name = name;
  }
}
```

*Goo.java*
```java
public class Goo extends Foo {
  int age;
  public Goo(String name, int age) {
    super(name);
    this.age = age;
  }
}
```

*Ex.java*
```java
public class Ex {
  public static void main(String[] args){
    Goo goo = new Goo();
    Foo foo = goo;
  }
}
```

- 자식 인스턴스를 생성 후, 부모 자료형에 대입했습니다.(**UpCasting**) 아무런 문제가 없습니다.

*Ex.java*
```java
public class Ex {
  public static void main(String[] args){
    Goo goo1 = new Goo();
    Foo foo = goo1;
    Goo goo2 = (Goo) foo;
  }
}
```

- 부모 클래스가 자식 클래스 보다 더 조금 가지고 있으니, 명시적으로 타입 지정을 해서 대입했습니다.(**DownCasting**) 아무런 문제가 없습니다.
- 부모 자료형에 대입을 했다고 해서, 해당 객체의 주소가 달라지는 것이 아니라, 사용 할 수 있는 범위가 부모 클래스 내의 정의한 요소들로 줄어 드는 것 뿐입니다.

*Ex.java*
```java
public class Ex {
  public static void main(String[] args){
    Foo foo = new Foo();
    Goo goo = (Goo) foo();
  }
}
```

코드상에서는 아무런 문제가 없다고 합니다. **DownCasting** 한게 다라서, 위와 비슷해 보일 수 있습니다.
그러나, 컴파일을 해보면 에러가 납니다.

### 두 번째 예제에선 DownCasting 해도 아무 문제 없었는데, 왜 세 번째 예제에서는 에러가 나는거지?

자식 클래스는 부모 클래스를 상속 받았습니다.
그렇기 때문에 인스턴스를 생성하게 되면, 부모 인스턴스 따로, 자식 인스턴스 따로 생성이 된다고 했습니다.

즉, 자식 인스턴스는 두 가지를 모두 알고 있습니다.

그래서 부모 자료형으로 **UpCasting** 해도 부모 인스턴스를 알고 있기 때문에 상관이 없고, 다시 **DownCasting**을 하게 돼도, 인스턴스의 주소가 그대로니 원래대로 돌아오게 됩니다.

그런데, 부모 인스턴스를 만들어서 자식 인스턴스로 **DownCasting**을 하게 되면, 부모 인스턴스는 자식 인스턴스를 모릅니다.
인스턴스 생성 할 때, 자식 인스턴스는 같이 생성하지 않았기 때문이죠.

그래서 부모 인스턴스를 **DownCasting**을 하게 되면 에러가 납니다.

### 이해가 잘 안된다면 현실 세계에 반영을 해보자

자식이 집을 지을 때 무조건 부모님 집을 먼저 짓고 나서 자기 집을 짓도록 되어있습니다.
그래서 자식이 집을 지은 후 잠시 자리를 비우고, 부모님이 놀러와도(**UpCasting**) 부모님이 계실 곳이 있습니다.
이후, 부모님이 가시고, 다시 자식이 집으로 돌아 갔을 때(**DownCasting**)도 집은 그대로 있을겁니다.
뭐, 좀 밥도 먹고 하셨을 테니 약간의 변경은 있겠지요. (**밥 = 필드**)

그런데, 반대로 부모님이 집을 지을 때는 부모님 집만 짓습니다.
그러면, 부모님이 자리를 비운 사이, 자식이 부모님 집에 놀러갔는데 자식이 있을 곳이 없습니다. 자식 집이 없으니까요!
자식은 내 집에 있는 내 것들을 사용해야 하는데, 아무것도 없습니다.
그래서 에러가 납니다.

잠깐 내 물건 안쓰고 부모님꺼 사용하면 되잖아.. 아니면 부모님 집에 잠시 있던가.. 라고 생각 할 수 있지만,
**Java**는 정적 언어기 때문에 그런 여지를 남겨두지 않습니다.

해당 타입으로 변환을 했다는 말은 해당 타입으로 할 수 있는 일을 하겠다는 말입니다.
그러지 않을꺼면 변환 할 필요가 없으니까요.

집 소유주가 부모님인데 자식이 와서 이것저것 먹고, 자기가 쓸거 들고와서 두고..
부모와 자식사이에 할 수 있지만! 문제는 부모님은 해당 자식을 모른다는겁니다.

모르는 사람이 우리 집에 왔으면 신고해야죠. (**신고 = 에러**)

> 즉, 아래에서 위로 갔다가 다시 내려오는 것은 가능하지만, 처음부터 위에서 바로 내려오는 것은 안됩니다.

### 그러면, 부모 자료형이 자식 인스턴스를 받은건지, 자기 자신의 인스턴스인지 어떻게 알지?

이 경우를 체크하고 형 변환을 해야 에러가 안나옵니다.

**Java**에서는 이런 경우를 체크하라고 `instanceof`라는 키워드가 만들어져 있습니다.

```java
public class Ex {
  public static void main(String[] args){
    Foo goo = new Goo();
    System.out.println(goo instanceof Goo); // true
  
    Foo foo = new Foo();
    System.out.println(foo instanceof Goo); // false
  }
}
``` 

- 위와 같이 체크해서 `true`일 때만 형 변환을 하면 됩니다.