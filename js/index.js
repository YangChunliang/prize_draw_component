//处理转动逻辑
//面向对象开发

function ZhuanDong() {

}
ZhuanDong.prototype = {
    constructor: ZhuanDong,
    init: function () {
        this.prizeZhuan();
    },
    prizeZhuan: function () {
        var prizeIndex = 0;
        var arrNum = [0,1,2,5,8,7,6,3];//定义转动的顺序
        var arrPic = document.getElementsByName('pic');
        function move() {
            if(prizeIndex === 0){
                arrPic[arrNum[7]].style.opacity = 1;
                arrPic[arrNum[prizeIndex]].style.opacity = 0.8;
                prizeIndex++;
            }else if(prizeIndex === 8){
                prizeIndex = 0;
                arrPic[arrNum[7]].style.opacity = 1;
                arrPic[arrNum[prizeIndex]].style.opacity = 0.8;
                prizeIndex++;
            }else{
                arrPic[arrNum[prizeIndex-1]].style.opacity = 1;
                arrPic[arrNum[prizeIndex]].style.opacity = 0.8;
                prizeIndex++;
            }
        }
        arrPic[4].onclick = function () {
            var num = Math.ceil(Math.random()*8);
            var timer = setInterval(move,100);
            setTimeout(function () {
                clearInterval(timer);
            },2000+num*100)
        }
    }
}
window.onload = function () {
    new ZhuanDong().init();
}