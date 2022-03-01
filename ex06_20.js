// 심벌 값 생성
var key = Symbol('key');
// typeof 연산자로 변수를 연산하면 변수의 데이터 타입을 반환한다.
console.log(typeof key); // symbol
// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]); //value