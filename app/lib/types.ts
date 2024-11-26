// types.ts
export interface News {
    title: string;
    image: string | null;
    text: string;
    id: number;
    date: Date;
}

export interface NewsListProps {
    newsData: News[]; 
    initialNews: News[]; 
}
