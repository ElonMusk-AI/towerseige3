class Box {
    constructor(x, y) {
      var options = {
          restitution:0.05,
          friction:1,
          density:1
      }
      this.Visibility = 225;
      this.body = Bodies.rectangle(x, y, 40, 50, options);
      World.add(world, this.body);
    }
    score(){
      if (this.Visibility<0 && this.Visibility<-105){
        score = score+1;
      }
      
    }
    display(){
      if (this.body.speed < 3){
      var pos = this.body.position;
      push();
      rectMode(CENTER);
      fill(216, 156, 167);
      rect(pos.x, pos.y, 40, 50);
      pop();
      }else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        pop();
      }
    }
  };