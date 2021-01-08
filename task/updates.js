class updates{
constructor(){
}

referCount(){
var countRefN = database.ref('numberTask');
countRefN.on("value",function(data){

store = data.val();

})
}

updateCount(countt){
    console.log("code")
    database.ref('numberTask').update({
    
    numberTask:countt
    
    
    })
    
    
    }

getTask(){

    var tasks = 'task' + num;
    database.ref(tasks).on("value",function(data){

        newText =  data.val()
        console.log(data.val())
    }

   

   )


}


updateTasks(input12){

var tasks = 'task' + num;
database.ref(tasks).update({

task: input12

})


    }

}