canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouseEvent="empty"
var lastPositionOfx,lastPositionOfy
color="red"
widthOfLine=1
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    color=document.getElementById("color1").value 
    widthOfLine=document.getElementById("width").value 
    mouseEvent="mousedown"
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseup" 
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
currentpositionofmousex=e.clientX-canvas.offsetLeft
currentpositionofmousey=e.clientY-canvas.offsetTop
if(mouseEvent=="mousedown"){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthOfLine
    console.log("last position of xand y cordinates are")
    console.log("x= "+lastPositionOfx+" y= "+lastPositionOfy)
    ctx.moveTo(lastPositionOfx,lastPositionOfy)
    console.log("current position of xand y cordinates are")
    console.log("x= "+currentpositionofmousex+" y= "+currentpositionofmousey)
    ctx.lineTo(currentpositionofmousex,currentpositionofmousey)
    ctx.stroke()
}
lastPositionOfx=currentpositionofmousex
lastPositionOfy=currentpositionofmousey
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}


