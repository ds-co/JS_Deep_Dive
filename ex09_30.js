// 좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환하고
// 그렇지 않으면 좌항의 피연산자를 반환한다
var foo = null ?? 'default string';
console.log(foo); // default string

// ??가 도입되기 이전에는 논리 연산자 ||를 사용했다
// ||를 사용한 경우 좌항의 피연산자가 false로 평가되는 Falsy값이면
// 우항의 피연산자를 반환한다. 만약 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
