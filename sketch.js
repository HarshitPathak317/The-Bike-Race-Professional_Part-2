var roadimage,roadimage2;
var player,player_img,player_img2;
var npc, npc_img;
var npc_speed
var canvas
var lbounce,rbounce;
var gameState = "L1"

var dis = 0;
function preload(){
roadimage = loadImage("motorcycle/road2.jpg");
player_img = loadImage("motorcycle/ai3.gif");
//player_img2 = loadImage("motorcycle/ai1.jpg");
npc_img = loadImage("motorcycle/ai2.gif");
roadimage2 = loadImage('motorcycle/rode5 - Copy.jpg')
}

function setup() {
  canvas = createCanvas(displayWidth,displayHeight);

 player = createSprite(800, 600, 50, 50);
 player.addImage(player_img);
 player.scale = 0.5;
 player.debug = true;
 
 npc = createSprite(500, 600, 50, 50);
 npc.addImage(npc_img);
 npc.scale = 0.7;
 npc.debug = true;

 rbounce = createSprite(1180, 600, 50, 200);
 lbounce = createSprite(200,600,50,200)

 npc_speed = Math.round(random(-5,-5));
}

function draw() {
  background(0); 
  image(roadimage,0,-displayHeight*3,displayWidth,displayHeight*10);
  if(gameState === "L1"){

  if(keyDown("W") || keyDown("UP_ARROW") ){
    player.position.y += -3;
  }
  if(keyDown("A") || keyDown("LEFT_ARROW") ){
    player.velocityX = -3;
  }
  if(keyDown("D") || keyDown("RIGHT_ARROW") ){
    player.velocityX = 3;
  }

  if(keyDown("g")){
    player.position.y += -7;
  }

  npc.velocityY = npc_speed;
  
console.log(npc.y);
  rbounce.position.y = player.y;
  lbounce.position.y = player.y;

  if(player.isTouching(lbounce) || player.isTouching(rbounce)){
    player.velocityY = 0;
    player.velocityX = 0;
  }
  
  player.bounceOff(npc);
  camera.position.x = displayWidth/2;
  camera.position.y = player.y;

  //var gameState = "L2"
  console.log(player.y,player.x);
  if(player.y === -2898 || npc.y === -2898){
   gameState = "L2"
  }
}



  if(gameState === "L2"){
    //image(roadimage2,800,-3000,displayWidth,displayHeight*5);
    if(keyDown("W") || keyDown("UP_ARROW") ){
      player.position.y += -3;
    }
    if(keyDown("A") || keyDown("LEFT_ARROW") ){
      player.velocityX = -3;
    }
    if(keyDown("D") || keyDown("RIGHT_ARROW") ){
      player.velocityX = 3;
    }
  
    if(keyDown("g")){
      player.position.y += -7;
    }
  
    npc.velocityY = npc_speed;
    
  console.log(npc.y);
    rbounce.position.y = player.y;
    lbounce.position.y = player.y;
  
    if(player.isTouching(lbounce) || player.isTouching(rbounce)){
      player.velocityY = 0;
      player.velocityX = 0;
    }
    
    player.bounceOff(npc);
    camera.position.x = displayWidth/2;
    camera.position.y = player.y;
  
  }
  drawSprites();
}