import robotstxt from "generate-robotstxt";

// Define the base path for your routes (change this if it's dynamic or defined elsewhere)
//const base = ''; // Set your base path. For example, '/' or '/my-app'

// Define the admin routes
const AdminRoutes = [
    `/dashboard`,
    `/stat`,
    `/create`,
    `/posts`,
];

// Асинхронный импорт модуля fs
import('fs').then(fs => {
  robotstxt({
      policy: [
        {
          userAgent: "*",
          disallow: [
            ...AdminRoutes, // Spread the admin routes to disallow them
            "/cgi-bin/",
            "/wp-admin/",
            "/?s=", // Disallow search pages
            "/login/",
            "/profile/",
            "/shoppingcart/",
          ],
          allow: [
            "/*.js", // Allow JS files
            "/*.css", // Allow CSS files
            "/*.png", // Allow PNG images
            "/*.jpg", // Allow JPG images
            "/*.jpeg", // Allow JPEG images
            "/*.gif", // Allow GIF images
          ],
          crawlDelay: 2,
        },
      ],
      sitemap: "https://nekhaynikita.shop/sitemap.xml", // Укажите правильный URL к вашему sitemap
      host: "https://nekhaynikita.shop", // Укажите основной домен вашего сайта
    })
    .then((content) => {
      console.log(content);
      fs.writeFileSync('../../static/robots.txt', content);
      return content;
    })
    .catch((error) => {
      throw error;
    });
});
