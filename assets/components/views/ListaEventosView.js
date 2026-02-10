import { View, Text, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SafeAreaProvider } from 'react-native-safe-area-context'

//react-navigation
import { useNavigation } from '@react-navigation/native'

// Componentes
import { BackBTN } from '../BackBTN'
import { TileEvento } from '../Tile'

// Estilos CSS
import { listaEventos_css } from '../../css/listaEventos_css'

// Scripts
import { fConsumirAPIEventos } from '../../scripts/apiEventos'

function ListaEventosContent() {
    const insets = useSafeAreaInsets();
    const [respuesta, setRespuesta] = useState([])

    const navigation = useNavigation()
    
    // Consume la funcion con la que consumir la API
    useEffect(() => {
        const fObtenerRespuesta = async() => {
           const response = await fConsumirAPIEventos();

            if (response) {
                setRespuesta(response)
            }
        }

        // Se ejecuta, lo de antes es la definición
        fObtenerRespuesta()
    }, [])

    const fExtraerFecha = (fechaString) => {
        const fecha = new Date(fechaString)

        const dia = fecha.getDate()
        const mes = fecha.toLocaleDateString('es-ES', {month: 'short'}).toUpperCase()

        return {dia, mes}
    }

    if (respuesta.length <= 0) {
        return (
            <View style={[listaEventos_css.screen,{paddingTop: insets.top}]}>
                <Text>Cargando eventos (Poner skeleton mientras carga?)</Text>
            </View>
        )
    } else {
        // Imagen de prueba, cambiar por las imagenes devueltas por la API
        const imagen = 'https://placehold.co/400x400/webp'

        return (
            <View style={{flex: 1, paddingTop: insets.top}}>
                <View style={{paddingVertical: 10}}>
                    <BackBTN />
                </View>

                <FlatList style={listaEventos_css.lista}
                    // `style` afecta solo al marco de la lista, esta propiedad hace que se centre en el propio contenido
                    contentContainerStyle={listaEventos_css.screen}
                    // Cada objeto que se almacene en respuesta `<FlatList>` hace una iteración
                    data={respuesta}
                    // `item` por asi decir seria como un "alias" con el que hacer referencia al objeto que contiene `respuesta`yyy
                    keyExtractor={(item) => item.id.toString()}
                    // renderItem vendria a ser el iterador para la lista `FlatList`
                    renderItem={({item}) => {
                        return (
                            <TileEvento 
                                onPress={() => navigation.navigate('DetalleEventoView', {
                                    id: item.id
                                })}
                                nombre={item.nombre}
                                id_categoria={item.id_categoria}
                                imagen={{uri: imagen}}
                                tags={item.tags}
                                categoria={item.categoria.nombre}
                            />
                        );
                    }}
                />
            </View>
        )
    }
}

export function ListaEventosView() {
    return (
        <ListaEventosContent />
    )
}