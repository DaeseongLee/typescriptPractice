/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

type Command = 'add'| 'substract' | 'multiply' | 'divide' | 'remainder'

// class Calculate {
//     private command : Command;
//     private num1 : number;
//     private num2 : number;
//     constructor(command: Command, num1: number, num2: number) {
//         this.command = command;
//         this.num1 = num1;
//         this.num2 = num2;
//     }
// }

function calculate(command: Command, num1: number, num2: number): number {
    switch (command) {
        case 'add': return num1 + num2;
        case 'substract': return num1 - num2;
        case 'multiply': return num1 * num2;
        case 'divide': return num1 / num2;
        case 'remainder': return num1 % num2;
        default: throw new Error('unknown Error');
    }
}