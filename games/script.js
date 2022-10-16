var bgEffects = {
  "0":VANTA.CLOUDS
}


document.getElementById("effect").addEventListener("change", ()=> run());

function run(){
  bgEffects[0]({
    el: document.getElementById("vantajs-bg"),
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
  });
}
run();