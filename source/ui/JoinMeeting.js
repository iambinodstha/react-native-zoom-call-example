import React, { useState } from 'react';
import {
    Text,
    View,
    Modal,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    ScrollView,
    Alert
} from 'react-native'
import { colors } from '../global';
import { Switch } from 'react-native-switch';
import ZoomUs from 'react-native-zoom-us';
import { styles } from "../assets/styles/joinMeetingStyle";

const JoinMeeting = ({ closeModal }) => {
    const [meetingId, setMeetingId] = useState('');
    const [name, setName] = useState('');
    const [audio, setAudio] = useState(false);
    const [video, setVideo] = useState(false);

    const enableButton = meetingId && name;

    async function joinMeeting() {
        try {
            await ZoomUs.joinMeeting({
                userName: name,
                meetingNumber: meetingId,
                noAudio: audio,
                noVideo: video
            })
        } catch (err) {
            Alert.alert('Error', err);
        }
    }

    return (
        <Modal
            visible={true}
            onRequestClose={closeModal}
            animationType="slide"
        >
            <SafeAreaView style={styles.viewContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={closeModal}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Join a Meeting</Text>
                    <View style={{ paddingHorizontal: 20 }} />
                </View>

                <ScrollView
                    keyboardShouldPersistTaps="always"
                    style={{ flex: 1 }}>
                    <View style={styles.content}>
                        <TextInput
                            style={styles.textBox}
                            placeholder="Meeting Id"
                            placeholderTextColor={colors.white}
                            onChangeText={value => setMeetingId(value)}
                            value={meetingId}
                            keyboardType="number-pad"
                        />

                        <TextInput
                            style={styles.textBox}
                            placeholder="Your Name"
                            placeholderTextColor={colors.white}
                            onChangeText={value => setName(value)}
                            value={name}
                        />

                        <TouchableOpacity
                            onPress={joinMeeting}
                            disabled={!enableButton}
                            style={[styles.button, { backgroundColor: enableButton ? colors.blue : 'rgba(255, 255, 255, 0.2)' }]}>
                            <Text style={styles.buttonText}>Join</Text>
                        </TouchableOpacity>

                        <Text style={styles.optionLabel}>JOIN OPTIONS</Text>
                    </View>

                    <View style={[styles.switchContainer, { borderTopWidth: 0 }]}>
                        <Text style={styles.switchLabel}>Don't Connect To Audio</Text>
                        <Switch
                            value={audio}
                            onValueChange={(val) => setAudio(val)}
                            circleSize={30}
                            renderActiveText={false}
                            renderInActiveText={false}
                        />
                    </View>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchLabel}>Turn Off My Video</Text>
                        <Switch
                            value={video}
                            onValueChange={(val) => setVideo(val)}
                            circleSize={30}
                            renderActiveText={false}
                            renderInActiveText={false}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>

        </Modal>
    )
}

export default JoinMeeting;