class Bob {
constructor(x,y,r){
var options = {
    friction:0.5,
    restitution:0.4,
    density:1.6,
}

this.body = Bodies.circle(x,y,r,options)
this.r = r
World.add(world,this.body)

}
display(){
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,this.r,this.r)



}




}