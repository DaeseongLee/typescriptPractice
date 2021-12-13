{
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // function add(num1: number, num2: number): number{
    //     return num1 + num2;
    // }
    // add(1, 2);

    // function jsFetchNum(id:string):Promise<number> {
    //     //code...

    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }
    // jsFetchNum("s").then((r) => console.log(r))


    //JavaScript =>TypeScript
    //Optional parameter
    function printName(firstName?: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('lee', 'jane');
    printName('dae', undefined);

    //Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    //Rest parameter

    function addNumbers(...num: number[]): number {
        let n = 0
        num.forEach(num => n = num + n);
        return n;
    }
    console.log(addNumbers(1, 2))
    console.log(addNumbers(1, 2, 3, 4))
    console.log(addNumbers(1,2,3,4,5,6))
}