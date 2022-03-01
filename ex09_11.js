// 자바스크립트 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환한다
// 자바스크립트 엔진은 타입이 아닌 Truthy 값(참으로 평가되는 값) 또는
// Falsy 값(거짓으로 평가되는 값)으로 구분한다

if('') console.log('1');
if(true) console.log('2');
if(0) console.log('3');
if('str') console.log('4');
if(null) console.log('5');

// 2 4