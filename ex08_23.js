// continue 문은 반복문의 코드 블록 실행을 현 지점에서 중단하고
// 반복문의 증감식으로 실행 흐름을 이동 시킨다.

var string = 'Hello World';
var search = 'l';
var count = 0;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++){
    // 's'가 아니면 현 지점에서 실행을 중단하고 증감식으로 이동한다.
    if(string[i] !== search) continue;
    count++; // continue문이 실행되면 이 문은 실행되지 않는다.
}
console.log(count); // 3

// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); //3