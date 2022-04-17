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