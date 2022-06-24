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
var upload = "";

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

