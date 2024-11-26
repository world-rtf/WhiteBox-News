// pages/api/news.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/db'; // Убедитесь, что путь к вашему prisma клиенту правильный

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { title, date, text, image } = req.body;

        try {
            const newNews = await prisma.news.create({
                data: {
                    title,
                    date: new Date(date), // Убедитесь, что это корректная дата
                    text,
                    image,
                },
            });
            res.status(201).json(newNews); // Возвращаем созданную новость
        } catch (error) {
            console.error("Database Error", error);
            res.status(500).json({ error: "Failed to add news." });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}