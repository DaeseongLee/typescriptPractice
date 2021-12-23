
{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachineImpl implements CoffeeMaker{
        private coffeeBeans = 0;
        private static readonly BEANS_GRAMM_PER_SHOT = 7;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachineImpl.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!!');
            }
            this.coffeeBeans -= shots * CoffeeMachineImpl.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up ...');
        }

        private extract(shots: number): CoffeeCup {
            return {
                shots,
                hasMilk: false,
            }
        }
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

        clean() {
            console.log('clean!!!!');
        }
    }

    class CheapMinkSteamer {
        private steamMilk(): void {
            console.log('Steaming some milk');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup{
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class AutomaticSugarMixer {
        private getSugar() {
            console.log('Getting some sugar');
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: true,
            }
        }
    }

    class CaffeLateeMachine extends CoffeeMachineImpl {
        constructor(beans:number, public readonly serialNumber : string, private milkFrother: CheapMinkSteamer) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFrother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachineImpl {
        constructor(private beans: number, private sugar: AutomaticSugarMixer) {
            super(beans);
        }
        makeCoffee(shots:number):CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);

        };
    }

    class SweetCaffeLatteMachine extends CoffeeMachineImpl {
        constructor(private beans: number, private sugar:AutomaticSugarMixer, private milk: CheapMinkSteamer) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            let coffee = super.makeCoffee(shots);
            coffee = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(coffee);
        }
    }
    const sugar = new AutomaticSugarMixer();
    const milk = new CheapMinkSteamer();
    const sweetCaffeLatte = new SweetCaffeLatteMachine(20, sugar, milk);
    console.log(sweetCaffeLatte.makeCoffee(2))
}