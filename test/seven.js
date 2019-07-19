
const axios = require('axios');

let item;

async function dataget() {

   return await axios.get('https://uarwkd8on1.execute-api.us-east-1.amazonaws.com/default/seven').then((res) => {
        // 処理内容
        item = res['data'];
        console.log(item);
     });
}


async function result() {
        await dataget();
    }


    console.log(item);




