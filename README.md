# zoom call App using react native
**This application cover Zoom SDK integration for IOS and Android with features of Joining meeting and Starting meeting**

## Demo screenshots
<img src="https://github.com/iambinodstha/react-native-zoom-call-example/blob/master/source/assets/screenshots/1.jpg" alt="screenshot1" width="150"/>
<img src="https://github.com/iambinodstha/react-native-zoom-call-example/blob/master/source/assets/screenshots/2.jpg" alt="screenshot2" width="150"/>
<img src="https://github.com/iambinodstha/react-native-zoom-call-example/blob/master/source/assets/screenshots/3.jpg" alt="screenshot3" width="150"/>
<img src="https://github.com/iambinodstha/react-native-zoom-call-example/blob/master/source/assets/screenshots/4.jpg" alt="screenshot4" width="150"/>

## Build an zoom app
### Steps:

1. create a zoom app [Zoom Marketplace](https://marketplace.zoom.us/){:target="_blank"}
2. Generate app credentials for sdk and api

## How to install
1. clone this react project by running below command in git terminal:
`git clone https://github.com/iambinodstha/react-native-zoom-call-example.git`

2. after Step 1. goto project directory:
`cd react-native-zoom-call-example`

3. install dependencies:
`npm install` or `yarn install`

## Android installation
`npx react-native run-android` or `react-native run-android`

## IOS installation
1. pod install `cd ios && pod install`
2. build `npx react-native run-ios` or `react-native run-ios`

## Usage
1. setup configuration credentials:
`source/helper/config.js`
<pre>
export const config = {
    apiKey: '', //API key
    apiSecret: '', //API secret
    sdkKey: '', //SDK key
    sdkSecret: '' //SDK secret
}
</pre>

2. Initialization
<pre>
   async function initializeZoom() {
        try {
            await ZoomUs.initialize({
                clientKey: config.sdkKey, // SDK key from zoom app
                clientSecret: config.sdkSecret, // SDK secret from zoom app
                domain: 'zoom.us'
            })
        } catch(err) {
            Alert.alert('Error', err);
        }
    }
   </pre>

3. Join Meeting
<pre>
async function joinMeeting() {
        try {
            await ZoomUs.joinMeeting({
                userName: name, // name
                meetingNumber: meetingId, //meeting id
                noAudio: audio, // audio configuration
                noVideo: video // video configuration
            })
        } catch (err) {
            Alert.alert('Error', err);
        }
    }
</pre>

4. Join Meeting
<pre>
async function startMeeting() {
        try {
            setLoading(true);
            let jwtToken = await generateToken(); //generate JWT token
            let userResult = await getUserID(email, jwtToken);
            const { id: userId, first_name, last_name } = userResult
            let zoomAccessToken = await createUserZAK(userId, jwtToken); // zoom access token
            let meetingId = await createMeeting(userId, jwtToken);
            setLoading(false);

            await ZoomUs.startMeeting({
                userName: `${first_name} ${last_name}`, // Full Name
                meetingNumber: meetingId.id, // meeting id from api
                userId: userId, // user id from api
                zoomAccessToken: zoomAccessToken.token, // zoom access token from api
            })
        } catch (err) {
            Alert.alert('Error', err)
        }
    }
</pre>

## Packages used
1. [react-native-zoom-us](https://github.com/mieszko4/react-native-zoom-us){:target="_blank"}
2. [react-native-switch](https://github.com/shahen94/react-native-switch#readme){:target="_blank"}
3. [react-native-pure-jwt](https://github.com/zaguiini/react-native-pure-jwt#readme){:target="_blank"}