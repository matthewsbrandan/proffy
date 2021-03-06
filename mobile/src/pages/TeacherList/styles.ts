import { StyleSheet } from 'react-native';

const backgroundPrimary = false?'#333':'#f0f0f7';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundPrimary,
    },
    teacherList:{
        marginTop: -40,
    },
    searchForm:{
        marginBottom: 24,
    },
    label:{
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
    },
    input:{
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },
    inputGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputBlock:{
        width: '48%',
    },
    submitButton:{
        backgroundColor: '#04d361',
        height: 54,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText:{
        fontFamily:'Archivo_700Bold',
        color: '#fff',
        fontSize: 16,
    },
});

export default styles;