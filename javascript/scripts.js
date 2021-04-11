let navLinks = document.getElementById("navLinks")

function mostrarMenu(){
    navLinks.style.right = "0"
}
function ocultarMenu(){
    navLinks.style.right = "-200px"
}

//Slider
window.onload = function () {
    mySlider('#slider', 8000);
  }
  
  var mySlider = function (id, time) {
    var target = document.querySelector(id),
        childrens = target.children,
        selectedIndex = 0,
        childrensCount = childrens.length,
        timeToWait = time,
        stop = false;
  
    
    childrens[selectedIndex].style.display = 'block';

    setInterval(transitionLogic, timeToWait);
  
    function transitionLogic(){
      if(!stop) {
        if(selectedIndex === childrensCount - 1) {
          selectedIndex = 0;
        } else {
          selectedIndex++;
        }
  
        for(var i = 0; i < childrensCount; i++) {
          childrens[i].style.display = 'none';
        }
  
        childrens[selectedIndex].style.display = 'block';
      }
    }
  
    
    target.addEventListener('mouseenter', function(){
      stop = true;
    });
  
    target.addEventListener('mouseleave', function(){
      stop = false;
    });
  };