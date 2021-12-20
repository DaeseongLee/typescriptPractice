

type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
}

class CoffeeMaker{
    private coffeeBeans = 0;
    private static readonly BEANS_GRAMM_PER_SHOT = 7;

    constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
        if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!!');
        }
        this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
        return {
            shots,
            hasMilk: false,
        }
    }
}

const coffeeMachine = new CoffeeMaker(10);

console.log(coffeeMachine.makeCoffee(2));
