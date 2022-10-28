// window.onload = function() {
//     // let url = new URL(window.location.href);
//     // let id = url.searchParams.get("id");
//     // console.log(id)


// //  document.getElementById('input__name').value=person.name
// //  document.getElementById('input__age').value=person.age
// //  document.getElementById('input__address').value=person.address
//         getUser();
// };

// call api lại , để lấy thông tin mới nhất ở url
// function getUser() {
//     let id = getIdUrl();
//     fetch("https://634e9e894af5fdff3a623edf.mockapi.io/person/" + id, {
//             method: "GET",
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             // viết một function để render ra màn hình
//             //renderInfo(data);
//         })
//         .catch((error) => {
//             console.error("Error:", error);
//         });
//     console.log(id);
// }
// lấy được id =
// function getIdUrl() {
//     // câu lệnh lấy dc id trên url
//     let url = new URL(window.location.href);
//     let id = url.searchParams.get("id");
//     return id;
// }



