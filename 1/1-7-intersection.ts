{
    //Intersection Types: AND

    type Student = {
        name: string;
        score: number;
    }

    type Workder = {
        employeeId: number;
        work: () => void;    
    }

    function internWork(person: Student & Workder) {
        console.log(person.name, person.employeeId, person.work());
    }

    internWork({
        name: 'lee',
        score: 12,
        employeeId: 1,
        work: () => console.log("아아아"),
    })
}