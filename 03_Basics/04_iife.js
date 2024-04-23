// Immediately Invoked Function Expression (IIFE)

// If we are calling more than one IIFE from a JS, then use semicolon(;) at the end of its function.. otherwise will get error

// named iifee
( function test(){
    console.log(`DB Connected`);
})();

// parameteriazed iife
((name) =>{
    console.log(`DB Conncted ${name}`);
})("CHECKED");