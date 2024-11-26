import prisma from "./db";
import { unstable_noStore as noStore } from 'next/cache';

// Define the type for the news parameters
type NewsParams = {
    title: string;
    date: Date;
    text: string;
    image?: string;
};

export async function getAllNews() {
    noStore();
    try {
        const data = await prisma.news.findMany();
        return data;
    } catch (error) {
        console.error("Database Error", error);
        throw new Error("Failed to fetch news data.");
    }
}

export async function addNews(params: NewsParams) {
    noStore();
    try {
        const { title, date, text, image } = params;

        const newNews = await prisma.news.create({
            data: {
                title,
                date,
                text,
                image,
            },
        });

        return newNews; // Return the newly created news entry
    } catch (error) {
        console.error("Database Error", error);
        throw new Error("Failed to add news.");
    }
}