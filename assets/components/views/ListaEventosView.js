import { View, Text, FlatList } from "react-native";
import React, {useEffect, useState} from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Coponentes
import { BackBTN } from "../../scripts/navigation/NavigationPerfil";
import { TileEvento } from "../Tile";

// Scripts
import { fConsumirAPIEventos } from "../../scripts/apiEventos";

function ListaEventosContent() {
    const insets = useSafeAreaInsets();
    const [respuesta, setRespuesta] = useState([])
    
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
            <View style={{paddingTop: insets.top}}>
                <BackBTN/>

                <Text>No hay eventos disponibles</Text>
            </View>
        )
    } else {
        return (
            <View style={{paddingTop: insets.top}}>
                <BackBTN />

                <FlatList
                    // Cada objeto que se almacene en respuesta `<FlatList>` hace una iteración
                    data={respuesta}
                    // `item` por asi decir seria como un "alias" con el que hacer referencia al objeto que contiene `respuesta`yyy
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => {
                        const { dia, mes } = fExtraerFecha(item.fecha_inicio_evento);
                        return (
                            <TileEvento 
                                nombre={item.nombre} 
                                dia={dia} 
                                mes={mes} 
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
        <SafeAreaProvider>
            <ListaEventosContent />
        </SafeAreaProvider>
    )
}