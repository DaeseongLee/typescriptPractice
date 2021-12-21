
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;

    }

    class CoffeeMachine implements CoffeeMaker{
        private coffeeBeans = 0;
        private static readonly BEANS_GRAMM_PER_SHOT = 7;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
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
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    const coffeeMachine:CoffeeMachine = new CoffeeMachine(50);
    coffeeMachine.makeCoffee(2);
    coffeeMachine.fillCoffeeBeans;

    const coffeeMachine2: CoffeeMaker = new CoffeeMachine(50);
    coffeeMachine2.makeCoffee(2);
    //coffeeMachine2.fillCoffeeBeans; //interface CoffeeMaker에는 fillCoffeeBeans라는 함수가 없기 때문에 에러발생
}