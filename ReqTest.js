// function getReq() {
//     var req = false;
//     if(window.XMLHttpRequest) {
//         try {
//             req = new XMLHttpRequest();
//         } catch(e) {
//             req = false;
//         }
//     } else if(window.ActiveXObject) {
//         try {
//             req = new ActiveXObject("Microsoft.XMLHTTP");
//         } catch(e) {
//             req = false;
//         }
//     }
//     if (! req) {
//         alert("Your browser does not support XMLHttpRequest.");
//     }
//     return req;
// }
//
//     var req = getReq();
//
//         try {
//         req.open("GET", 'http://www.example.com', false);
//         req.send("");
//     } catch (e) {
//         success = false;
//         error_msg = "Error: " + e;
//     }
//
// alert(req.status);
var req = new XMLHttpRequest();
req.open('GET', document.location, false);
req.send(null);
var headers = req.getAllResponseHeaders().toLowerCase();
alert(headers);

bot.GET
