class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(
            `my name is ${this.name}`
        );
    }
    showStats() {
        console.log(
            `${this.name} has a health total of ${this.health} with a strength stat of ${this.strength} and speed stat of ${this.speed}`
        );
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name}\'s health raised to ${this.health}`)
        return this;
    }

}

class Sensi extends Ninja{
    constructor(name){
        super(name)
    this.wisdom = 10;
    }

    speakWisdom() {
        console.log('here is your wisdom.....');
        this.wisdom += 10;
        const wisdom = super.drinkSake();
        return this;
    }

    showWisdom() {
        console.log(`${this.wisdom}, this is how wise ${this.name} is`); return this;
    } 
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().drinkSake();

const sensi = new Sensi("Mister Sensi");
sensi.speakWisdom().showWisdom().speakWisdom();

