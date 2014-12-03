// Dog Model

function Dog(firstName, owner) {
  //unique information for each dog
  this.firstName = firstName;
  this.id = this.constructor.all.length;
  this.constructor.all.push(this);
  this.owner = owner;
  this.owner.dogs.push(this);
}
// all dogs do the same thing
Dog.prototype.bark = function() {
  return this.firstName+" says woof!";
};
Dog.all = [];
