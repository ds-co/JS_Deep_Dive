// 문자열 타입으로 변환

// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
String(1); // "1"

// 불리언 타입 => 문자열 타입
String(true); // "true"

// 2. Object.prototype.toString 메서드를 사용하는 방법
// 숫자 타입 => 문자열 타입
(NaN).toString(); // "NaN"

// 불리언 타입 => 문자열 타입
(false).toString(); // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
Infinity  + ''; // "Infinity"

// 불리언 타입 = > 문자열 타입
true + ''; // "true"