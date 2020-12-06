# JDBC

## JDBC (Java DataBase Connectivity) 란?

[JDBC](https://opentutorials.org/module/3569/21222)

**Java**언어로 **RDB**에 접속하고 SQL 문을 수행하고 처리하기 위해 사용 되는 **표준 SQL Interface API**입니다.

## JDBC 드라이버

MySQL, Oracle, MariaDB 등등 **RDBMS**의 종류는 다양합니다. 문제는 **DBMS**마다 사용하는 문법이 조금씩 다르다는 것입니다.

**JDBC 드라이버**는 각 **DBMS**마다 **JDBC Interface**를 상속받아 구현한 클래스들 입니다. 그래서 우리는 **JDBC**에 **JDBC 드라이버**를 넣어 원하는 **DBMS**를 문법
신경 쓰지 않고, 사용할 수 있게 됩니다.

이런 **JDBC 드라이버**는 각 **DBMS**마다 라이브러리를 만들어 놓았으므로 우리는 라이브러리를 추가하여 사용하면 됩니다.

즉, **DBMS** 마다 각각 다른 문법에 대해 신경쓰지 않고, **JDBC**의 규칙에 맞게 작성하면, 주입된 **JDBC 드라이버**에 따라 자동으로 변환됩니다. 이것의 장점은 **MySQL**을 쓰다가
**Oracle**로 변경하고자 할 때, **JDBC 드라이버**만 바꿔주면 된다는 것 입니다.

> **JDBC**는 **Interface**이므로, 직접 인스턴스를 생성하여 사용 할 수 없습니다. 따라서, **JDBC 드라이버**가 필수입니다.

## JDBC 사용 방법

- **MySQL**을 기준으로 작성했습니다.

### 드라이버 로드

```java
public class Foo {

  public static void main(String[] args) {
    Class.forName("com.mysql.jdbc.Driver");
  }
}
```

#### 드라이버 로드 시 일어나는 과정

*com.mysql.jdbc.Driver*

```java
public class Driver extends NonRegisteringDriver implements java.sql.Driver {
  public Driver() throws SQLException {
  }

  static {
    try {
      DriverManager.registerDriver(new Driver());
    } catch (SQLException var1) {
      throw new RuntimeException("Can't register driver!");
    }
  }
}
```

**JDBC 드라이버**를 동적으로 로딩하게 되면, 이 시점에 클래스 로더가 해당 클래스의 정보를 **Method Area**에 올리게 됩니다. 이 때, `static` 정보도 올라가게 되는데,
`static`을 보면 `Driver`의 인스턴스를 생성해 `DriverManager.registerDriver`의 **Parameter**로 넘겨 줍니다.

그래서 `DriverManager`는 **DI(의존성 주입)** 된 드라이버를 사용할 수 있게 되는 것 입니다.

### DBMS 접속

```java
public class Foo {

  public static void main(String[] args) {
    String url = "jdbc:mysql://localhost:3306/java";
    String user = "root";
    String password = "root";

    Connection connection = DriverManager.getConnection(url, user, password);
  }
}
```

- url: jdbc:DBMS명://주소:DBMS포트/DB명
- user: 접속 계정
- password: 접속 계정 비밀번호

**DBMS** 접속에 성공하면 `Connection` 객체를 반환합니다.

> 드라이버가 달라지면, **드라이버 로드**와, **DBMS 접속** 코드만 달라지고 아래 코드는 동일하게 사용 가능합니다.

### PreparedStatement

```java
public class Foo {

  public static void main(String[] args) {
    PreparedStatement preparedStatement = connection.prepareStatement("SQL 문 작성");
  }
}
```

`Connection` 객체까지 무사히 리턴 받았다면, 이제 **SQL 문**을 작성하여 보내고, 처리된 결과를 받아 와야 합니다.

`PreparedStatement` 객체가 그 역할을 합니다.

### SQL 문 작성 및 실행

```java
public class Foo {

  public static void main(String[] args) {
    String sql = "INSERT INTO member VALUES(?, ?)";
    PreparedStatement preparedStatement = connection.prepareStatement(sql);

    preparedStatement.setInt(1, 1);
    preparedStatement.setString(2, "Foo");

    preparedStatement.executeUpdate();
  }
}
```

- preparedStatement.setXXX: 첫 번째 인자는 `?`의 인덱스가 들어가고, 두 번째 인자는 실제 값이 들어갑니다.
- preparedStatement.executeXXX(): **SQL 문**을 작성하고 엔터를 친것과 같습니다.
    - executeUpdate(): `INSERT`, `UPDATE`, `DELETE`
    - executeQuery(): `SELECT`

### close

```java
public class Foo {

  public static void main(String[] args) {
    try {
      preparedStatement.close();
      connection.close();
    } catch (SQLException e) {
      e.printStackTrace();
    }
  }
}
```

항상 작업이 끝나면 연결을 `close()` 메소드를 호출해 끊어줘야하며, `close()` 메소드 호출은 열었던 반대 순으로 호출 해야 합니다.

### 전체 다 합치기

```java
public class Foo {

  public static void main(String[] args) {
    Connection connection = null;
    PreparedStatement preparedStatement = null;
    String url = "jdbc:mysql://localhost:3306/java";
    String user = "root";
    String password = "root!";
    try {
      Class.forName("com.mysql.jdbc.Driver");
      connection = DriverManager.getConnection(url, user, password);

      String sql = "INSERT INTO member VALUES(?, ?)";
      preparedStatement = connection.prepareStatement(sql);
      preparedStatement.setInt(1, 1);
      preparedStatement.setInt(2, "Foo");

      preparedStatement.executeUpdate();
    } catch (ClassNotFoundException | SQLException e) {
      e.printStackTrace();
    } finally {
      if (preparedStatement != null) try {
        preparedStatement.close();
      } catch (Exception throwables) {
        throwables.printStackTrace();
      }
      if (connection != null) try {
        connection.close();
      } catch (Exception throwables) {
        throwables.printStackTrace();
      }
    }
  }
}
```

예외가 발생하기 때문에 `try ~ catch`로 감싸줘야 하며, 예외 상관없이 `close()`를 해줘야하기 때문에 `finally`로 해당 작업을 뺐습니다.
`finally`로 해당 작업을 빼면 `try ~ catch` 내에서 생성된 객체는 공유되지 않으므로, `try ~ catch` 밖에 선언해 두었습니다.