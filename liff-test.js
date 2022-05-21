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
        else{
            const accessToken = liff.getAccessToken();
            console.log(accessToken);

            liff.getFriendship().then((data) =>{
                if(data.friendFlag)
                {
                    if(!liff.isInClient()){
                        window.alert('Please press it in Line APP');
                    }
                    else{
                        liff.sendMessages([{
                            type: 'text',
                            text: 'Hello World',
                        }]).then(() =>{
                            window.alert('[Success] Your message has been sent!');
                        }).catch((error) =>{
                            window.alert(`[Failed] Error: ${error}`);
                        });
                    }
                }
            });

            
        }
    });
}

