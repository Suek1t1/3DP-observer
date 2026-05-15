const LINE_TOKEN = "f/IRIcJmRt1PgcF78xIpmcPVyOgozFL+OCNZij5+WA9McEd4zqkG25KyS0hQhMSBCiFxk75lSiFQODzNXhxR+dPoritkraCq/ucidaUBlycK48Id6TBJc6SIDE99dLCIy61pzRD6lZLwRpmB3Jx/dwdB04t89/1O/w1cDnyilFU=";

function testSendMessage() {
  const url = "https://api.line.me/v2/bot/message/broadcast";
  const payload = {
    "messages": [
      {
        "type": "text",
        "text": "Phase 1 疎通テスト"
      }
    ]
  };

  const options = {
    "method": "post",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    "payload": JSON.stringify(payload)
  };

  UrlFetchApp.fetch(url, options);
}