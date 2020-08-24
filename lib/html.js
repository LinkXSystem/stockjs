const puppeteer = require('puppeteer');

async function launch(options) {
    const { link, debug } = options;
    const browser = await puppeteer.launch({
        headless: debug && true,
        timeout: 30000,
    });

    const page = await browser.newPage();

    // await browser.close();
}

async function query() {}

async function destructor() {}

module.exports = {
    launch,
};

// launch();
