/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve , reject)=>{
        if(resolve){
            setTimeout(()=>{
                resolve('hello forum');
                console.log('heyy!!')
            },n);
        }
    })
}

module.exports = wait(3000);
