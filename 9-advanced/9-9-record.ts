type PageInfo = {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo>  = {
    contact: { title: '' },
    about: { title: 'cc' },
    home: {title: 'dd'},
}