function Mouse(name){
	this.name = name;
	this.dead = false;
}

Mouse.prototype.die = funtion(){
	this.dead = true;
}

module.exports = Mouse;