{
    //Type Assertions
    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();
    console.log((result as string).length); // result의 타입을 강제 지정 (assertion)

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1));
}