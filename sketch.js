var database
var dog,sadDog,happyDog;
var food
var feed, add
var foodObj


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milkImg=loadImage("Images/Milk.png");
}

function setup() {
  database = firebase.database ()
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food (200,200)

  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95)
  addFood.mousePressed(addFoods);

}

function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
}

function addFoods(){
  //food=foodObj.getFoodStock()+1;
  food++
  database.ref('/').update({
    Food:food
  })
}

function draw() {
  background(0);
  drawSprites();
  foodObj.display();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
