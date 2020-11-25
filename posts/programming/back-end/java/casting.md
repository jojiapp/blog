# Casting (형 변환)

## 형 변환 이란?

- 현재 타입을 다른 타입으로 변환하는 것을 형 변환이라고 합니다.

> 형 변환은 OOP에서 다형성과 연관이 있습니다.

## 자동 형 변환 (묵시적 형 변환)

변환 될 타입이 현재 타입을 모두 담아 낼 수 있다면,
즉, 더 크다면 명시적으로 타입을 지정해 주지 않아도 형 변환이 됩니다.

```java
int num1 = 10;
double num2 = num1; // 10.0
```

- `double`형이 `int`형 보다 크기 때문에, 아무 문제 없이 됩니다.

## 강제 형 변환

자동 형 변환과 반대로, 변환 될 타입이 현재 타입을 모두 담아 낼 수 없다면,
즉, 더 작다면 명시적으로 타입을 지정해 주어야 합니다.

```java
double num1 = 10.0;
int num2 = num1; // error

int num3 = (int) num1; // 10
```

- `double`형이 `int`형 보다 크기 때문에,
`int`형으로 변환 할거다 라는 것을 명시적으로 적어줘야 합니다.

## 연산 할 때 일어나는 형 변환

각각 다른 타입으로 연산을 한다면 기본적으로 더 큰 타입으로 변환됩니다.

```java
int num1 = 10;
double num2 = 10.0;

double num3 = num1 + num2;
```

- `double`형이 `int`형 보다 더 큰 자료형 이므로 `double`형으로 자동 형 변환이 일어납니다.

```java
long num1 = 10L;
float num2 = 10.0f;

float num3 = num1 + num2;
```

- bytes는 `long`타입이 더 크지만, 실수형은 기본적으로 정수형 보다 큽니다. 따라서, 위는 `float`형으로 자동 형 변환이 일어납니다.

```java
byte num1 = 10;
byte num2 = 10;

byte num3 = num1 + num2; // error
int num4 = num1 + num2;
```

- `byte` + `byte` 라서 `byte`로 나올거 같았지만, 이상하게도 되지 않습니다.
- 그 이유는, `int`형 아래 타입들은 연산을 하게 되면 모두 `int`형으로 변환되기 때문입니다. (정수형의 기본 타입은 `int`)

## 객체의 형 변환

객체도 위와 같은 논리가 적용됩니다. 따라서, 더 많은 것을 가지고 있는 쪽으로는 자동 형 변환이 일어나지만, 반대의 경우 명시적으로 지정을 해줘야 합니다.

```java
Foo foo = new Foo();
Object obj = foo;
```

- `Foo` 클래스는 `Object` 클래스를 상속받아 생성되므로, `Object`객체 + @ 가 됩니다.
- 즉, `Object` 내용을 포함한 더 많은 것을 가지고 있기 때문에 자동으로 형 변환이 일어납니다.

```java
Foo foo = new Foo();
Object obj = foo;

Foo fo = (Foo) obj; // error
```

- 반대로 `Object` 객체를 `Foo` 타입으로 할려면 변환 할 타입을 명시적으로 지정해 줘야 합니다.
- 형 변환을 하더라도 객체의 메모리 주소는 여전히 같습니다.

> 기본 타입은 강제 형 변환을 하면 데이터의 변화가 있을 수 있지만, 참조 타입은 사용할 수 있는 범위가 달라지는 것이지, 해당 주소의 데이터가 손실되지는 않습니다.

## 그런데 이게 다형성이랑 무슨 상관?

```java
interface 동물 {
  public void 움직이다();
}

class 사람 implements 동물 {

  @Override
  public void 움직이다() {
    System.out.println("두 발로 걷는다.");
  }

  public void 생각하기() {
    System.out.println("생각 중");
  }

}

class 강아지 implements 동물 {

  @Override
  public void 움직이다() {
    System.out.println("네 발로 걷는다.");
  }

  public void 물기() {
    System.out.println("물어버렸다");
  }
}
```

```java
사람 person = new 사람();
강아지 dog = new 강아지();

person.움직이다();
dog.움직이다();

동물 ani1 = new 사람();
동물 ani2 = new 강아지();

ani1.움직이다();
ani2.움직이다();
```

위의 두 클래스는 `interface 동물`을 `implements`을 받아서 `움직이다()`라는 메소드를 각각 **Overriding**했습니다.
그렇기 때문에 `동물` 타입으로 형 변환을 하고 `움직이다()` 메소드를 사용하면 같은 `동물`객체 임에도 다른 결과를 얻을 수 있습니다.

즉, 우리는 같은 객체임에도 하위 클래스에서 **Overriding**한 메소드에 따라 다른 결과를 얻어낼 수 있게 됩니다.

> 하나의 자료형에 다른 객체를 넣어 다양한 결과를 가져 오는 것. 그것이 클래스의 다형성입니다.