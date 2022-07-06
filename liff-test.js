//import liff from '@line/liff';

async function shareMessage() {
    var userInput = document.getElementById("input-text").value;
    var words = CheckUserInput(userInput) || '%E5%AF%B6%E8%B2%9D%EF%BD%9E%E4%BA%BA%E5%AE%B6%E5%A5%BD%E6%83%B3%E4%BD%A0%E5%96%94%20%3C3';
    const baseUrl = 'https://liff.line.me/1657153526-9VPnAZdy?auto=yes&type=text&text=';
    var autoSendMessage = baseUrl.concat(words);
    liff.init({
        liffId: '1657152200-LPb0V708',
        withLoginOnExternalBrowser: true,
    }).then(() => {
        if(liff.isApiAvailable('shareTargetPicker')){
            liff.shareTargetPicker([
                {
                    "type": "flex",
                    "altText": "送禮物囉!",
                    "contents": {
                      "type": "bubble",
                      "size": "kilo",
                      "hero": {
                        "type": "image",
                        "url": "https://i.ytimg.com/vi/TcstdVXu1iw/maxresdefault.jpg",
                        "aspectRatio": "12:7",
                        "aspectMode": "cover",
                        "action": {
                          "type": "uri",
                          "uri": autoSendMessage
                        },
                        "offsetTop": "none",
                        "margin": "none",
                        "size": "full"
                      },
                      "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                          {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                              {
                                "type": "image",
                                "url": "https://i2.momoshop.com.tw/1635401805/goodsimg/0009/488/460/9488460_L.jpg",
                                "size": "md",
                                "align": "center"
                              },
                              {
                                "type": "text",
                                "text": "【星巴克】特大杯那堤買一送一",
                                "weight": "bold",
                                "size": "md",
                                "align": "start",
                                "wrap": true
                              }
                            ],
                            "action": {
                              "type": "uri",
                              "label": "action",
                              "uri": autoSendMessage
                            },
                            "margin": "none",
                            "alignItems": "center",
                            "justifyContent": "center",
                            "offsetEnd": "lg",
                            "offsetTop": "md"
                          },
                          {
                            "type": "button",
                            "action": {
                              "type": "uri",
                              "label": "點擊領取",
                              "uri": autoSendMessage
                            },
                            "style": "link"
                          },
                          {
                            "type": "separator",
                            "margin": "none"
                          }
                        ],
                        "paddingAll": "none",
                        "margin": "none"
                      },
                      "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                          {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                              {
                                "type": "icon",
                                "url": "https://www.12cm.com.tw/wp-content/uploads/2022/05/星巴克X12CM-Taiwan.png",
                                "size": "3xl"//,
                                // "offsetTop": "md"
                              },
                              {
                                "type": "text",
                                "text": "查看更多星意禮",
                                "size": "md",
                                "weight": "bold",
                                "align": "center"
                              },
                              {
                                "type": "icon",
                                "size": "md",
                                "url": "https://media.msufcu.org/publicsites/publicsite/icons/arrow_right_gray.png"
                              }
                            ],
                            "action": {
                              "type": "uri",
                              "label": "action",
                              "uri": autoSendMessage
                            },
                            "paddingEnd": "xl",
                            "paddingStart": "xl",
                            //"paddingTop": "md",
                            "paddingBottom": "md"
                          }
                        ]
                      }
                    }
                },
            ]).then(function (res) {
                if (res) {
                  // succeeded in sending a message through TargetPicker
                  console.log(`[${res.status}] Message sent!`)
                } else {
                  const [majorVer, minorVer] = (liff.getLineVersion() || "").split('.');
                  if (parseInt(majorVer) == 10 && parseInt(minorVer) < 11) {
                    // LINE 10.3.0 - 10.10.0
                    // Old LINE will access here regardless of user's action
                    console.log('TargetPicker was opened at least. Whether succeeded to send message is unclear')
                  } else {
                    // LINE 10.11.0 -
                    // sending message canceled
                    console.log('TargetPicker was closed!')
                  }
                }

                liff.closeWindow();
              }).catch(function (error) {
                // something went wrong before sending a message
                console.log(`[Error] ${error}`)
              })
        }
        else{
            window.alert('[Share Target Picker] NOT supported!');
        }

        
    });
}

function CheckUserInput(input) {
  var limitedWords= input.substring(0, 20);
  return encodeURI(limitedWords);
}
