/**
 * //Pizza 주문 처리 로직
 * - 1. 주문
 * - 2. 피자 만들기 : 5초 걸림
 * - 3. 배달
 */

async function  pizzaOrder() {
    
    let makePizza = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve();
        },2000);
    });
    console.log(`1. 주문 완료`);

    await makePizza
                .then((resolve) => console.log(`2. 피자 완성`)) 
                .catch((reject) => console.log(`--> reject`));

    console.log(`3. 배달 완료`);
    
}
pizzaOrder();