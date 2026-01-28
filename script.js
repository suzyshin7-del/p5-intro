let list = [];


function preload(){
    list = loadJSON("data.json");
    
}


function setup() {
  createCanvas(400, 650);
}

function draw() {
  background(220);
  textAlign("center");
  textSize(24);
  text("Canada's Exports", 200, 40);



  Object.values(list).map((item, index) => {
    fill(item.color);
    rect(50, index * 30 + 70, item.amount / 180 * 300, 10);
    textSize(10);
    textAlign("left");
    fill("black");
    text(item.name, 50, index * 30 + 65);

    textSize(20);
    textAlign("right");
    text(item.icon, 45, index * 30 + 75);
  });

}

