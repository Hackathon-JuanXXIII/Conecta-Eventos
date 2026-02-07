import { StyleSheet } from 'react-native';

export const tile_css = StyleSheet.create({
    contenedor: {
        width: '90%',
        minHeight: 90,

        flexDirection: 'row',

        backgroundColor: '#5099F8',

        borderRadius: 10,
    },
    contenedorIcono: {
        width: '20%',

        justifyContent: 'center',
        alignItems: 'center',
    },
    contendorTexto: {
        justifyContent: 'center',
    },
    icono: {
        width: 40,
        height: 40,
    },
    texto: {
        fontSize: 12,
        textAlign: 'left',

        color: '#FFFFFF',
    },
    texto_titulo: {
        fontSize: 20,
        textAlign: 'left',

        color: '#FFFFFF',
    }
})

export const tileExtra_css = StyleSheet.create({
    contenedor: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        width: '40%',
        height: '50%',

        backgroundColor: '#5099F8',

        borderRadius: 10,
    },
    contenedoIcono: {
        width: '20%',

        justifyContent: 'center',
        alignItems: 'center',
    },
    contendorTexto: {
        justifyContent: 'center',
    },
    icono: {
        width: 40,
        height: 40,
    },
    texto_titulo: {
        fontSize: 18,
        textAlign: 'left',

        color: '#FFFFFF',
    }
})