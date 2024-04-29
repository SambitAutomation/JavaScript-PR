// First Promise
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Aysnc Task Done");
//         resolve();
//     })
// })

// promiseOne.then(function(){
//     console.log("Promise Complete");
// })

// // Second Promise
// new Promise(function(resolve, reject){
//     console.log("Object will send now");;
//     resolve({userName: "TestObj", email:"Test@test.com"})
// }).then(function(obj){
//     console.log(obj);
// })

// // Next Promise
// const fourPromise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({userName: "HR", email:"hr@hr.com"})
//         }else{
//             reject("ERROR: Got An Error");
//         }
//     },2000)
// })

// fourPromise.
// then((user)=>{
//     console.log(user);
//     return user.userName;
// }).then((userName)=>{
//     console.log(userName);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=> console.log("This Promise Got resolved or rejected"))

// By using async await
// const fivePromise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({course:"JS"});
//         }else{
//             reject("ERROR: For aysnc await ")
//         }
//     },1000)
// })

// async function consumeFivePromise(){
//     try{
//         const response = await fivePromise;
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }
// consumeFivePromise();

// Using fetch() api
// async function getGitHubData(){
//     try{
//         const response = await fetch('https://api.github.com/users/SambitAutomation');
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log("E: "+ error);
//     }
// }
// getGitHubData();

// fetch() using then & catch
fetch('https://api.github.com/users/SambitAutomation')
.then((res)=>{
    return res.json();
}).then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
})