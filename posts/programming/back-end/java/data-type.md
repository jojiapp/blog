# 데이터 타입

## 기본 타입 (Primitive Type)

[기본 타입](https://www.w3schools.com/java/java_data_types.asp)

### 기본 타입 할당 범위

#### 정수형

기본 타입은 `int` 입니다.

- `byte`: 1 byte, -128 ~ 127
- `short`: 2 bytes, -32,768 ~ 32,767
- `int`: 4 bytes, -2,147,483,648 ~ 2,147,483,647
- `long`: 8 bytes, -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807

#### 실수형

기본 타입은 `double`입니다.

실수형은 4 bytes 라고 하더라도, 기본적으로 정수형 보다 큽니다.
따라서 8 bytes인 long 타입보다 `float`가 더 큽니다.

- `float`: 4bytes, 소수점 6 ~ 7 자리까지 저장할 수 있습니다.
- `double`, 8bytes 소수점 15 자리까지 저장할 수 있습니다.

#### 문자형

문자형은 유니코드를 표현하기 위한 자료형이기 때문에 음수 없이 양수로만 2^16을 다 표현합니다.

- `char`: 2 bytes, 0 ~ 65,535

#### 논리형

- `boolean`: 1 byte, true 또는 false

### 기본 데이터 타입의 초기값

```java
byte b = 0;
short s = 0;
char c = '\u0000';
int i = 0;
long l = 0L;

float f = 0.0f;
double d = 0.0;

boolean isB = false;
```

## 참조 타입 (Reference Type)

위의 기본 타입을 제외한 모든 타입은 참조 타입입니다.
참조 타입은 `new` 키워드를 사용하여 생성하고, 변수는 메모리에 생성된 주소 값을 가지게 됩니다.

```java
Foo foo = new Foo();
```
- 참조형은 4 bytes 입니다.

### 예외

```java
String str = "foo";
```
- `String` 타입은 참조형이지만 예외적으로 `new` 키워드 없이 생성이 가능합니다.
