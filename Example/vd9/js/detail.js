window.onload = function() {
    // let url = new URL(window.location.href);
    // let id = url.searchParams.get("id");
    // console.log(id)
    getUser();
};

function gotoDetail(id) { //id là dc truyền ở sự kiện trong nút btn formatRow(user)
    console.log(window.location.href, id);
    window.location.href = `./user_form.html?id=` + id; //redirec : chuyển hướng sang trang detail
  }
 
//   function formatRow(user) {
//     return `
//       <th scope="row" onclick="postUser()">${user?.id}</th>
//       <td>${user?.name}</td>   
//       <td>${user?.age}</td>
//       <td>${user?.address}</td>
      
//       <td class="btn-control">
//       <button class="btn1 btn-ip1" onclick="gotoDetail(${user?.id})">Detail</button>
//       </td>
//       `;
//   }

//   function addRowJs(user) {
//     console.log(user);
//     var tableRef = document
//     //render thuộc tính bảng
//       .getElementById("table_users") //-> trả về tagname
//     //render ra cái bảng
//       .getElementsByTagName("tbody")[0]; //-> trả về mảng
//     // add tr thôi
//     var newRow = tableRef.insertRow(tableRef.rows.length);
//     // add nội dung th td vào
//     newRow.innerHTML = formatRow(user);
//   }

// call api lại , để lấy thông tin mới nhất ở url
function getUser() {
    let id = getIdUrl();
    fetch("https://634e9e894af5fdff3a623edf.mockapi.io/person/" + id, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // viết một function để render ra màn hình
            renderInfo(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    console.log(id);
}
// lấy được id =
function getIdUrl() {
    // câu lệnh lấy dc id trên url
    let url = new URL(window.location.href);
    let id = url.searchParams.get("id");
    return id;
}



function renderInfo(user) {
    // dữ liệu dòng 16 vs 35 phải giống nhau
    //console.log(user);
    const contentHTML = `
    
    <p>${user?.id}</p>
    <p>${user?.name}</p>
    <p>${user?.age}</p>
    <p>${user?.address}</p>
    <p><button class="btn1 btn-ip1" onclick="gotoDetail(${user?.id})">Update</button></p>
   
  
  
  `;
  //JS DOM render ra ngoài 
    const elm = document.getElementById("info");
    elm.innerHTML = contentHTML;
  // phần tử con của innerHTML là phần contentHTML
}

