//숫자 증가 함수
function increment() {
        let number = document.querySelector("#number");
        let value = parseInt(number.innerText); 
        value++;
        number.innerText = value; 
        console.log(`number = ${value}`);
    }

    // 숫자 감소 함수
function decrement() {
        let number = document.querySelector("#number");
        let value = parseInt(number.innerText);
        value--;
        number.innerText = value;
        console.log(`number = ${value}`);
    }