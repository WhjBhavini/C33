class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visible=255
  }

display(){
  if(this.body.speed<2.5){
  super.display()}
  else{
    World.remove(world,this.body)
    this.visible=this.visible-5
    push()
    tint(255,this.visible)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop()
  }
  console.log(this.body.speed)
}
score(){
  if(this.visible<0 && this.visible>=-1000){
    score=score+1;
  }
}
};