const form=document.querySelector("form");
const username=document.querySelector("#username");
const password=document.querySelector("#password");


// here we use async function because it takes time to talk to server
form.addEventListener('submit',async(e)=>{
    e.preventDefault();     // for refreshing of page
    // making request to api
    const response=await axios.post('/login',{
        // payloads
        username:username.value,
        password:password.value,
});

if(response.data.status==='Success'){
    // save the token into localstorage
    console.log(response.data.token);
    localStorage.setItem("token",response.data.token);

}else{
    alert("Sorry try again");
}
});