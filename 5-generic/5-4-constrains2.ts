{
    const obj = {
        name: 'lee',
        age: 20
    }

    const obj2 = {
        animal: 'dog'
    }

    console.log(getValue(obj, 'name'));
    console.log(getValue(obj, 'age'));
    console.log(getValue(obj2, 'animal'));
    
    function getValue<T, K extends keyof T>(obj: T, k: K): T[K]{
        return obj[k];
    }
}