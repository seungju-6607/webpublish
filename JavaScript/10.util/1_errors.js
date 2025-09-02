/**
 * try ~ catch : 자바스크립 에서 에러 처리
 */
let numbers = [1, 2, 3];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

numbers[9] = 1000;
console.log(numbers[9]);

//2. Number 클래스
let numbers2 = new Number(12345);
try{
    for (number of numbers2) {
    console.log(number);
    }
} catch(error){
    console.log('에러처리는 엔진에게 맡기세요!');
}