// 객체 생성 방법 : 객체 리터럴 사용
// 중괄호 내에 0개 이상의 프로퍼티를 정의한다.
// 변수에 할당되는 시점에 자바스크립트 엔진은 객체 리터럴을 해석해 객체를 생성한다

var person = {
    name: 'OhDaSeul',
    sayHello: function(){
        console.log(`Hello! My name is ${this.name}.`);
    }
};

console.log(typeof person); // object
console.log(person); // {name: Oh DaSeul, sayHello: f}