import './style.css';


function getImg(){
    document.getElementById("img").src = document.getElementById("url").value;
}
function changeImgWidth(){
    document.getElementById("img").width = document.getElementById("width").value
}
function changeBorderWidth(){
    document.getElementById("img").style.borderWidth = document.getElementById("border").value + "px";
}
function changeBorderColour(){
    document.getElementById("img").style.borderColor = document.getElementById("colour").value;
}

document.getElementById("url").addEventListener('change', getImg);
document.getElementById("width").addEventListener('input', changeImgWidth);
document.getElementById("border").addEventListener('input', changeBorderWidth);
document.getElementById("colour").addEventListener('input', changeBorderColour);