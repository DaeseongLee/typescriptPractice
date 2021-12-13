{
    //Array
    const fruits: string[] = ['apple', 'banana'];
    const scores: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string []) {
    }

    // Tuple => 사용하는 것을 추천하지 않음.
    let student: [string, number];
    student = ['name', 123];
    student[0] //name
    student[1] //123
    // => student[0]이 뭘 나타내는 지 알수가 없음. 가독성이 안좋음. interface, type alias, class를 사용하는 것이 좋음. ex) student.name, student.age

}