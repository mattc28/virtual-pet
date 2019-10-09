const MAXIMUM_FITNESS = 10;
let aliveDetector = true;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
  }
  Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  };
  
  Pet.prototype.growUp = function() {
    if (!this.isAlive) {
      aliveDetector = false;
      throw new Error('Your pet is no longer alive :(');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -=3;

  };
  
  Pet.prototype.walk = function() {
    if (!this.isAlive) {
      aliveDetector = false;
      throw new Error('Your pet is no longer alive :(');
    }
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
      this.fitness += 4;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }
  };
  
  Pet.prototype.feed = function() {
    if (!this.isAlive) {
      aliveDetector = false;
      throw new Error('Your pet is no longer alive :(');
    }
    if(this.hunger>0){
      this.hunger -=3;
      if(this.hunger<0){
        this.hunger = 0;
      }
    }
  };

  Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
      aliveDetector = false;
      throw new Error('Your pet is no longer alive :(');
    }
    if(this.fitness<=3 && this.hunger>=5){
      console.log('I am hungry AND I need a walk');
    }
    else if(this.fitness<=3){
      console.log('I need a walk');
    }
    else if(this.hunger>=5){
      console.log('I am hungry');
    }
    else {
      console.log('I feel great!');
    }
  };