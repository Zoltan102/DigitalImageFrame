(()=>{"use strict";document.getElementById("url").addEventListener("change",(function(){document.getElementById("img").src=document.getElementById("url").value})),document.getElementById("width").addEventListener("input",(function(){document.getElementById("img").width=document.getElementById("width").value})),document.getElementById("border").addEventListener("input",(function(){document.getElementById("img").style.borderWidth=document.getElementById("border").value+"px"})),document.getElementById("colour").addEventListener("input",(function(){document.getElementById("img").style.borderColor=document.getElementById("colour").value}))})();