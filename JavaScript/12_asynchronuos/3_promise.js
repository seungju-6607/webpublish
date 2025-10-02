/** 
 * 
 */

//순차적으로 처리하고자 하는 비동기식 코드를 포함한 함수에는 async를 붙인다!!!
async function  asyncTest() {
    let dataArray = null;
    //비동기 처리 객체
    let promise1 = new Promise((resolve, reject) => {
        let numbers = [1, 2, 3, 4, 5];
        resolve(numbers);
    });

    //1. 비동기 처리
    await promise1
        .then((result) => dataArray = result)   // ✅ result로 수정
        .catch((error) => console.log(`catch -------> error, ${error}`));

    //2. 동기식
    console.log(dataArray);
}

asyncTest();
