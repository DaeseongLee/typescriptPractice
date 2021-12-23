
{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        sugar?: boolean;
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

    class CaffeLateeMachine extends CoffeeMachineImpl {
        constructor(beans:number, public readonly serialNumber : string) {
            super(beans);
        }
        private steamMilk(): void {
            console.log('Steaming some milk');
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachineImpl {
        makeCoffee(shots:number):CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.addSugar(coffee);

        }
        addSugar(coffee:CoffeeCup): CoffeeCup {
            console.log('Add sugar');
            return {
                ...coffee,
                sugar:true,
            }
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeMachineImpl(16),
        new CaffeLateeMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CoffeeMachineImpl(16),
        new CaffeLateeMachine(16, '1'),
        new SweetCoffeeMaker(16)
    ]

    machines.forEach(coffeeMachin => {
        console.log('----------------------')
        coffeeMachin.makeCoffee(1);
    })
}