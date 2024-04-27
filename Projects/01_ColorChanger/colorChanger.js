const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector('body');
// console.log(body);

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);

        const colorId = e.target.id;
        // console.log(colorId);
        switch(colorId){
            case 'grey':
            body.style.backgroundColor = colorId;
            break;
            case 'white':
            body.style.backgroundColor = colorId;
            break;
            case 'blue':
            body.style.backgroundColor = colorId;
            break;
            case 'yellow':
            body.style.backgroundColor = colorId;
            break;
            case 'purple':
            body.style.backgroundColor = colorId;
            break;
        }

    })
})