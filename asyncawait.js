const checkLogin=()=>{
return new Promise(
(resolve,reject)=>{
    let loggedIn=false;
    if(loggedIn){
        resolve("welcome you are loggedin")
    }
    else{
        reject("sorry you are not loggedin")
    }
}
)}
async function handleLogin(){
    try{
        const result=await checkLogin();
        console.log(result);
    } catch(error){
        console.log(error);
    }
}
handleLogin();