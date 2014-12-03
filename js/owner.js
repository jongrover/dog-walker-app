// Owner Model

function Owner(firstName) {
  this.firstName = firstName;
  this.dogs = [];
  this.id = this.constructor.all.length;
  this.constructor.all.push(this);
}
Owner.all = [];




