import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import ZoomUs from 'react-native-zoom-us';
import jwt from "react-native-pure-jwt";

const App = () => {

  useEffect(() => {
    // initialize minimal
    initializeZoom();
  }, [])

  function generateToken() {
    // const payload = {
    //   iss: "o24IbJHITK2Da7HTz70Q0A",
    //   exp: ((new Date()).getTime() + 5000)
    // };
    // const token = jwt.sign(payload, "DR5NEG3595IMqS6bkYY8r5YrU62ZOmyGTUwk");
    // console.log(token)

    jwt.sign(
      {
        iss: "o24IbJHITK2Da7HTz70Q0A",
        exp: new Date().getTime() + 5000, // expiration date, required, in ms, absolute to 1/1/1970
      }, // body
      "DR5NEG3595IMqS6bkYY8r5YrU62ZOmyGTUwk", // secret
      {
        alg: "HS256"
      }
    )
      .then(token => {
        fetch('https://api.zoom.us/v2/users/iambinodstha@gmail.com?status=active', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'User-Agent': 'Zoom-api-Jwt-Request',
            'content-type': 'application/json'
          }
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
      })
      .catch(console.error); // possible errors
  }

  async function initializeZoom() {
    await ZoomUs.initialize({
      clientKey: 'El42nBPNAZmgcRN7zLSr4bek7JxavXU1N9SC',
      clientSecret: 'H6U8yMYD739t6ELadl6XvvfwDcx1sJzh4kFW',
    })
  }

  async function joinMeeting() {
    // Join Meeting
    await ZoomUs.joinMeeting({
      userName: 'Binod Shrestha',
      meetingNumber: '89505750933',
    })
  }

  async function startMeeting() {
    await ZoomUs.startMeeting({
      userName: 'Johny',
      meetingNumber: '6169951345',
      userId: '6169951345',
      // zoomAccessToken: zak,
      userType: 2, // optional
    })
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <TouchableOpacity onPress={joinMeeting}>
            <Text>Start Meeting</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={startMeeting}>
            <Text>Join Meeting</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={generateToken}>
            <Text>generate token</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
