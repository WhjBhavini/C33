class Bird extends BaseClass {
  constructor(x,y,a){
if(a===1){
    super(x,y,50,50);}
    if(a===2){
      super(x,y,60,60);} 
    
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png")
    this.trajectory=[]
  }


  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    
    if(this.body.velocity.x>10 && this.body.position.x>200){
    
    var pos=[this.body.position.x,this.body.position.y]
    this.trajectory.push(pos)
    }
    for(var p=0;p<this.trajectory.length;p=p+1){
      image (this.smokeImage,this.trajectory[p][0],this.trajectory[p][1])
    }
  }
}
