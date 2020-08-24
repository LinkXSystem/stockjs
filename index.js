const axios = require('axios');
const fs = require('fs');
const path = require('path');

const format = require('./lib/format');

const datasource = 'http://fund.eastmoney.com/js/fundcode_search.js';

async function main() {
    const filename = path.resolve(__dirname, 'stock.js');
    const jsonname = path.resolve(__dirname, 'stock.json');

    axios.get(datasource).then((res) => {
        // 原始格式： 'var r = [];'
        const content = res.data;
        const cache = content.replace('var r', 'module.exports');
        fs.writeFileSync(filename, cache);

        // 动态加载 js 文件
        const data = require('./stock');

        const map = {};

        data.forEach((item) => {
            map[item[0]] = {
                code: item[0],
                name: item[2],
                type: item[3],
            };
        });

        fs.writeFileSync(jsonname, JSON.stringify(map));

        format.run(jsonname).then(() => {
            console.warn('format success !!!');
        });
        format.run(filename).then(() => {
            console.warn('format success !!!');
        });
    });
}

main();
