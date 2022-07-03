const baby = document.querySelector('#baby')
const baby2 = document.querySelector('#baby2')


dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("mydiv2"))

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

baby.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayBaby').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

baby2.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayBaby2').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})