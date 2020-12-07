import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StatusBar, TouchableOpacity, Alert } from 'react-native';
import ZoomUs from 'react-native-zoom-us';

import Icons from '../component/Icons';
import { colors } from '../global';
import { config } from '../helper/config';
import { daysList, monthsList } from "../helper/constants";
import JoinMeeting from './JoinMeeting';
import NewMeeting from './NewMeeting';
import { styles } from "../assets/styles/mainPageStyle";

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNewMeetingModalOpen, setIsNewMeetingModalOpen] = useState(false);

    useEffect(() => {
        initializeZoom();
    }, [])

    async function initializeZoom() {
        try {
            await ZoomUs.initialize({
                clientKey: config.sdkKey,
                clientSecret: config.sdkSecret,
                domain: 'zoom.us'
            })
        } catch(err) {
            Alert.alert('Error', err);
        }
    }

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dayofWeek = date.getDay();
    const month = date.getMonth();
    const currentdate = date.getDate();

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.darkGrey} />
            <SafeAreaView style={styles.safeAreaView}>
                <Text style={styles.time}>{hours}:{minutes}</Text>
                <Text style={styles.date}>{daysList[dayofWeek]}, {monthsList[month]} {currentdate}</Text>

                <TouchableOpacity
                    onPress={() => setIsNewMeetingModalOpen(true)}
                    style={styles.button}>
                    <Icons
                        name="videoCamera"
                        color={colors.white}
                    />
                </TouchableOpacity>
                <Text style={styles.buttonLabel}>New Meeting</Text>

                <TouchableOpacity
                    onPress={() => setIsModalOpen(true)}
                    style={[styles.button, { backgroundColor: colors.blue }]}>
                    <Icons
                        name="plus"
                        color={colors.white}
                        size={30}
                    />
                </TouchableOpacity>
                <Text style={styles.buttonLabel}>Join</Text>
            </SafeAreaView>

            {isNewMeetingModalOpen && (
                <NewMeeting
                    closeModal={() => setIsNewMeetingModalOpen(false)}
                />
            )}

            {isModalOpen && (
                <JoinMeeting
                    closeModal={() => setIsModalOpen(false)}
                />
            )}
        </>
    )
}

export default MainPage;