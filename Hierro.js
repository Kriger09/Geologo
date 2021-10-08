class Hierro {
	constructor(x,y,r){
	var options = {
		'restitutions':0.8,
		'friction':0.9,
		'density':12
	}

    this.body = Bodies.rectangle(x, y, 100, 100, options);
    this.width = 100;
    this.height = 100;
    World.add(world, this.body);
	}
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black");
        strokeWeight(4);
        fill("black");
        rect(0, 0, this.width, this.height);
        pop();
      }

};