type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}


// object
const obj1: PositionType = {
    x: 1,
    y: 1,
}

const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 2,
}

//class 
class Pos1 implements PositionType  {
    x: number;
    y: number;
}

class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
}

//Extends
type ZPositionType = PositionType & { z: number };

interface ZPositionInterface extends PositionInterface {
    z: number;
}


// only interfaces can 
// merged.
interface PositionInterface {
    z: number;
}


// only type can 
// use computed properties
type Person = {
    name: string,
    age: number,
}
type Name = Person['name'];

type UnionType = 'left' | 'right';



//그럼 언제 인터페이스를 쓸까??
// 어떤 특정한 규격을 규정하는 거라면, type 보다는  interface를 사용하자
//ex)
interface CoffeeMaker {
    coffeeBeans: number;
    makeCoffee: (shots: number) => void;
}

class CoffeeMachine implements CoffeeMaker {
    coffeeBeans: number;
    makeCoffee(shots: number) {

    }
}

// Type은 언제 쓸까??
// 데이터를 담을 목적으로 사용할 때 타입을 쓴다
type Position = {
    x: number;
    y: number;
}

const pos: Position = { x: 0, y: 0 };