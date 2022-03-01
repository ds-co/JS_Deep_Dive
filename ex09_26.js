// 옵셔널 체이닝 연산자
var elem = null;

// elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value = elem?.value;
console.log(value); // undefined

// ?. 가 도입되기 이전에는 논리 연산자 &&을 사용하였다
// &&는 좌항의 피연산자가 false로 평가되는 Falsy 값이면
// 좌항 피연산자를 그대로 반환한다. 하지만 ''은 객체로 평가될 때도 있다.