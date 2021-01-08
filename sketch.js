var s = "start";
var screen,screen1;
var database
var count,store = 0,input = "",tittle,num = 0,numberTask = 0;

var formInput ,button;
var reset;
len = [];
var newText;

function preload()
{
screen1 = loadImage("images/to do backgrouns.jpg");

}

function setup() {

  

createCanvas(800,700)
database = firebase.database();

screen = createSprite(0,100,1600,1300);
screen.addImage(screen1);
screen.scale = 3
play = new updates();
form1 = new form();
form1.display();
  
}


function draw() {  


play.referCount();
//play.updateTasks();
console.log(len)
  for(var i = 0;i<len.length;i = i+30){




  }
  drawSprites();
  
 

}






