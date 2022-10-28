window.onload = function (e) {
  //addRowJs();
  //   deleteRowJs();
  //   addRowJq();
  //   addCollumnJquery();
  getListUsers();
};

//DETAIL
//handle event ở btn detail (truyền theo user.id)
// event:-> redirect trang web từ list -> detail dựa vào window.location.href
// detail.html -> getId ở trên url
//->call Api get User dựa vào id (ở mockapi)-> call thành công
//->render info ra ngoài (js.DOM)

//--------------------------------------detail
//khởi tạo một function
function gotoDetail(id) {
  //id là dc truyền ở sự kiện trong nút btn formatRow(user)
  console.log(window.location.href, id);
  window.location.href = `./detail.html?id=` + id; //redirec : chuyển hướng sang trang detail
}

//DELETE
// handle event ở btn delete (truyền theo user.id)
// event:
//+call API delete user
//+delete thành công
// thực hiện update list user
//- DELETE elm in List
//- call API getListUser

//---------------------------------------delete MOCK API
function deleteRowJs(elm) {
  // 1 thằng parentElement là thằng con td
  // gọi tiếp 1 thằng parentElement là thằng chứa td là tr
  let elmRow = elm.parentElement.parentElement;
  // log ra để kiểm tra element row có phải là thằng mình cần lấy k
  console.log(elmRow);
  elmRow.remove();
  // document.getElementById("table_users").deleteRow(index);
}

//---------------------------------------DELETE API
// mock yêu cầu xóa là phải truyền 1 id : nhận tham số là một id ,elm
function deleteRowAPI(elm, id) {
  // console.log(elm); -> test xem thử đã thực hiện được sự kiện onclick chưa -> lấy ra dc btn
  // call API delete user
  // - xóa thành công -> xóa row ở trong table
  fetch("https://634e9e894af5fdff3a623edf.mockapi.io/person/" + id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //xóa row
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
    <td>${user?.age}</td>
    <td>${user?.address}</td>
    
    <td class="btn-control">
    <button class="btn1 btn-ip1" onclick="gotoDetail(${user?.id})">Detail</button>
    <button class="btn1 btn-ip2" onclick="deleteRowAPI(this,${user?.id})">Delete</button>
    </td>
    `;
}
//------------------------------------Test thử xem onclick hoạt động chưa
// function deleteRowAPI() {
//   console.log('deleteRowAPI');

// }

//------------------------------------thêm row vào bảng
function addRowJs(user) {
  console.log(user);
  var tableRef = document
    //render thuộc tính bảng
    .getElementById("table_users") //-> trả về tagname
    //render ra cái bảng
    .getElementsByTagName("tbody")[0]; //-> trả về mảng
  // add tr thôi
  var newRow = tableRef.insertRow(tableRef.rows.length);
  // add nội dung th td vào
  newRow.innerHTML = formatRow(user);
}

//-----------------------------------call API
function getListUsers() {
  fetch("https://634e9e894af5fdff3a623edf.mockapi.io/person?page=1&limit=10", {
    method: "GET",
  })
    // trả về một cái phản hồi
    .then((response) => response.json())
    .then((data) => {
      data?.map((user) => addRowJs(user)); // truyền vào một user -> thì phải truyền vào thằng function mình khai báo addRowJs  formatRow
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
