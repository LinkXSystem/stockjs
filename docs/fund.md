# 基金公司的数据处理

## 前置数据

- 开发基金排行
  - http://fund.eastmoney.com/data/rankhandler.aspx?op=ph&dt=kf&ft=all&rs=&gs=0&sc=6yzf&st=desc&sd=2020-06-05&ed=2021-06-05&qdii=&tabSubtype=,,,,,&pi=1&pn=50&dx=1&v=0.12046797812033261
    - 所在页面：http://fund.eastmoney.com/data/fundranking.html
    - 参考项目：https://github.com/weibycn/fund
    - 请求方式：XHR
    - 响应数据格式：javascript
    - 参数：
      - ft：基金类型
        - all 全部
      - st：排序

- 持仓股票
  - http://fundf10.eastmoney.com/FundArchivesDatas.aspx?type=jjcc&code=002168&topline=10&year=&month=3&rt=0.9119322856018974
    - 所在页面：http://fundf10.eastmoney.com/ccmx_002168.html
    - 请求方式：JSONP
    - 响应数据格式：javascript
    - 参数：
      - type：类型
      - code：基金编号
      - topline：前 n 项股票

- 累计收益率走势
  - http://fund.eastmoney.com/data/FundPicData.aspx?bzdm=002168&n=0&dt=year&vname=ljsylSVG_PicData&r=0.4915919855183186
    - 所在页面：http://fundf10.eastmoney.com/jdzf_002168.html
    - 请求方式：JSONP
    - 响应数据格式：javascript
    - 参数：
      - bzdm：基金编号
      - dt：时间段
        - month
        - threemonth
        - sixmonth
        - year
        - threeyear
        - fiveyear
        - thisyear
        - all 最大
      - vname：ljsylSVG_PicData

- 同类基金排名走势
  - http://fund.eastmoney.com/data/FundPicData.aspx?bzdm=002168&n=4&dt=month&rt=threemonth&vname=sameTypeRank_PicData&r=0.7121191065488921
    - 所在页面：http://fundf10.eastmoney.com/jdzf_002168.html
    - 请求方式：JSONP
    - 响应数据格式：javascript
    - 参数：
      - bzdm：基金编号
      - vname：sameTypeRank_PicData
      - dt：时间段
        - month
        - threemonth
        - sixmonth
        - year
        - threeyear
        - fiveyear
        - thisyear
        - all 最大
      - rt：时间范围
        - threemonth
        - sixmonth
        - year

- 阶段涨幅明细
  - http://fundf10.eastmoney.com/FundArchivesDatas.aspx?type=jdzf&code=002168&rt=0.26475453435021823
  - 所在页面：http://fundf10.eastmoney.com/jdzf_002168.html
  - 请求方式：JSONP
  - 响应数据格式：javascript
  - 参数：
    - type：类型
    - code：基金编号

- 查询热销股票型基金
  - https://fundztapi.eastmoney.com/FundSpecialApi/FundMarketRank.ashx?callback=jQuery17107832411402836703_1622974576006&CLTYPE=002&SYL=SYL_1N&FTYPE=1&pageSize=5&t=824&_=1622974576043
  - 所在页面：http://fundzt.eastmoney.com/2017/newgmph/?spm=001005002.sw.1
  - 请求方式：JSONP
  - 响应数据格式：javascript

- 查询热销混合型基金
  - https://fundztapi.eastmoney.com/FundSpecialApi/FundMarketRank.ashx?callback=jQuery17107832411402836703_1622974576007&CLTYPE=002&SYL=SYL_1N&FTYPE=2&pageSize=5&t=824&_=1622974576044
  - 所在页面：http://fundzt.eastmoney.com/2017/newgmph/?spm=001005002.sw.1
  - 请求方式：JSONP
  - 响应数据格式：javascript

- 查询热销QDII型基金
  - https://fundztapi.eastmoney.com/FundSpecialApi/FundMarketRank.ashx?callback=jQuery17107832411402836703_1622974576009&CLTYPE=002&SYL=SYL_1N&FTYPE=5&pageSize=5&t=824&_=1622974576045
  - 所在页面：http://fundzt.eastmoney.com/2017/newgmph/?spm=001005002.sw.1
  - 请求方式：JSONP
  - 响应数据格式：javascript

- 查询热销债券型基金
  - https://fundztapi.eastmoney.com/FundSpecialApi/FundMarketRank.ashx?callback=jQuery17107832411402836703_1622974576010&CLTYPE=002&SYL=SYL_1N&FTYPE=3&pageSize=5&t=824&_=1622974576046
  - 所在页面：http://fundzt.eastmoney.com/2017/newgmph/?spm=001005002.sw.1
  - 请求方式：JSONP
  - 响应数据格式：javascript
