

function displayTime(){
    document.getElementById
    let dateTime=new Date();
    
    let hrs=dateTime.getHours();
    let mins=dateTime.getMinutes();
    let secs=dateTime.getSeconds();
  
    if(hrs>12){
        hrs=hrs-12
        document.getElementById("ampm").innerHTML='PM'
    }

    document.getElementById("hours").innerHTML=padZero(hrs)
    document.getElementById("min").innerHTML=padZero(mins)
    document.getElementById("sec").innerHTML=padZero(secs)
    
    
   
            
}
function padZero(num){
    return num<10?'0'+num:num
}
setInterval(displayTime,500)

// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// .then((res)=>res.json())
// .then((msg)=>console.log(msg[0].setup,msg[0].punchline))
// .catch((err)=>console.log(err))



// try{
//     num=prompt("Enter the number")
//     if (num==='')
//     throw "cannot be empty"
//     if (isNaN(num))
//     throw "Enter the valid naumber"
//     console.log(num**2)

// }
// catch(error){
//     console.log(error)
// }