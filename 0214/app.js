// const puppeteer = require("puppeteer");

// const main = async() => {
//     const browser = await puppeteer.launch({
//         headless: "new",
//     });
//     const page = await browser.newPage();

//     await page.goto("https://loy124.github.io/vue-movie/");
//     await page.waitForSelector(".movie-card img.img-fluid");
//     const data = await page.evaluate(()=>{
//         const movieLists = document.querySelectorAll("div.movie-title");
//         const titles = Array.from(movieLists).map(li => li.textContent);
        
//         const images = document.querySelectorAll(".movie-card img.img-fluid");
//         const imageSrcs = Array.from(images).map(li=>li.getAttribute('src'));

//         const parsedContents = titles.map((title, idx)=> {
//             return {
//                 title : title,
//                 imageSrc : imageSrcs[idx],
//             };
//         })
//         return parsedContents;
//     }
//     console.log(data);
//     await browser.close();
// }
// main();