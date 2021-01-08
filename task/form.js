class form{
constructor(){
}

display(){

    tittle = createElement('h1');
    tittle.html("To Do List");
    tittle.position(670,100)

    formInput = createInput("TASK");
    formInput.position(680,200);
    
    button = createButton("ENTER");
    button.position(680,230);
    
    reset = createButton("RESET");
    reset.position(680,260)

    button.mousePressed(function(){
    
    console.log("link")
    input = formInput.value();
    num = num+1
    console.log(num)

   

    play.updateCount(num);
    play.updateTasks(input)
    play.getTask();

   //len.push(num);
   

})

reset.mousePressed(function(){


num = 0;
console.log("reseted")
play.updateCount(0)




})







}




}