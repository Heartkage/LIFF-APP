//import liff from '@line/liff';

function shareMessage()
{
    liff.init({
        liffId: '1657152200-LPb0V708',
        withLoginOnExternalBrowser: true,
    }).then(() => {
        if(!liff.isLoggedIn()){
            liff.login({redirectUri: 'https://heartkage.github.io/LIFF-APP/'});
        }

        const accessToken = liff.getAccessToken();
            
        if(liff.isApiAvailable('shareTargetPicker')){
            liff.shareTargetPicker([
                {
                    "type": "flex",
                    "altText": "送禮物囉!",
                    "contents": {
                        "type": "bubble",
                        "hero": {
                          "type": "image",
                          "url": "https://i.ytimg.com/vi/TcstdVXu1iw/maxresdefault.jpg",
                          "size": "full",
                          "aspectRatio": "20:13",
                          "aspectMode": "cover",
                          "action": {
                            "type": "uri",
                            "uri": "https://liff.line.me/1657153526-9VPnAZdy?auto=yes&type=text&text=%E6%97%A9%E5%AE%89"
                          }
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
                                  "url": "https://img1.momoshop.com.tw/expertimg/0009/488/468/mobile/STBYMMDD07BTC1.jpg",
                                  "align": "center"
                                },
                                {
                                  "type": "text",
                                  "text": "【星巴克】特大杯美式咖啡(熱)",
                                  "weight": "bold",
                                  "size": "lg",
                                  "align": "start",
                                  "wrap": true
                                }
                              ],
                              "alignItems": "center",
                              "justifyContent": "flex-start",
                              "action": {
                                "type": "uri",
                                "label": "action",
                                "uri": "https://liff.line.me/1657153526-9VPnAZdy?auto=yes&type=text&text=%E6%97%A9%E5%AE%89"
                              }
                            }
                          ],
                          "paddingTop": "md",
                          "paddingBottom": "none"
                        },
                        "footer": {
                          "type": "box",
                          "layout": "vertical",
                          "spacing": "sm",
                          "contents": [
                            {
                              "type": "button",
                              "action": {
                                "type": "uri",
                                "label": "打開我的禮物",
                                "uri": "https://liff.line.me/1657153526-9VPnAZdy?auto=yes&type=text&text=%E6%97%A9%E5%AE%89"
                              }
                            },
                            {
                              "type": "button",
                              "style": "link",
                              "height": "sm",
                              "action": {
                                "type": "uri",
                                "label": "傳送感謝小卡",
                                "uri": "https://liff.line.me/1657153526-9VPnAZdy?auto=yes&type=text&text=%E6%97%A9%E5%AE%89"
                              }
                            },
                            {
                              "type": "separator",
                              "margin": "none"
                            },
                            {
                              "type": "box",
                              "layout": "baseline",
                              "contents": [
                                {
                                  "type": "icon",
                                  "url": "https://cdn-icons-png.flaticon.com/512/3209/3209955.png",
                                  "size": "3xl",
                                  "offsetTop": "md"
                                },
                                {
                                  "type": "text",
                                  "text": "限時送禮",
                                  "size": "md",
                                  "weight": "bold",
                                  "color": "#A9A9A9"
                                },
                                {
                                  "type": "icon",
                                  "size": "lg",
                                  "offsetTop": "sm",
                                  "url": "https://media.msufcu.org/publicsites/publicsite/icons/arrow_right_gray.png"
                                }
                              ],
                              "spacing": "md",
                              "position": "relative",
                              "alignItems": "center",
                              "justifyContent": "flex-start",
                              "margin": "xs",
                              "action": {
                                "type": "uri",
                                "label": "action",
                                "uri": "https://liff.line.me/1657153526-9VPnAZdy?auto=yes&type=text&text=%E6%97%A9%E5%AE%89"
                              }
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
              }).catch(function (error) {
                // something went wrong before sending a message
                console.log(`[Error] ${error}`)
              })
        }
        else{
            window.alert('[Share Target Picker] NOT supported!');
        }
        

        //liff.closeWindow();
    });
}

