let list = [];


function preload(){
    list = loadJSON("data.json");
    
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textAlign("center");
  textSize(24);
  text("Canada's Exports", 200, 40);

  Object.values(list).map((item, index) => {
    rect(50, index * 30 + 70, item.amount, 10);
    textSize(12);
    textAlign("left");
    text(item.name, 50, index * 30 + 65);
  });

}

