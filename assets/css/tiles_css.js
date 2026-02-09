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

export const tileEvento_css = StyleSheet.create({
    contenedorEvento_base: {
        maxWidth: '90%',
        minWidth: '90%',
        minHeight: 120,

        flexDirection: 'row',
        alignItems: 'center',

        padding: 10,
        marginBottom: 25,
        // paddingVertical: 15,

        backgroundColor: '#5099F8',
        borderRadius: 15,
    },
    imagenEvento: {
        width: 110,
        height: 110,

        borderRadius: 5,

        backgroundColor: '#939393',
    },
    separator: {
        width: 1,
        height: '100%',

        marginHorizontal: 10,

        backgroundColor: 'white',
    },
    descEvento: {
        paddingTop: 15,
        flexDirection: 'column',

        flex: 1,
    },
    nombreEvento: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    categoriaEvento: {
        color: '#FFFFFF',
    },
    tagsEvento : {
        paddingHorizontal: 5,
        paddingVertical: 3,

        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    noTags: {
        paddingHorizontal: 5,
        paddingVertical: 3,
        
        alignContent: 'center',

        backgroundColor: '#FFF333',
        borderRadius: 5
    }
})