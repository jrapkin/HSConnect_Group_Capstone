"use strict";

//var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

//document.getElementById("sendButton").disabled = true;

//connection.on("ReceiveMessage", function (user, message) {
//    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
//    var encodedMsg = user + " says " + msg;
//    var li = document.createElement("li");
//    li.textContent = encodedMsg;
//    document.getElementById("messagesList").appendChild(li);
//});

//connection.start().then(function () {
//    document.getElementById("sendButton").disabled = false;
//}).catch(function (err) {
//    return console.error(err.toString());
//});

//document.getElementById("sendButton").addEventListener("click"), function (event) {
//    var user = document.getElementById("userInput").value;
//    var message = document.getElementById("messageInput").value;
//    connection.invoke("SendMessage", user, message).catch(function (err) {
//        return console.error(err.toString());
//    });
//    event.preventDefault();
//};
function openChat() {
    document.getElementById("chatApp").innerHTML = "<div class=\"container\"><div class=\"row\">&nbsp;</div><div class=\"row\"><div class=\"col-2\">User</div><div class=\"col-4\"><input type=\"text\" id=\"userInput\" /></div></div><div class=\"row\"><div class=\"col-2\">Message</div><div class=\"col-4\"><input type=\"text\" id=\"messageInput\" /></div></div><div class=\"row\">&nbsp;</div><div class=\"row\"><div class=\"col-6\"><input type=\"button\" id=\"sendButton\" value=\"Send Message\" /></div></div></div><div class=\"row\"><div class=\"col-12\"><hr /></div></div><div class=\"row\"><div class=\"col-6\"><ul id=\"messagesList\"></ul></div></div>";
}
