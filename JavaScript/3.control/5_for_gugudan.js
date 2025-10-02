/**
 * 구구단 출력 : 2 ~ 9단
 */

for(let i = 1 ; i < 10; i++) {
    let rows = '';
    for(let j = 2; j < 3; j++) {
        rows +=  ` ${j} x ${i} = ${i*j}\t`;
    }
    console.log(rows);
}

for(let i =1; i<=5; i++) {
    let output = '';
    for(let j=1; j<=i; j++) {
        output += `*`;
    }
    console.log(output);
}