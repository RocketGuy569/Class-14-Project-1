var student= {
  Name:"Vraj",
  Class:"8F",
  Role:567890,
  FavouriteSubject:"Science",
  marks:[100,99,95,92]
}
console.log(student.Name)
console.log(student.Class)
console.log(student.Role)
console.log(student.FavouriteSubject)
console.log(student.marks)

var ball= {
  x:45,
  y:150,
  r:150,
  speedx:2,
  speedy:-3,
  color:["red","violet","blue","yellow"]
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r);
  fill(ball.color[3])
  ball.x=ball.x+ball.speedx
  ball.y=ball.y+ball.speedy
}