const baby = document.querySelector('#baby');
const baby2 = document.querySelector('#baby2');
const digi = document.querySelector('#digi');
const digi2 = document.querySelector('#digi2');
const digi3 = document.querySelector('#digi3');
const digi4 = document.querySelector('#digi4');
const digi5 = document.querySelector('#digi5');
const digiD = document.querySelector('#digiD');
const digiD2 = document.querySelector('#digiD2');
const digiD3 = document.querySelector('#digiD3');
const digiD4 = document.querySelector('#digiD4');
const digiA = document.querySelector('#digiA');
const digiA2 = document.querySelector('#digiA2');
const digiA3 = document.querySelector('#digiA3');
const digiA4 = document.querySelector('#digiA4');
const digiB = document.querySelector('#digiB');
const digiB2 = document.querySelector('#digiB2');
const digiB3 = document.querySelector('#digiB3');
const digiB4 = document.querySelector('#digiB4');
const digiB5 = document.querySelector('#digiB5');
const digiB6 = document.querySelector('#digiB6');
const digiB7 = document.querySelector('#digiB7');
const digiB8 = document.querySelector('#digiB8');
const digiB9 = document.querySelector('#digiB9');
const digiB10 = document.querySelector('#digiB10');
const digiB11 = document.querySelector('#digiB11');
const intento = document.querySelectorAll('input');
const mostrar = document.querySelectorAll('.bebes');
const mostrarN = document.querySelectorAll('.viejos');
const mostrarD = document.querySelectorAll('.oscurito');
const mostrarA = document.querySelectorAll('.alterado');
const mostrarE = document.querySelectorAll('.armadura')
var upload = "";


function borrarB() {
   var a = document.querySelector('#displayBaby');
   a.classList.remove('digi_img', 'primeraEtapa');
   a.classList.add('ocultito');
}

function borrarT() {
    var a = document.querySelector('#displayBaby2');
    a.classList.remove('digi_img', 'primeraEtapa');
    a.classList.add('ocultito');
 }

 function borrarC() {
    var a = document.querySelector('#displayDigi');
    a.classList.remove('digi_img', 'primeraEtapa');
    a.classList.add('ocultito');
 }
 
 function borrarA() {
    var a = document.querySelector('#displayDigi2');
    a.classList.remove('digi_img', 'evoNormal');
    a.classList.add('ocultito');
 }

 function borrarP() {
    var a = document.querySelector('#displayDigi3');
    a.classList.remove('digi_img', 'evoNormal');
    a.classList.add('ocultito');
 }
 
 function borrarU() {
    var a = document.querySelector('#displayDigi4');
    a.classList.remove('digi_img', 'evoNormal');
    a.classList.add('ocultito');
 }
 
 function borrarE() {
    var a = document.querySelector('#displayDigi5');
    a.classList.remove('digi_img', 'evoNormal');
    a.classList.add('ocultito');
 } 

 function borrarAD() {
    var a = document.querySelector('#displayDDigi');
    a.classList.remove('digi_img', 'evoOscura');
    a.classList.add('ocultito');
 }
 
 function borrarPD() {
    var a = document.querySelector('#displayDDigi2');
    a.classList.remove('digi_img', 'evoOscura');
    a.classList.add('ocultito');
 }
 
 function borrarUD() {
    var a = document.querySelector('#displayDDigi3');
    a.classList.remove('digi_img', 'evoOscura');
    a.classList.add('ocultito');
 }
 
 function borrarED() {
    var a = document.querySelector('#displayDDigi4');
    a.classList.remove('digi_img', 'evoOscura');
    a.classList.add('ocultito');
 }
 
 function borrarAA() {
    var a = document.querySelector('#displayADigi');
    a.classList.remove('digi_img', 'evoAlterna');
    a.classList.add('ocultito');
 }
 
 function borrarAP() {
    var a = document.querySelector('#displayADigi2');
    a.classList.remove('digi_img', 'evoAlterna');
    a.classList.add('ocultito');
 }
 
 function borrarAU() {
    var a = document.querySelector('#displayADigi3');
    a.classList.remove('digi_img', 'evoAlterna');
    a.classList.add('ocultito');
 } 

 function borrarAE() {
    var a = document.querySelector('#displayADigi4');
    a.classList.remove('digi_img', 'evoAlterna');
    a.classList.add('ocultito');
 }
 
 function armorC() {
    var a = document.querySelector('#displayB');
    a.classList.remove('digi_img', 'armadura');
    a.classList.add('ocultito');
 } 

 function armorF() {
    var a = document.querySelector('#displayB2');
    a.classList.remove('digi_img', 'armadura');
    a.classList.add('ocultito');
 } 

 function armorL() {
    var a = document.querySelector('#displayB3');
    a.classList.remove('digi_img', 'armadura');
    a.classList.add('ocultito');
 }
 
 function armorP() {
    var a = document.querySelector('#displayB4');
    a.classList.remove('digi_img', 'armadura');
    a.classList.add('ocultito');
 } 

 function armorK() {
    var a = document.querySelector('#displayB5');
    a.classList.remove('digi_img', 'armadura');
    a.classList.add('ocultito');
 }
 
 function armorS() {
    var a = document.querySelector('#displayB6');
    a.classList.remove('digi_img', 'armadura');
    a.classList.add('ocultito');
 } 

 function armorH() {
    var a = document.querySelector('#displayB7');
    a.classList.remove('digi_img', 'armadura');
    a.classList.add('ocultito');
 }
 
 function armorLi() {
    var a = document.querySelector('#displayB8');
    a.classList.remove('digi_img', 'armadura');
    a.classList.add('ocultito');
 }
 
 function armorKi() {
    var a = document.querySelector('#displayB9');
    a.classList.remove('digi_img', 'armadura');
    a.classList.add('ocultito');
 }
 
 function armorM() {
    var a = document.querySelector('#displayB10');
    a.classList.remove('digi_img', 'armadura');
    a.classList.add('ocultito');
 }
 
 function armorFa() {
    var a = document.querySelector('#displayB11');
    a.classList.remove('digi_img', 'armadura');
    a.classList.add('ocultito');
 } 

