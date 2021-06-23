# 基金公司的数据处理

## 前置数据

- 基金公司的总体信息

http://fund.eastmoney.com/api/static/FundCommpanyInfo.js

## 基金公司

- 详细信息

http://fund.eastmoney.com/Company/80163340.html

- 资金规模变动
  - http://fund.eastmoney.com/Company/home/GetGmbdChart?gsid=80175511&fundType=27
    - 所在页面：http://fund.eastmoney.com/Company/80175511.html
    - 请求方式：XHR
    - 响应数据格式：json
    - 参数：
      - gsid：公司编号
      - fundType：基金类型
        - 00 全部
        - 25 股票型
        - 27 混合型
        - 31 债券型
        - 35 货币型

- 收益与规模
  - http://fund.eastmoney.com/Company/home/GetSygmChart?gsid=80175511&fundType=25
    - 所在页面：http://fund.eastmoney.com/Company/80175511.html
    - 请求方式：XHR
    - 响应数据格式：json
    - 参数：
      - gsid：公司编号
      - fundType：基金类型
        - 00 全部
        - 25 股票型
        - 27 混合型
        - 31 债券型
        - 35 货币型

- 行业配置
  - http://fund.eastmoney.com/Company/home/GetHypzChart?gsid=80175511&fundType=0
    - 所在页面：http://fund.eastmoney.com/Company/80175511.html
    - 请求方式：XHR
    - 响应数据格式：json
    - 参数：
      - gsid：公司编号
      - fundType：基金类型
        - 00 全部
        - 25 股票型
        - 27 混合型
        - 31 债券型
        - 35 货币型

- 股票持仓
  - http://fund.eastmoney.com/Company/home/gpcc?gsid=80175511&fundType=0
    - 所在页面：http://fund.eastmoney.com/Company/80175511.html
    - 请求方式：XHR
    - 响应数据格式：html
    - 参数：
      - gsid：公司编号
      - fundType：基金类型
        - 0 全部
        - 1 股票型
        - 2 混合型
        - 3 债券型

- 开放式基金
  - http://fund.eastmoney.com/Company/home/KFSFundNet?gsid=80175511&fundType=001
    - 所在页面：http://fund.eastmoney.com/Company/80175511.html
    - 请求方式：XHR
    - 响应数据格式：html
    - 参数：
      - gsid：公司编号
      - fundType：基金类型
        - 000 全部
        - 001 股票型
        - 002 混合型
        - 003 债券型
