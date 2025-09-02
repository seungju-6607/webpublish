/**
 * 
 */

//객체 복사, 결합 : shallow copy
let numbers = [1, 2, 3];
let copyNumbers = [...numbers];
let concatNumbers = [...numbers,'🍎',...copyNumbers];

console.log(numbers);
console.log(copyNumbers);
console.log(concatNumbers);

//오브젝트 리터럴 객체 복사
const hong = {
    name: '홍길동',
    age: 20
}

//홍길동 업데이트 : 이름, 나이, 직업
const hongUpdate = {
    ...hong,
    job: '개발자'
}

const list = [
    {...hong}, 
    {...hongUpdate}
];

console.log(hong);
console.log(hongUpdate);
console.log(list);




