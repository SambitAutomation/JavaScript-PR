let randomColor = () =>{
    let colorHexCodeList = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color += colorHexCodeList[Math.round(Math.random() * 16)] 
    }
    return color;
}

let intervalId ;

const colorChange = ()=>{
    intervalId = setInterval(generatingColor, 1000);

    function generatingColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopColorChange = ()=>{
    clearInterval(intervalId);

}

document.querySelector('#start').addEventListener('click',
colorChange);

document.querySelector('#stop').addEventListener('click',stopColorChange);
