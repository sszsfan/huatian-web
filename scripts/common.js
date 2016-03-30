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
	if(!document.getElementById("js_market_items")){
		return false;
	}	
	if(!document.getElementsByClassName("js_item")){
		return false;
	}
	if(!document.getElementsByTagName("li")){
		return false;
	}	
	var item_lists = document.getElementById("js_market_items");
	var items = item_lists.getElementsByTagName("li");
	var tb_items = document.getElementsByClassName("js_item");
	function clickshow(num){
		var index = num;
		items[index].onclick = function(){
			for(var j=0; j<items.length; j++){
				tb_items[j].style.display="none";
			}
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


function showMarket(){
	if(!document.getElementById("js_market_nav")){
		return false;
	}
	if(!document.getElementById("js_market_content")){
		return false;
	}
	if(!document.getElementsByTagName("li")){
		return false;
	}	
	var nav = document.getElementById("js_market_nav");
	var con = document.getElementById("js_market_content");
	var navs = nav.getElementsByTagName("li");
	var cons = con.getElementsByTagName("li");
	function clickshow(num){
		var index = num;
		navs[index].onclick = function(){
			for(var j=0; j<cons.length; j++){
				cons[j].setAttribute("class","hidden");

			}
			cons[index].setAttribute("class","show");
		}
  }
  function onmouseshow(num){
		var index = num;
		navs[index].onmouseover = function(){
			for(var j=0; j<cons.length; j++){
				navs[j].removeAttribute("class");
			}
			navs[index].setAttribute("class","active2");
		};
  }
	for(var i=0; i<navs.length; i++){
		clickshow(i);
		onmouseshow(i);
	}
}	
/*
function showJoin(){
	if(!document.getElementById("js_join_nav")){
		return false;
	}
	if(!document.getElementsByClassName("js_join")){
		return false;
	}
	var nav = document.getElementById("js_join_nav");
	var navs = document.getElementsByTagName("li");
	var cons = document.getElementsByClassName("js_join");

	function clickshow(num){
		var index = num;
		navs[index].onclick = function(){
			for(var j=0; j<navs.length; j++){
				cons[j].style.display="none";
			}
			cons[index].style.display="block";
		};
	}
	for(var i=0; i<navs.length; i++){
		clickshow(i);
	}
}
*/
addLoadEvent(showNav);
addLoadEvent(showMarket);
addLoadEvent(showPic);