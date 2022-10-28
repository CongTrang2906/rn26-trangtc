window.onload = function(e) {
    //addRowJs();
    //   deleteRowJs();
    //   addRowJq();
    //   addCollumnJquery();
    getListUsers();
};
// call api
function getListUsers() {
    fetch(
            "https://634e9e894af5fdff3a623edf.mockapi.io/products?page=1&limit=10", {
                method: "GET",
            }
        )
        .then((response) => response.json())
        .then((data) => {
            data.map((user) => addRowJs(user));
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
// khai báo một thuộc tính tĩnh
const myHtmlContent = `

  <td onclick="postUser()">${user?.id}</td>
  <td>${user?.name}</td>
  <td>${user?.avatar}</td>
  <td>${user?.name.split(" ")[0]}</td>
  <td>
    <input class="ip1" type="button" value="Delete">
    <input class="ip2" type="button" value="Detail">
  </td>

`;
//Thêm dữ liệu động
function formatRow(user) {
    return `
    <th scope="row" onclick="postUser()">${user?.id}</th>
    <td>${user?.name}</td>
    <td class="text-break">${user?.avatar}</td>
    <td>${user?.name.split(" ")[0]}</td>
    <td>
        <button class="ip1" onclick="gotoDetail(${
          user?.id
        })">Detail</button>
        <button class="ip2" onclick="deleteRowJs(this)">Delete</button>
    </td>
`;
}
// thêm row vào bảng
function addRowJs(user) {
    console.log(user);
    var tableRef = document
        .getElementById("table_users")
        .getElementsByTagName("tbody")[0];

    var newRow = tableRef.insertRow(tableRef.rows.length);
    newRow.innerHTML = formatRow(user);
}