const Axios = require('axios');
const { FUND_RANK_API, FUND_STOCK_API } = require('../constants/fund');

function getFundRankingData(query) {
    let _query = query || {};

    _query = Object.assign({
        op: 'ph',
        dt: 'kf',
        ft: 'all',
        rs: '',
        gs: 0,
        // TODO: 控制排序的条件，rzdf 为 日增长率
        sc: 'rzdf',
        st: 'desc',
        sd: '2020-06-05',
        ed: '2021-06-05',
        qdii: '',
        tabSubtype: ',,,,,',
        // TODO: 分页 page_num
        pi: 1,
        // TODO: 分页 page_size
        pn: 50,
        dx: 1
    }, _query);

    return Axios.request({
        url: FUND_RANK_API,
        method: 'GET',
        headers: {
            Referer: 'http://fund.eastmoney.com/data/fundranking.html'
        },
        params: {
            ..._query
        }
    })
}

function getFundInfo(query) {
    return Promise.resolve();
}

function getFundStockInfo(query) {
    let _query = query || {};

    _query = Object.assign({
        type: 'jjcc',
        topline: 20,
    }, _query);


    return Axios.request({
        url: FUND_STOCK_API,
        method: 'GET',
        params: {
            ..._query
        }
    });
}

module.exports = {
    getFundRankingData,
    getFundInfo,
    getFundStockInfo
}