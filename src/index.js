import './style.css';

function getImg(){
    document.getElementById("img").src = url(document.getElementById("url").value);
}
function changeImgWidth(){

}
function changeBorderWidth(){
    document.getElementById("img").style.borderWidth = document.getElementById("width").value;
}
function changeBorderColour(){

}

//document.getElementById("url").addEventListener('change', getImg);
document.getElementById("border").addEventListener('change', changeBorderWidth);