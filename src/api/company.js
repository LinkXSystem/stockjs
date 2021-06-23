const Axios = require('axios');
const { COMPANY_INFO_LIST } = require('../constants/company');

function getCompanyList() {
    return Axios.request({
        url: COMPANY_INFO_LIST,
        method: 'GET',
    });
}

module.exports = {
    getCompanyList
}