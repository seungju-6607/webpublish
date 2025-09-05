window.addEventListener('DOMContentLoaded', function () {
    createTable();
    filterMenuEvent();
});


function filterMenuEvent() {
    let menuList = document.querySelectorAll(".menu-item");
    menuList.forEach(menu => {
        menu.addEventListener('click', () => {
            let type = menu.id;
            filterData(type);
        });
    });
}

async function filterData(type) {
    let list = await getData();
    list.filter((item) =>{item.type === type}); //[]
    console.log(filterList);
    
}

async function getData() {
    let response = await fetch("../data/support.json");
    return response.json();
}


async function createTable(list) {
    async function filterData(type) {
    let list = await getData();

    if (type !== "all") {
        list = list.filter(item => item.type == type);
    }

    createTable(list); // 필터된 리스트 출력
}

async function createTable(list) {
    if (!list) {
        list = await getData();
    }

    let output = `
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>구분</th>
          <th>제목</th>
          <th>등록일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
      ${list.map((item, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${item.type}</td>
          <td>${item.title}</td>
          <td>${item.rdate}</td>
          <td>${item.hits}</td>
        </tr>
      `).join("")}
      </tbody>
    </table>
    `;

    document.querySelector("#support-output").innerHTML = output;
}

    document.querySelector("#support-output");
    document.querySelector("table");
}
