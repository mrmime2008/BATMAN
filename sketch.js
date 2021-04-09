const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var umbrellaImg;
var drops = [];
var maxDrop = 150;
var dude;

function preload(){
    image1 = loadImage("Walking Frame/walking_1.png");
}

function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    

    for(var i = 0; i < maxDrop; i++){
        drops.push(new Drop(random(0,800),random(0,470)));
    }

    dude = new Umbrella(400,333);

}

function draw(){
    Engine.update(engine);
    rectMode(CENTER);
    background("black");
    
    for(var i = 0; i < maxDrop; i++){
        drops[i].display();
        drops[i].update();
    }    

    dude.display();
}   

