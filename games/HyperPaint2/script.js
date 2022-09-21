var size = 10
var eraser = false

function Size(x) {
    if (x == "big") {size++}
    if (x == "small") {size--}
}

function calc() {
    if (eraser) {return "Pen"}
    else {return "Eraser"}
}

function flip() {
    document.querySelectorAll(".circlediv").forEach(circle => {
        circle.style.left = (window.innerWidth - circle.style.left.replace("px", "")) + "px"
    })
}

window.onload = function() {

    function newcircle(x, y, size, color) {
        var circle = document.createElement("div");
        circle.className = "circlediv";
        circle.style.top = (y - (size / 2)) + "px";
        circle.style.left = (x - (size / 2)) + "px";
        circle.style.height = size + "px";
        circle.style.width = size + "px";
        circle.style.background = color;
        return circle
    }

    var mousedown = false
    
    window.onmousedown = () => {mousedown = true}
    window.onmouseup = () => {mousedown = false}
    
    setInterval(() => {
        document.body.style.background = document.getElementById("background").value;
        document.getElementById("eraser").innerHTML = calc();
        document.getElementById("cursor").style.background = document.getElementById("color").value;
        document.getElementById("cursor").style.height = size + "px";
        document.getElementById("cursor").style.width = size + "px";
    })
    
    document.addEventListener("mousemove", () => {
        
        var x = event.clientX;
        var y = event.clientY;
        var color = document.getElementById("color").value;
        var background = document.getElementById("background").value;
    
        if (mousedown) {

            if (eraser) {
                var e = newcircle(x, y, size, background)
                setInterval(() => {e.style.background = document.getElementById("background").value});
                document.body.appendChild(e)
            }
            

            else {
                var circle = newcircle(x, y, size, color)
                document.body.appendChild(circle)
            }
    
        }
        
    })

}