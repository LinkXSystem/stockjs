const axios = require('axios');
const fs = require('fs');
const path = require('path');

const format = require('./lib/format');

const datasource = 'http://fund.eastmoney.com/api/static/FundCommpanyInfo.js';

async function main() {
    const filename = path.resolve(__dirname, './datasource/company.js');

    axios.get(datasource).then((res) => {
        // 原始格式： 'var r = [];'
        const content = res.data;
        // console.warn(content);

        const cache = content.replace(
            ' var FundCommpanyInfos=',
            'module.exports = '
        );

        fs.writeFileSync(filename, cache);
        format.run(filename).then(() => {
            console.warn('format success !!!');
        });
    });
}

main();
