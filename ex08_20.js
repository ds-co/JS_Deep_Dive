// 레이블 문은 프로그램의 실행 순서를 제외하는데 사용한다.
// foo라는 식별자가 붙은 레이블 블록문
foo : {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다
    console.log(2);
}

console.log('Done!');