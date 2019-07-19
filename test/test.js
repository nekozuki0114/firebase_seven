const request = require('request')
const cheerio = require('cheerio')
const item_arr = [];
const item = {};
const url = 'https://www.sej.co.jp/i/products/thisweek/' // セブンイレブンの新商品情報



request(url,async (e, response, body) => {
    if (e) {
        console.error(e)
    }
    try {
        const $ = cheerio.load(body)              //bodyの読み込み
        $('strong', '.itemName' ).each((i, elem) => {   //'itemName'クラス内のstrongタグ内要素に対して処理実行
                    item_arr[i] = []    　　　　　　　//二次元配列にするための処理
            item_arr[i][0] = $(elem).text()        //配列にテキストを挿入していく
        })

        $('img', '.image' ).each((i, elem) => {
             item_arr[i][1] = Object.entries($(elem).attr())[0][1].toString()
          })

        $('.region', '.itemPrice' ).each((i, elem) => {
                    item_arr[i][2] = $(elem).text()

        })
        $(item_arr).each((i)=> {
           item[i] = {}
           item[i]["name"] = item_arr[i][0];
           item[i]["image"] = item_arr[i][1];
           item[i]["price"] = item_arr[i][2];
        })
        return(item);
     } catch (e) {
         console.error(e)
     }
})
var Itemlist = request;


console.log await(item)

