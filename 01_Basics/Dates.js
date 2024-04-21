let myDate = new Date();
console.log(myDate); // 2024-04-21T11:30:53.069Z
console.log(myDate.toString()); // Sun Apr 21 2024 11:30:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Sun Apr 21 2024
console.log(myDate.toLocaleString()); // 4/21/2024, 11:30:53 AM
console.log(myDate.toLocaleDateString()); // 4/21/2024
console.log(myDate.toLocaleTimeString()); // 11:30:53 AM

let myNewDate = new Date("2024", "03", "21");
console.log(myNewDate); // 2024-04-21T00:00:00.000Z

let nextDate = new Date("04-21-2024");
console.log(nextDate);  // 2024-04-21T00:00:00.000Z


let datTmCheck = new Date();
console.log(datTmCheck.getDate()); // 21
console.log(datTmCheck.getTime()); // 1713699463943 ( we will get it in milliseconds )
console.log(datTmCheck.getHours()); // 11
console.log(Math.floor(Date.now()/ 1000));