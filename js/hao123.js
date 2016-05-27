var green = document.getElementById("green");
var blue = document.getElementById("blue");
var pink = document.getElementById("pink");
var purple = document.getElementById("purple");
var red = document.getElementById("red");
var changetheme = document.getElementById("theme");
if (getCookie("className") != null) {
    changetheme.className = getCookie("theme");
};
var storage = window.localStorage;
if (storage.getItem("theme") != "") {
    changetheme.className = storage.getItem("theme");
};
green.onclick = function() {
    changetheme.className = "normal";
    setCookie("theme", changetheme.className);
    // 设置cookie值并保存
    storage.setItem("theme", "normal");
    // 设置localStorge并保存
};
// 绿色主题
blue.onclick = function() {
    changetheme.className = "blue";
    setCookie("theme", changetheme.className);
    // 设置cookie值并保存
    storage.setItem("theme", "blue");
    // 设置localStorge并保存
};
// 蓝色主题
pink.onclick = function() {
    changetheme.className = "pink";
    setCookie("theme", changetheme.className);
    // 设置cookie值并保存
    storage.setItem("theme", "pink");
    // 设置localStorge并保存
};
// 粉红主题
purple.onclick = function() {
    changetheme.className = "purple";
    // 设置cookie值并保存
    setCookie("theme", changetheme.className);
    storage.setItem("theme", "purple");
    // 设置localStorge并保存
};
// 紫色主题
red.onclick = function() {
    changetheme.className = "red";
    setCookie("theme", changetheme.className);
    // 设置cookie值并保存
    storage.setItem("theme", "red");
    // 设置localStorge并保存
};
// 红色主题
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
}
// 设置cookie
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}
// 获取cookie