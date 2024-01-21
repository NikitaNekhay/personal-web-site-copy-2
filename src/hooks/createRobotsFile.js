import robotstxt from "generate-robotstxt";

// Асинхронный импорт модуля fs
import('fs').then(fs => {
  robotstxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: [],
          crawlDelay: 2,
        },
        // ... (если у вас есть специфические правила для других ботов, их можно оставить здесь)
      ],
      sitemap: "http://nekhaynikita.shop/sitemap.xml", // Укажите правильный URL к вашему sitemap
      host: "http://nekhaynikita.shop", // Укажите основной домен вашего сайта
    })
    .then((content) => {
      console.log(content);
      fs.writeFileSync('../routes/robots.txt', content);
      return content;
    })
    .catch((error) => {
      throw error;
    });
});
