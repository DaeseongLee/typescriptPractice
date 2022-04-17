{
    type Video = {
        title: string;
        author: string;
    };

    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    // }

    // type VideoReadOnly = {
    //     readonly title: string;
    //     readonly author: string;
    // }

    type Optional<T> = {
        [P in keyof T]?: T[P]
    }

    type VideoOptional = Optional<Video>;
    const videoOp: VideoOptional = {
        title: 'a'
    }


    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    }

    const video: ReadOnly<Video> = {
        title: 'aa',
        author: '',
    }

    type Nullable<T> = { [P in keyof T]: T[P] | null };

    const obj3: Nullable<Video> = {
        title: 'hi',
        author: null
    }

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>;
    }
}