function enseñarB(){
    for (const mostre of mostrar) {
        mostre.classList.remove('ocultito');
        mostre.classList.add('digi_img', 'primeraEtapa');
    }
}

function enseñarN(){
    for (const mostreN of mostrarN){
        mostreN.classList.remove('ocultito');
        mostreN.classList.add('digi_img', 'evoNormal');
    }
}

function enseñarD(){
    for (const mostreD of mostrarD){
        mostreD.classList.remove('ocultito');
        mostreD.classList.add('digi_img', 'evoOscura');
    }
}

function enseñarA() {
    for (const mostreA of mostrarA){
        mostreA.classList.remove('ocultito');
        mostreA.classList.add('digi_img', 'evoAlterna');
    }
}

function enseñarE() {
    for (const mostreE of mostrarE){
        mostreE.classList.remove('ocultito');
        mostreE.classList.add('digi_img', 'armadura');
    }
}

function oscuridad() {
    var cambio = document.body;
    cambio.classList.toggle("dark-mode");
}

function ocultacion() {
    var cambio = document.querySelectorAll('.equis');
for (const cambios of cambio)
    cambios.classList.toggle("equisB");
}


function intentoDeOcultar() {
for (const intent of intento) {
    intent.classList.toggle('ocultito');
}}

function ocultarNormal(){
    var cambio = document.querySelector('.normalEvo')
    cambio.classList.toggle('ocultito')
}

function ocultarOscuro(){
    var cambio = document.querySelector('.darkEvo')
    cambio.classList.toggle('ocultito')
}

function ocultarAlterado(){
    var cambio = document.querySelector('.alterEvo')
    cambio.classList.toggle('ocultito')
}

function ocultarArmor(){
    var cambio = document.querySelector('.armorEvo')
    cambio.classList.toggle('ocultito')
}

function ocultarPri(){
    var cambio = document.querySelector('.firstStage');
    cambio.classList.toggle('ocultito')
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
digi.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayDigi').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digi2.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayDigi2').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digi3.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayDigi3').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digi4.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayDigi4').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digi5.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayDigi5').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiD.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayDDigi').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiD2.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayDDigi2').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiD3.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayDDigi3').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiD4.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayDDigi4').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiA.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayADigi').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiA2.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayADigi2').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiA3.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayADigi3').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiA4.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayADigi4').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiB.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayB').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiB2.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayB2').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiB3.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayB3').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiB4.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayB4').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiB5.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayB5').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiB6.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayB6').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiB7.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayB7').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiB8.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayB8').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiB9.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayB9').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiB10.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayB10').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})

digiB11.addEventListener('change', function(){
    const lectura = new FileReader();
    lectura.addEventListener('load', ()  =>{
        upload = lectura.result;
        document.querySelector('#displayB11').style.backgroundImage = `url(${upload})`
    });
    lectura.readAsDataURL(this.files[0])
})






