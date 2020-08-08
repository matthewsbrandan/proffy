import { StyleSheet } from 'react-native';

const backgroundPrimary = false?'#333':'#f0f0f7';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundPrimary,
    },
    teacherList:{
        marginTop: -40,
    }
});

export default styles;