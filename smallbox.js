class SmallBox {
    constructor(x, y) {
      var options = {
          restitution:0.05,
          friction:1,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y, 40, 50, options);
      World.add(world, this.body);
    }
    score(){
      if (this.visibility<0 && this.visibility<-105){
        score = score+1;
      }
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill(164, 173, 242);
      rect(pos.x, pos.y, 40, 50);
      pop();
    }
  };