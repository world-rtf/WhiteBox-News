// app/api/news/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/app/lib/db'; // Импортируйте ваш PrismaClient

export async function GET() {
    try {
        const news = await prisma.news.findMany();
        return NextResponse.json(news);
    } catch (error) {
        console.error("Database Error", error);
        return NextResponse.json({ error: "Failed to fetch news." }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const { title, date, text, image } = await request.json();

    try {
        const newNews = await prisma.news.create({
            data: {
                title,
                date: new Date(date), // Убедитесь, что это корректная дата
                text,
                image,
            },
        });
        return NextResponse.json(newNews, { status: 201 });
    } catch (error) {
        console.error("Database Error", error);
        return NextResponse.json({ error: "Failed to add news." }, { status: 500 });
    }
}