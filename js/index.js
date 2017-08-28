
window.onload = function() {
	var oDiv = document.getElementById('content');
	var oVisit = document.getElementById('inner');
	var oPrev = document.getElementById('prev');
	var oNext = document.getElementById('next');
	
	var oImg = oVisit.getElementsByTagName('img');
	var arrImg = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg'];
	
	for(var i=0, i<arrImg.length; i++) {
		oNext.onclick = function(){
			oImg.src = arrImg[i];	
		}
	}
}
