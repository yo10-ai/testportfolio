//this code generates random colors on screen
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color = color + hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let randomvar;
const startchangingcolor =  function(){
     randomvar= setInterval(changeBgColor,1000);
function changeBgColor(){document.body.style.backgroundColor=randomColor()}
}
let clickstartbutton = document.querySelector('#button1').addEventListener('click',startchangingcolor)

document.querySelector('#button2').addEventListener('click',function stopchangingcolor(){
  clearInterval(randomvar)
})


