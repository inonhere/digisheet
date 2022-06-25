const baby = document.querySelector('#baby')
const baby2 = document.querySelector('#baby2')
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
const digiA2 = document.querySelector('#digiA2')
const digiA3 = document.querySelector('#digiA3')
const digiA4 = document.querySelector('#digiA4')
const digiB = document.querySelector('#digiB')
const digiB2 = document.querySelector('#digiB2')
const digiB3 = document.querySelector('#digiB3')
const digiB4 = document.querySelector('#digiB4')
const digiB5 = document.querySelector('#digiB5')
const digiB6 = document.querySelector('#digiB6')
const digiB7 = document.querySelector('#digiB7')
const digiB8 = document.querySelector('#digiB8')
const digiB9 = document.querySelector('#digiB9')
const digiB10 = document.querySelector('#digiB10')
const digiB11 = document.querySelector('#digiB11')
var upload = "";

function oscuridad() {
    var cambio = document.body;
    cambio.classList.toggle("dark-mode");
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






