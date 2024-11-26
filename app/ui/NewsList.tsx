import React from 'react';
import NewsItem from './NewsItem';
import { NewsListProps } from '@/app/lib/types';

const NewsList: React.FC<NewsListProps> = ({ newsData }) => {
    return (
        <div className="max-h-[450px] overflow-y-auto p-4 border  rounded-lg shadow-md">
            <div className="flex flex-col gap-4">
                {newsData.map((news) => (
                    <NewsItem key={news.id} news={news} />
                ))}
            </div>
        </div>
    );
};

export default NewsList;