{
    //Type Assertions
    //1
    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();
    console.log((result as string).length); // result의 타입을 강제 지정 (assertion)

    //2
    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); //에러발생

    //3
    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers()!; //! 강제 정의
    numbers.push(2);
}