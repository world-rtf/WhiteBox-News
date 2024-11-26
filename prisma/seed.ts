// import { PrismaClient } from '@prisma/client'
import prisma from '../app/lib/db'


// const prisma = new PrismaClient()


async function main() {
    const newsData = [
      {
        title: 'Первая новость',
        date: new Date('2024-01-01'),
        text: 'Это текст второй новости.',
        image: 'image1.jpg',
      },
      {
        title: 'Вторая новость',
        date: new Date('2023-01-01'),
        text: 'Это текст второй новости.',
        image: 'image2.jpg',
      },
      {
        title: 'Третья новость',
        date: new Date('2023-01-01'),
        text: 'Это текст третьей новости.',
        image: null,
      },
    ];

    for (const newsItem of newsData) {
        await prisma.news.create({
          data: newsItem,
        });
      }
    
      console.log('Данные успешно добавлены в базу данных');
    }


main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })