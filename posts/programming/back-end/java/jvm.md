# JVM

## JVM 이란?

JVM (Java Virtual Machine)은 자바 가상 머신의 약자로, 컴파일 된 바이트 코드를 읽어 해당 OS에 맞게 기계어로 바꿔 실행시켜줍니다.
그렇기 때문에 우리는 소스를 한 번만 쓰고도 여러 OS 에서 동일하게 프로그램을 실행 시킬 수 있습니다.

> 우리의 소스코드는 독립적이지만, JVM은 OS에 종속적이므로 해당 OS에 맞는 JVM을 설치해야 합니다.

## JVM의 구조

[JVM 구조](https://jeong-pro.tistory.com/148)

![JVM 구조](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile22.uf.tistory.com%2Fimage%2F9973563D5ACE0315215FF6)

### Class Loader

자바 애플리케이션이 실행 중일 때, 컴파일 된 바이트 코드들을 잘 엮어서 Runtime Data Area에 적재합니다.

```java
Foo foo = new Foo();
```

자바 애플리케이션이 실행중 일 때, 위와 같은 코드를 만난다면 그때 `Foo`라는 클래스를 최초로 Method Area에 올리게 됩니다.
Method Area에 있는 클래스를 바탕으로 Heap Area에 해당 클래스의 인스턴스를 생성하고 `foo` 변수에 해당 메모리의 주소 값을 할당하게 됩니다.

> 처음부터 모든 클래스의 정보가 적재되는 것이 아니라, 자바 애플리케이션이 실행 중일 때, 최초로 만나는 시점에 메모리에 올라가게 됩니다.

### Execution Engine

메모리에 적재된 바이트 코드들을 네이티브 코드로 변경해 명령어 단위로 실행하는 역할을 합니다.
자바는 JIT방식과 인터프리터 방식 둘 다 사용합니다.

#### JIT 방식

한 번에 전체를 네이티브 코드로 변경하여 실행하므로써, 실행 속도를 높이는 방식입니다.

#### 인터프리터(Interpreter) 방식

한 줄 씩 읽고 해석하여 실행하는 방식입니다.

### Garbage Collector (GC)

GC는 Heap Area에 생성되었다가 더 이상 아무도 참조하지 않는 객체들을 비워줍니다.
C/C++은 이런 작업을 수동으로 해줘야 하지만, 자바는 GC가 자동으로 해주므로 편리합니다.
단, 언제 GC가 일어나는지는 알 수 없습니다.

### Runtime Data Area

JVM의 메모리 영역입니다.

#### Method Area (Static Area)

- 전체 쓰레드와 공유합니다.

자바 애플리케이션이 실행 중일 때, 클래스가 사용되면, 그 때 JVM이 해당 클래스 파일을 읽어서 해당 클래스의 정보를 여기에 적재합니다.

- 클래스의 전체 이름
- 상속된 클래스들의 정보 
- 필드
- 메소드 (생성자 포함)
- static 변수
- static 메소드

등등.. 기본적인 정보는 여기에 다 올라갑니다.

#### Heap Area

- 전체 쓰레드와 공유합니다.

`new` 키워드로 생성된 객체들이 올라가는 영역입니다. Method Area에 적재된 클래스들을 기반으로 생성되며, GC의 주영역 입니다.

Java 버전 7 이후 부터, Constant Pool이 Method Area에서 Heap Area로 변경되었습니다.
즉, 문자열도 여기에 저장이 됩니다.

#### Stack Area

- 쓰레드 마다 별도로 생성됩니다.
- 생성된 스택엔 프레임이 들어갑니다.
    - 프레임은 메소드가 호출 될 때마다 생성 됩니다.

```java
public class Foo {
  public void foo() {
    Goo goo = new Goo();
  }
}
```

위와 같은 코드를 실행하면 하나의 쓰레드에 `foo` 메소드를 담을 프레임이 생기고, 해당 프레임에는 `foo` 메소드의 정보가 들어가게됩니다.

`Goo`의 인스턴스 객체는 Heap Area에 저장이 되고, `goo` 변수는 Stack Area에 생성됩니다.
그리고 `goo` 변수는 Heap Area에 저장된 `Goo` 인스턴스 객체의 주소를 가지게 됩니다.

메소드가 끝나면 해당 프레임은 사라지게 됩니다.

#### PC Register

- 쓰레드 마다 별도로 생성됩니다.

쓰레드가 생성 될 때마다 생성되고, 현재 실행 중인 쓰레드가 어떤 쓰레드인지 알려주는 역할을 합니다.

#### Native Method Stack

- 쓰레드 마다 별도로 생성됩니다.

네이티브 코드를 위한 영역입니다.