// NewsManager.tsx
"use client";
import React, { useEffect, useState } from "react";
import AddNewsForm from "./AddNewsForm";
import SearchBar from "./SearchBar";
import NewsList from "./NewsList";

const NewsManager = () => {
    const [newsData, setNewsData] = useState([]);
    const [searchText, setSearchText] = useState("");

    // Функция для получения новостей из API
    const fetchNews = async () => {
        try {
            const response = await fetch('/api/news');
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }
            const data = await response.json();
            setNewsData(data);
        } catch (error) {
            console.error("Failed to fetch news:", error);
        }
    };

    // Используем useEffect для получения новостей при монтировании компонента
    useEffect(() => {
        fetchNews();
    }, []);

    const handleAddNews = (newNews) => {
        setNewsData((prevNews) => [...prevNews, newNews]);
    };

    const handleSearch = (text) => {
        setSearchText(text);
    };

    // Фильтрация новостей по заголовку
    const filteredNews = newsData.filter(news => 
        news.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <div className="shadow-md rounded-lg p-6">
                <AddNewsForm onAddNews={handleAddNews} />
            </div>
            <SearchBar onSearch={handleSearch} />
            <NewsList newsData={filteredNews} />
        </div>
    );
};

export default NewsManager;