import React, { useState } from 'react';
import {
    Text,
    View,
    Modal,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    ScrollView,
    Alert,
    ActivityIndicator
} from 'react-native'
import { colors } from '../global';
import ZoomUs from 'react-native-zoom-us';
import { createUserZAK, generateToken, getUserID, createMeeting } from "../services";
import { styles } from "../assets/styles/newMeetingStyle";

const NewMeeting = ({ closeModal }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    async function startMeeting() {
        try {
            setLoading(true);
            let jwtToken = await generateToken();
            let userResult = await getUserID(email, jwtToken);
            const { id: userId, first_name, last_name } = userResult
            let zoomAccessToken = await createUserZAK(userId, jwtToken);
            let meetingId = await createMeeting(userId, jwtToken);
            setLoading(false);

            await ZoomUs.startMeeting({
                userName: `${first_name} ${last_name}`,
                meetingNumber: meetingId.id,
                userId: userId,
                zoomAccessToken: zoomAccessToken.token,
            })
        } catch (err) {
            Alert.alert('Error', err)
        }
    }

    const enableButton = email;

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
                    <Text style={styles.headerTitle}>New Meeting</Text>
                    <View style={{ paddingHorizontal: 20 }} />
                </View>

                <ScrollView
                    keyboardShouldPersistTaps="always"
                    style={{ flex: 1 }}>
                    <View style={styles.content}>
                        <TextInput
                            style={styles.textBox}
                            placeholder="Email Address"
                            placeholderTextColor={colors.white}
                            onChangeText={value => setEmail(value)}
                            value={email}
                        />

                        <TouchableOpacity
                            onPress={startMeeting}
                            disabled={!enableButton}
                            style={[styles.button, { backgroundColor: enableButton ? colors.blue : 'rgba(255, 255, 255, 0.2)' }]}>
                            {loading ? (
                                <ActivityIndicator
                                    size="large"
                                    color="white" />
                            ) : (
                                    <Text style={styles.buttonText}>Start</Text>
                                )
                            }
                        </TouchableOpacity>

                    </View>

                </ScrollView>
            </SafeAreaView>

        </Modal>
    )
}

export default NewMeeting;