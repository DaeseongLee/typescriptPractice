console.log(this); //window

function simpleFunc() {
    console.log(this);
}

simpleFunc();


class Counter {
    count = 0;
    increase = function () {
        console.log(this);
    }
}

const counter = new Counter();

counter.increase(); 
const caller = counter.increase; //const, let으로 변수를 선언하면  window에 할당되어 있지 않음.
caller(); //undefined;


class Bob { }
const bob = new Bob();
bob.run = counter.increase;
bob.run();