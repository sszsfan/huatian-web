function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
function showPic(){
	if(!document.getElementById("js_wash_pics")){
		return false;
	}
	if(!document.getElementsByClassName("js_item")){
		return false;
	}
	var pic_lists = document.getElementById("js_wash_pics");
	var imgs = pic_lists.getElementsByTagName("img");
	var item_lists = document.getElementById("js_wash_items");
	var items = item_lists.getElementsByTagName("li");
	var tb_items = document.getElementsByClassName("js_item");
	function clickshow(num){
		var index = num;
		items[index].onclick = function(){
			for(var j=0; j<items.length; j++){
				imgs[j].setAttribute("class","hidden");
				tb_items[j].style.display="none";
			}
			imgs[index].setAttribute("class","show");
			tb_items[index].style.display="block";
		};
	}
	for(var i=0; i<items.length; i++){
		clickshow(i);
	}
}
function showNav(){
	if(!document.getElementsByClassName("js_category")){
		return false;
	}
	if(!document.getElementsByClassName("js_item_content")){
		return false;
	}
	var links = document.getElementsByClassName("js_category");
	var navs = document.getElementsByClassName("js_item_content");
	function clickshow(num){
		var index = num;
		links[index].onmouseover = function(){
			navs[index].style.display="block";
		};
		links[index].onmouseout = function(){
			navs[index].style.display="none";
		};
    }
	for(var i=0; i<links.length; i++){
		clickshow(i);
	}
}
addLoadEvent(showPic);
addLoadEvent(showNav);