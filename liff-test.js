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
            
        
        // liff.sendMessages([{
        //     type: 'text',
        //     text: 'Hello World',
        // }]).then(() =>{
        //     window.alert('[Success] Your message has been sent!');
        // }).catch((error) =>{
        //     window.alert(`[Failed] Error: ${error}`);
        // });
        // 
        if(liff.isApiAvailable('shareTargetPicker')){
            liff.shareTargetPicker([
                {
                    "type":"template",
                    "template":{
                        "type": "bubble",
                        "hero": {
                          "type": "image",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
                          "size": "full",
                          "aspectRatio": "20:13",
                          "aspectMode": "cover",
                          "action": {
                            "type": "message",
                            "label": "action",
                            "text": "Hello"
                          },
                          "align": "start"
                        },
                        "body": {
                          "type": "box",
                          "layout": "vertical",
                          "spacing": "md",
                          "contents": [
                            {
                              "type": "box",
                              "layout": "horizontal",
                              "contents": [
                                {
                                  "type": "image",
                                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png"
                                },
                                {
                                  "type": "text",
                                  "text": "Test",
                                  "align": "center"
                                }
                              ],
                              "alignItems": "center"
                            },
                            {
                              "type": "button",
                              "action": {
                                "type": "message",
                                "label": "Button1",
                                "text": "Hello1"
                              }
                            },
                            {
                              "type": "button",
                              "action": {
                                "type": "message",
                                "label": "Button2",
                                "text": "Hello2"
                              }
                            },
                            {
                              "type": "separator"
                            },
                            {
                              "type": "button",
                              "action": {
                                "type": "message",
                                "label": "Button3",
                                "text": "Hello3"
                              }
                            }
                          ]
                        },
                        "styles": {
                          "header": {
                            "separator": false
                          }
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
                console.log('something wrong happen')
              })
        }
        else{
            window.alert('[Share Target Picker] NOT supported!');
        }
        

        liff.closeWindow();
    });
}

