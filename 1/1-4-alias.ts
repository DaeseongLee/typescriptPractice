{
    // Type
    type Text = string;
    const name: Text = 'lee';
    const address: Text = 'korea';

    type Num = number;

    type Student = {
        name: string;
        age: number;
    }

    const student: Student = {
        name: 'lee',
        age: 12,
    }

    // String Literal Type
    type Name = 'name';
    let elieName: Name;
    elieName = 'name';

    type Bool = true;
    const isCat: Bool = true;
    
    //이걸 왜 쓰는 거야???1
}