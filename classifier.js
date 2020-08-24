const datasource = require('./datasource/stock');

function main() {
    const keywords = ['医药'];

    let cache = [];

    datasource.forEach((item) => {
        const name = item[2];

        for (let i = 0; i < keywords.length; i++) {
            if (!name.includes(keywords[i])) return;
        }

        cache.push(name);
    });

    console.warn('===========================');
    console.warn(cache);
    console.warn('===========================');
}

main();
