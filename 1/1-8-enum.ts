{
    //Enum

    //Javascript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2, })
    const dayOfToday = DAYS_ENUM.MONDAY;

    //TypeScript
    enum Days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }

    console.log(Days.Tuesday);
    console.log(Days.Saturday);

    //but, Typescript에서는 enum을 가능한한 쓰지 않는 게 좋다.
    let day: Days = Days.Saturday;
    day = Days.Tuesday;
    day = 10; //enum을 타입으로 지정하면 다른 숫자를 넣어도, 에러가 나지 않는다. 타입을 정확히 보장할 수 없다.

    //그렇기 때문에, enum보다는 UNION Type을 사용하자.
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    let dayOfweek: DaysOfWeek = 'Monday';

    //상수를 지정할 떄는 class로 만들어주자. 상수만 사용하고 인스턴스는 사용할 필요가 없기 때문에 추상클래스로 만들어준다.
    abstract class AppConfig {
        static readonly Monday = 0;
        static readonly Tuesday = 1;
    }
    AppConfig.Monday;
}