const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const axios = require('axios');
let item;

exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.

    item = await axios.get('https://uarwkd8on1.execute-api.us-east-1.amazonaws.com/default/seven').then((res) => {
        // 処理内容
        item = res['data'];
        console.log(item);
        return item;
    });

    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref('/セブン').set({item:item});

    //テスト用
    // const snapshot2 = await admin.database().ref('/ローソン').set({item:2222});
    // const snapshot3 = await admin.database().ref('/ファミマ').set({item:{1:1,2:2}});
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
});

