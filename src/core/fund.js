const VM = require('vm');
const FundApiRequester = require('../api/fund');

const Processor = require('../library/processor');

function getFundRankingData(query) {
    return FundApiRequester.getFundRankingData(query).then(res => {
        const _content = res.data;
        const _script = new VM.Script(_content);

        const _context = VM.createContext();

        _script.runInContext(_context);

        const _rank = _context.rankData;
        const _data = _rank.datas.map(item => Processor.Fund.handleFundRankDataToModel(item));

        return {
            data: _data,
            total: _rank.allRecords,
            page_num: _rank.pageIndex,
            page_size: _rank.pageNum,
        }
    }).catch((error) => {
        throw error;
    });
}

function getFundStockInfo(query) {
    return FundApiRequester.getFundStockInfo(query).then(res => {
        const _content = res.data;
        const _script = new VM.Script(_content);

        const _context = VM.createContext();

        _script.runInContext(_context);

        const { content } = _context.apidata;

        const data = Processor.Fund.handleFundStockDataToList(content);
        console.warn('data', data);

        return [];
    }).catch(error => {
        throw error;
    })
}

module.exports = {
    getFundRankingData,
    getFundStockInfo
}