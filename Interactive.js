var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// only paint if mouse is being dragged (moved while the button is pressed)
var isPainting = false;

function setWidth(value) {//To set the width of the canvas 
    if (isNumeric(value) == true) {//To check wheater value is number or not 
        paintcanvas.width = 2 * value;
    }

}
function setHeight(value) {//To set the height of the canvas 
    if (isNumeric(value) == true) {
        paintcanvas.height = value;
    }

}
function startPaint() {
    isPainting = true;//To start painting we just need to set to  true 
}
//to End the painting 
function endPaint() {
    isPainting = false;//We just need to set it to the false 
}
function dopaint(x, y) {//Has two parameters 
    if (isPainting == true) {
        paintCircle(x, y);//If it is set to true then we need to call this function 
    }

}

function clearCanvas() {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle(x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

// verify the given value is actually a number
function isNumeric(value) {
    // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
    return !isNaN(value)
}
//to change the color of the paintBrush 
function changeColor(newColor) {
    color = newColor;//Setting the variable name color to the new color 
}
//To resize the brush 
function resizeBrush(newSize) {
    radius = newSize;//Changing the radius of the circle means changing size of the brush 
    document.getElementById("sizeOutput").value = newSize; //We did this to output the value of the size of the brush 

}