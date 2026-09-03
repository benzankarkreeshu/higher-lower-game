const checkLogin=new Promise(
(resolve,reject)=>{
    let loggedIn=true;
    if(loggedIn){
        resolve("welcome you are loggedin")
    }
    else{
        reject("sorry you are not loggedin")
    }
}
)
checkLogin.then((result)=>{console.log(result)})
checkLogin.catch((error)=>{console.log(error)})