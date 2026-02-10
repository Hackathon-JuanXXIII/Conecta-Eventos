import { StyleSheet } from 'react-native';

export const detalleEvento_css = StyleSheet.create({
    headerContainer: {
        padding: 10
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    loadingText: {
        marginTop: 15,
        fontSize: 16,
        color: '#939393',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF3B30',
        marginTop: 20,
    },
    errorSubtext: {
        fontSize: 14,
        color: '#939393',
        marginTop: 10,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    imagen: {
        width: '100%',
        height: 220,
        borderRadius: 15,
        marginBottom: 20,
    },
    infoRow: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#5099F8',
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
    },
    descripcion: {
        fontSize: 15,
        lineHeight: 22,
    },
});