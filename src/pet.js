function Pet(name) {
    this.name = name;
    this.age = 0;
    this.growUp = function () {
        this.age += 1;
        this.hunger += 5;
    }
    this.hunger = 0;
}
module.exports = Pet;