var num = 2;
// 0은 false로 취급된다
var kind = num ? (num > 0 ? '양수' : '음수') : '0';
console.log(kind); // 양수