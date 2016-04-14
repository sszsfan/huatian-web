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
/*
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
*/
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

function showScan() {
	if(!document.getElementById("js_scan_img")){
		return false;
	}
	var scans = document.getElementsByClassName("js_scan");
	var img = document.getElementById("js_scan_img");
  var app = document.getElementById("js_scan_app"); 
  var weixin = document.getElementById("js_scan_weixin"); 
	scans[0].onmouseenter = function(){
		scans[0].setAttribute("src","images/scan101.png");
		app.setAttribute("class","show");
		weixin.setAttribute("class","hidden");
		img.setAttribute("src","images/test.png");
		moveElement("js_qr_code",130,10);
	};
	scans[0].onmouseleave = function(){
		scans[0].setAttribute("src","images/scan001.png");
		moveElement("js_qr_code",0,10);
	};
	scans[1].onmouseenter = function(){
		scans[1].setAttribute("src","images/scan102.png");
		weixin.setAttribute("class","show");
		app.setAttribute("class","hidden");
		img.setAttribute("src","images/weixin.png");
		moveElement("js_qr_code",130,10);
	};
	scans[1].onmouseleave = function(){
		scans[1].setAttribute("src","images/scan002.png");
		moveElement("js_qr_code",0,10);
	};
	scans[2].onmouseenter = function(){
		scans[2].setAttribute("src","images/scan103.png");
	};
	scans[2].onmouseleave = function(){
		scans[2].setAttribute("src","images/scan003.png");  	
	};
}

function moveElement(elementID,final_x,interval) {
  var dwidth = 0;
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.width) {
    elem.style.width = dwidth + "px";
  }
  var xpos = parseInt(elem.style.width);
  if (xpos == final_x) {
    return true;
  }
  if (xpos < final_x) {
    xpos = xpos + 10;
  }
  if (xpos > final_x) {
    xpos = xpos - 10;
  }
  elem.style.width = xpos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}

function showJob(){
	if(!document.getElementsByClassName("js_job_lists")) return false;
	if(!document.getElementsByClassName("js_job_items")) return false;
	var lists = document.getElementsByClassName("js_job_lists");
	var items = document.getElementsByClassName("js_job_items");
	var index;
	function clickJob(num){
		
		lists[num].onclick = function(){
			for(var j=0;j<lists.length; j++){
				lists[j].setAttribute("class","js_job_lists");
				items[j].setAttribute("class","right js_job_items hidden");
			}
			lists[num].setAttribute("class","f_red js_job_lists");
			items[num].setAttribute("class","right js_job_items");
		};	
	}
	for(var i=0; i<lists.length; i++){	
		clickJob(i);
	}
}

addLoadEvent(showNav);
addLoadEvent(showMarket);
addLoadEvent(showScan);
addLoadEvent(showJob);
//addLoadEvent(showPic);