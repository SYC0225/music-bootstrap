function  change_pic() {
    var imgObj = document.getElementById("bf");
    var Flag=(imgObj.getAttribute("src",2)=="../images/bofang.png")
    imgObj.src=Flag?"../images/bofang_1.png":"../images/bofang.png";
}