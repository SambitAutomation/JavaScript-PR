const form = document.querySelector('form');

form.addEventListener('submit', function(e){

    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const rslt = document.querySelector('#results');

    if(height === "" || height <= 0 || isNaN(height)){
        rslt.innerHTML = `<span>Enter Valid Height</span>`;
        height = "";
    }
    if(weight === "" || weight <= 0 || isNaN(weight)){
        rslt.innerHTML = `<span>Enter Valid weight</span>`;
        weight = "";
    }
    if(height !== "" && weight !== ""){
    const val = (weight / ((height * height)/1000)).toFixed(2);
    rslt.innerHTML = `<span>Your BMI Result :-  ${val}</span>`;
    setTimeout(() => {
        document.querySelector('#height').value = "";
        document.querySelector('#weight').value = "";
        console.log("done");
    }, 2000);
}
})