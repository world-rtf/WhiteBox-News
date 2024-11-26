import React, { useState } from "react";

const AddNewsForm = ({ onAddNews }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/news', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    text,
                    date,
                    image,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to add news');
            }

            const newNews = await response.json();
            onAddNews(newNews);

            // Очистите поля формы
            setTitle("");
            setText("");
            setDate("");
            setImage("");
        } catch (error) {
            console.error("Failed to add news:", error);
        }
    };

    // Функция для очистки формы
    const handleClear = () => {
        setTitle("");
        setText("");
        setDate("");
        setImage("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="border p-2 rounded w-full "
                />
                <textarea
                    placeholder="New text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    className="border p-2 rounded w-full"
                    rows={4}
                />
                <input
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="border p-2 rounded w-full"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="border b p-2 rounded w-full"
                />
                <div className="flex justify-end space-x-2">
                    <button
                        type="button"
                        onClick={handleClear}
                        className="border  text-gray-700 bg-transparent p-2 rounded"
                    >
                        CLEAR
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        ADD
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddNewsForm;