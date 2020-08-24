const puppeteer = require('puppeteer');

async function launch(options) {
    const { link, debug } = options;
    const browser = await puppeteer.launch({
        headless: debug && true,
        timeout: 30000,
    });

    const page = await browser.newPage();

    await page.goto(link);

    const data = await page.evaluate(() => {
        const nodes = document
            .querySelector('.ui-table-hover')
            .querySelectorAll('tr');

        let cache = [];

        for (let i = 1; i < nodes.length; i++) {
            const ths = !Boolean(i)
                ? nodes[i].querySelectorAll('th')
                : nodes[i].querySelectorAll('td');

            const target = ths[0].querySelector('a');
            let code;

            if (target) {
                code = target.getAttribute('href').split('/');
                code = code[code.length - 1].split('.')[0];
            }

            cache.push({
                name: ths[0].textContent.trim(),
                code,
                percentage: ths[1].textContent.trim(),
                quote: ths[2].textContent.trim(),
            });

            // for (let j = 0; j < ths.length - 1; j++) {
            //     cache.push(ths[j].textContent.trim());
            // }
        }

        return cache;
    });

    await browser.close();

    return data;
}

async function query() {}

async function destructor() {}

module.exports = {
    launch,
};
