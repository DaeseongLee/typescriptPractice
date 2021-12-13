{
    let name: undefined;
    let age: number | undefined;
    age = 1;

    //null
    let person: null;
    let person2: string | null;

    //unknown => 쓰지 않는게 좋다.
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    //any => 쓰지 않는게 좋다.
    let anything: any = 0;
    anything = 'hello';

    //void
    function print():void {
        console.log('hello');
    }

    //never => 함수에서 절대 return되지 않는 것을 명시
    // function a(message: string): never {
    //     throw new Error(message);
    //     //2. while(true) {}
    // }

    //object => 쓰지 않는 것이 좋다. object는 너무 추상적 (배열이 올 수 도있고, 보통 Object도 올수 있다.)
    // let obj: object;
    // function acceptSomeObj(obj: object) {

    // }
    
}