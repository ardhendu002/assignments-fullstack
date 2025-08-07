function getTime(){
    let dates = new Date();
    let times = dates.toLocaleTimeString();
    console.log(times);
    setTimeout(getTime,1000);
}
getTime();