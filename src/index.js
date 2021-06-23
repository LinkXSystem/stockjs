const Stock = require('./core');

async function main() {
    // const company = await Stock.CompanyDataActuator.getCompanyInfoList();
    // console.warn('company', company);

    // const funds = await Stock.FundDataActuator.getFundRankingData({
    //     pn: 50
    // });
    // console.warn(funds);

    const stocks = await Stock.FundDataActuator.getFundStockInfo({
        code: '008764',
    });
    console.warn('stocks', stocks);
}

main();