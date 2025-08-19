/**
 * if, if ~ else, if~ else if...~else
 * 삼항연산자: (조건문) ? true인 경우 실행문 : false인 경우 실행문;
 */

//입력되는 과일명이 apple인 경우에만 이모지 출력
//apple 이외의 과일은 이름 출력
let fruit = 'apple';
if(fruit === 'apple') {
    console.log('🍎');
} else {
    console.log(fruit);
}

//위의 if문을 삼향연산자로 변환
let result = undefined;
(fruit === 'apple') ? console.log('🍎') : console.log(fruit);
console.log('result => ${result}');

//선택한 메뉴를 출력
let menus = ['pizza', 'hotdog', 'coffee'];
let selectMenu = 'pizza';
if(menus[0] === 'pizza') {
    console.log('🍕');
} else if(menus[1] === 'hotdog') {
    console.log('🌭')
} else if(menus[2] === 'coffee') {
    console.log('☕')
} else {
    console.log('메뉴 준비중~');
}

//입력받은 숫자가 홀수이면 사과이모지, 짝수이면 포도이미지를 출력
let inNnumber = 100;
let fresult = undefined;
if (inNnumber % 2 == 1) {
    fresult = '🍎'; //홀수
}   else {
    fresult = '🍇'; //짝수
}
console.log(`결과 --> ${fresult}`);


