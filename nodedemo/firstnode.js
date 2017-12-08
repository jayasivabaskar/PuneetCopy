

// console.log('Hello World!!')

function sleep(seconds) 
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}

function someProcessingUnit(){
    // Does some processing -- should take up some time
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            sleep(4)
            // return "success";
            // callback("success")
            if(true)
                reject("processing has failed for -- reason")
        },0)
    })
    
    // console.log(callback);
    
   
}
console.log('starting to process...')
// someProcessingUnit(function(result){
//     console.log(result);
// });

someProcessingUnit()
.then((result)=>{
    console.log(result)
})
.then(()=>{
    console.log('do something else')
})
.catch(function (error) {
    console.log(error);
  });
console.log('finished processing...')