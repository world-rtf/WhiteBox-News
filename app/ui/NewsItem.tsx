import React from 'react';
import Link from 'next/link';

// БЛОК НОВОСТЕЙ
const NewsItem = ({ news }) => {
    return (
        <Link href={`/news/${news.id}`}>
            <div className="rounded-lg border shadow-md p-4 ">
                <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
                <p className="text-gray-500 mb-2">{new Date(news.date).toLocaleDateString()}</p>
                <p className="text-gray-700">{news.text.slice(0, 200)}{news.text.length > 200 && '...'}</p>
            </div>
        </Link>
    );
};

export default NewsItem;