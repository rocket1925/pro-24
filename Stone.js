class Stone{
	constructor(x,y,)
	{

        var options={
            restitution:0.8,
            friction:3,
            density:30
        
        }
                this.x=x;
                this.y=y;
                this.r=r
                this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
                World.add(world, this.body);
        
            }
            display()
            {
                var stonepos=this.body.position;	
                    push()
                    translate(stonepos.x, ironpos.y);
                    
                    strokeWeight(4);
                    stroke("black");
                    fill("darkblue");
                    rect( 0,0,this.width, this.height);
                    pop();
            }
        
        };