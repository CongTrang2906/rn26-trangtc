window.onload = function (e) {
  //addRowJs();
  //   deleteRowJs();
  //   addRowJq();
  //   addCollumnJquery();
  getListUsers();
};



//--------------------------------------detail
function gotoDetail(id) { 
  console.log(window.location.href, id);
  window.location.href = `./detail.html?id=` + id;
}



//---------------------------------------delete
function deleteRowJs(elm) {
  let elmRow = elm.parentElement.parentElement;
  console.log(elmRow);
  elmRow.remove();
  // document.getElementById("table_users").deleteRow(index);
}


//---------------------------------------DELETE API
function deleteRowAPI(elm, id) {
  fetch("https://634e9e894af5fdff3a623edf.mockapi.io/products/" + id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      deleteRowJs(elm);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
//------------------------------------- call api
// khai báo một thuộc tính tĩnh
// const myHtmlContent = `

//   <td onclick="postUser()">${user?.id}</td>
//   <td>${user?.name}</td>
//   <td>${user?.avatar}</td>
//   <td>${user?.name.split(" ")[0]}</td>
//   <td>
//     <input class="ip1" type="button" value="Delete">
//     <input class="ip2" type="button" value="Detail">
//   </td>

// `;



//----------------------------------------Thêm dữ liệu động
function formatRow(user) {
  return `
    <th scope="row" onclick="postUser()">${user?.id}</th>
    <td>${user?.name}</td>
    <td class="text-break">${user?.avatar}</td>
    <td>${user?.name.split(" ")[0]}</td>
    <td class="btn-control">
    <button class="btn btn-ip1" onclick="gotoDetail(${user?.id})">Detail</button>
    <button class="btn btn-ip2" onclick="deleteRowAPI(this,${user?.id})">Delete</button>
    </td>
    `;
}


//------------------------------------thêm row vào bảng
function addRowJs(user) {
  console.log(user);
  var tableRef = document
    .getElementById("table_users")
    .getElementsByTagName("tbody")[0];
  // add tr thôi
  var newRow = tableRef.insertRow(tableRef.rows.length);
  // add nội dung th td vào
  newRow.innerHTML = formatRow(user);
}



//-----------------------------------call API
function getListUsers() {
  fetch(
    "https://634e9e894af5fdff3a623edf.mockapi.io/products?page=1&limit=10",
    {
      method: "GET",
    }
  )
    // trả về một cái phản hồi
    .then((response) => response.json())
    .then((data) => {
      data?.map((user) => addRowJs(user));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
