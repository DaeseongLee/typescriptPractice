
{
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

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
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
    coffeeMachine.fillCoffeeBeans(50);
    console.log(coffeeMachine.makeCoffee(2));

    class User {
        private internalAge = 4;
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        get age(): number {
            return this.internalAge;
        }

        set age(num: number) {
            if(num > 0){
                this.internalAge = num;
            }
        }
        constructor(private firstName: string,  private lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    const user = new User('Steve', 'Jobs');
    console.log(user.fullName);
    user.age = 6
    console.log(user.age);
}