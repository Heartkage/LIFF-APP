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
            
        if(!liff.isInClient()){
            window.alert('Please use it in Line APP');
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

        //liff.closeWindow();
    });
}

