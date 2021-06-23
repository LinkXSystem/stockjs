const VM = require('vm');

const CompanyApiRequester = require('../api/company');

function getCompanyInfoList() {
    return CompanyApiRequester.getCompanyList().then((res) => {
        const _content = res.data;
        const _script = new VM.Script(_content);

        const _context = VM.createContext();

        _script.runInContext(_context);

        // TODO: 注意，Commpany 是拼写错误的
        return _context.FundCommpanyInfos || [];
    }).catch((error) => {
        throw error;
    });
}

/**
 * 
 * @param {*} company_id 基金公司编号
 */
function getCompanyInfo(company_id) {
    return {
        id: company_id
    }
}


module.exports = {
    getCompanyInfoList,
    getCompanyInfo
}