class Bricks {
    constructor(){
        
        this.body=Bodies.rectangle(750,550,75,50);
        World.add(world,this.body);
        
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,75,50);
    }
    move(){
        this.body.velocity.x=-1;
    }
}