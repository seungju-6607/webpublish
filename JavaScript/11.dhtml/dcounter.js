//화면 폼 함수
function initForm() {
    let output = `
    <h1>Counter</h1>
     <div>
        <h2 id="number">0</h2>
        <button type="button" onclick="increment()">increment(+)</button>
        <button type="button" onclick="decrement()">decrement(-)</button>
    </div>
    `;
    document.querySelector("#content").innerHTML =output;
}