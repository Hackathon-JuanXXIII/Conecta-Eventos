import { StyleSheet } from 'react-native';

export const profileBanner_css = StyleSheet.create({
    contenedor: {
        width: '90%',
        minHeight: 90,

        flexDirection: 'row',
    },
    contenedoAvatar: {
        width: '20%',

        justifyContent: 'center',
        alignItems: 'center',
    },
    contendorTexto: {
        justifyContent: 'center',
    },
    avatar: {
        width: 60,
        height: 60,

        borderRadius: 20,
    },
    welcome: {
        fontSize: 12,
        textAlign: 'left',

        color: '#939393',
    },
    welcomeNombre: {
        fontSize: 20,
        textAlign: 'left',

        color: '#0B0B0B',
    }
})