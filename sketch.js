const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bat,drop,batimg,batman,maxdrop=100
var raindrop=[]
var thunder,thunder1img,thunder2img,thunder3img,thunder4img


function preload(){
    thunder1img=loadImage("images/thunderbolt/thunder1.png")
    thunder2img=loadImage("images/thunderbolt/thunder2.png")
    thunder3img=loadImage("images/thunderbolt/thunder3.png")
    thunder4img=loadImage("images/thunderbolt/thunder4.png")
    batimg=loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png")
}

function setup(){

    createCanvas(400,600)
   
    engine = Engine.create();
    world = engine.world;

    batman=createSprite(200,450)
    batman.addAnimation("BatMan",batimg)
    batman.scale=0.45

    bat=new Batman()
    //drop=new Drop(180,150)
if (frameCount%50===0){
    for (var i=0; i<maxdrop; i++){
        raindrop.push(new Drop(random(0,400),random(0,400)))
        
    }
}
}

function draw(){
    background(0)
    Engine.update(engine);

    for (var x=0; x<maxdrop; x++){
        raindrop[x].display();
        raindrop[x].updateY();
    }


    bat.display();

    thunderspawn();
    //console.log(raindrop)
    
    drawSprites();
}   
function thunderspawn(){
    var thunderCreatedFrame=frameCount%30
    if (thunderCreatedFrame===0){
        thunder=createSprite(200,0,50,50)
        thunder.scale=0.5
        var ran = Math.round(random(1,4))
        switch (ran){
            case 1: thunder.addImage(thunder1img)
            break
            case 2: thunder.addImage(thunder2img)
            break
            case 3: thunder.addImage(thunder3img)
            break
            case 4: thunder.addImage(thunder4img)
            break
    }
    
}

if(thunderCreatedFrame+10===0 && thunder){ 
    thunder.destroy(); 
}
}
