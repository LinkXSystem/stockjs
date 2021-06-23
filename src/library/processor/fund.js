const Cheerio = require('cheerio');

const Common = require('./common');

/**
 * 
 * @param {string} data 
 */
function handleFundRankDataToModel(data) {
    const _data = data.split(',');

    return {
        uuid: _data[0],
        name: _data[1],
        code: _data[2],
        date: _data[3],
        net_unit_value:       _data[4],
        cumulative_net_value: _data[5],
        Daily_growth_rate: Common.handleDataToStandardUnit(_data[ 6]),
        last_week:         Common.handleDataToStandardUnit(_data[ 7]),
        last_month:        Common.handleDataToStandardUnit(_data[ 8]),
        last_three_month:  Common.handleDataToStandardUnit(_data[ 9]),
        last_six_month:    Common.handleDataToStandardUnit(_data[10]),
        last_year:         Common.handleDataToStandardUnit(_data[11]),
        last_two_year:     Common.handleDataToStandardUnit(_data[12]),
        last_three_year:   Common.handleDataToStandardUnit(_data[13]),
        this_year:         Common.handleDataToStandardUnit(_data[14]),
        since:             Common.handleDataToStandardUnit(_data[15]),
    }
}

/**
 * 
 * @param {string} content 
 */
function handleFundStockDataToList(content) {
    const $ = Cheerio.load(content);

    const stocks = $('.box tbody tr');

    let _stocks = [];

    for(let i = 0; i < stocks.length; i++) {
        const { children } = stocks[i];

        // 股票代码
        const code  = children[1].children[0].children[0].data;
        // 股票名称
        const name  = children[2].children[0].children[0].data;
        // 占净值
        const rate  = children[6].children[0].data;
        // 持股数（万股）
        const held  = children[7].children[0].data;
        // 持仓市值（万元）
        const value = children[8].children[0].data;

        _stocks.push({
            code,
            name,
            rate,
            held,
            value
        });
    }

    return _stocks;
}

module.exports = {
    handleFundRankDataToModel,
    handleFundStockDataToList
}