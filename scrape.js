import axios from 'axios';
import cherrio from 'cheerio';

async function getHTML(productURL) {
    const { data: html } = await  axios.get(productURL, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36'
        }
    })
        .catch(function (error) {
            console.log(error);
        });
    return html;
}

async function getAmazonPrice(html) {
    const $ = cherrio.load(html);

    const span = $('#priceblock_dealprice');

        // console.log(span.html());
      return span.html();
         // return "78,000";
}


async function getAmazonModel(html) {
    const $ = cherrio.load(html);

    const span = $('#productTitle');
    // console.log("Logging the Product Title " + span);
     return "asus";
      // return span.html();
}

export { getHTML, getAmazonPrice,getAmazonModel };