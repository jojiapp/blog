# String 생성

## String 생성의 이상한 점

- 기본 타입은 생성 할 때 `int num = 10;` 이런식으로 생성합니다.
- 참조 타입은 생성 할 때 `Foo foo = new Foo();` 이런식으로 생성합니다.

그런데, String은 참조 타입이면서 어떻게 `String str = "문자열";` 이렇게 생성할까요?
참조 타입이면 `new` 키워드를 사용해서 생성해야 정상인데 이상합니다.

## 참조 타입과, String의 메모리 차이

우선, 참조 타입은 `Foo foo = new Foo();` 처럼 `new` 키워드를 사용하여 생성하면 Heap Area에 해당 인스턴스가 생성되고,
`foo` 변수에는 해당 인스턴스의 주소 값이 들어가게 됩니다. 그래서 해당 변수로 인스턴스를 **참조** 하여 사용할 수 있습니다.

반면에, String 타입은 `String str = "문자열";` 처럼 생성하게 되면, Heap Area에 Constant Pool 이라는 곳에 생성 됩니다.
생성 되는 위치가 조금 다르지요. 물론, `String str = new String("문자열");` 이렇게 생성한다면 참조 타입처럼 Heap Area에 인스턴스가 생성 됩니다.

## 참조 타입과, String의 비교

```java
Foo foo1 = new Foo();
Foo foo2 = new Foo();

System.out.println(foo1 == foo2) // false
```

- 참조 타입은 `new` 키워드를 사용하여 생성하면 Heap Area에 각각 생성 되므로, 주소 값이 다릅니다. 그러므로 `false`가 나오게 됩니다.

```java
String str1 = "문자열";
String str2 = "문자열";

System.out.println(str1 == str2) // true
```

- 참조 타입이라면서, 각각 할당 받았음에도 불구하고 `true`가 나옵니다. (기본 타입과 동일?)

```java
String str1 = "문자열";
String str2 = new String("문자열");

System.out.println(str1 == str2); // false
```

- 둘다 "문자열" 이라는 `String`인데 `false`가 나옵니다. 위에서 언급 했듯이 `new` 키워드를 써서 생성 했을 때와 그냥 생성했을 때, 생성되는 위치가 다르기 때문입니다.

```java
String str1 = "문자열";
String str2 = new String("문자열");

System.out.println(str1.equals(str2)); // true
```

- 이렇게 비교하면 또 `true`라고 나옵니다. (`equals`는 각각의 문자열을 비교)

## 그렇다면 new 키워드 없이 생성하는 String 타입은 어떤식으로 생성되는가

원래 참조타입은 `new` 키워드 없이는 생성이 불가능합니다. 그런데 `String` 타입은 너무 자주 쓰는 타입이다보니,
참조 타입임에도 불구하고 기본 타입 처럼 사용할 수 있게 만들어 놓았습니다.

`String str = "문자열";`이라고 문자열을 할당하면, `String`은 내부적으로 `intern()`이라는 메소드를 호출합니다.

`intern()` 메소드는 Constant Pool에 해당 문자열을 가진 객체가 있는지 확인합니다.
만약 있다면, 해당 객체를 반환하고, 없다면 인스턴스를 생성한 후 반환합니다.

```java
String str1 = "문자열";
String str2 = "문자열";

System.out.println(str1 == str2); // true
```

- 즉, 위의 비교는 문자열을 비교한 것이 아니라, 주소를 비교한 것이고, `intern()` 메소드 덕분에 같은 주소 값을 가지고 있어 `true`가 나오게 된 것입니다.

```java
String str1 = "문자열";
String str2 = new String("문자열");

System.out.println(str1 == str2); // false

System.out.println(str1 == str2.intern()); // true
```

- 해보면 예상한 대로 나옵니다.

> 우리는 해당 문자열의 주소가 같은지 다른지를 알고 싶은게 아니라, 해당 **문자열**이 같은지 다른지를 알고 싶은 겁니다.
> 그러므로 문자열 비교는 equals()를 사용하여 비교해야 합니다.