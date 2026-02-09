import { View, Text, FlatList } from "react-native";
import React, {useEffect, useState} from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

// Componentes - CAMBIAR ESTA LÍNEA
import { BackBTN } from "../BackButton";
import { TileEvento } from "../Tile";

// Scripts
import { fConsumirAPIEventos } from "../../scripts/apiEventos";

function ListaEventosContent() {
    const insets = useSafeAreaInsets();
    const [respuesta, setRespuesta] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        const fObtenerRespuesta = async() => {
           const response = await fConsumirAPIEventos();

            if (response) {
                setRespuesta(response)
            }
        }

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
            <View style={{paddingTop: insets.top, padding: 20}}>
                <BackBTN/>
                <Text style={{fontSize: 18, textAlign: 'center', marginTop: 20, color: '#939393'}}>
                    No hay eventos disponibles
                </Text>
            </View>
        )
    } else {
        return (
            <View style={{paddingTop: insets.top, flex: 1}}>
                <View style={{padding: 20}}>
                    <BackBTN />
                </View>

                <FlatList
                    contentContainerStyle={{alignItems: 'center', paddingBottom: 20}}
                    data={respuesta}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => {
                        const { dia, mes } = fExtraerFecha(item.fecha_inicio_evento);
                        return (
                            <TileEvento 
                                nombre={item.nombre} 
                                dia={dia} 
                                mes={mes} 
                                onPress={() => navigation.navigate('DetallesEventoView', { idEvento: item.id })}
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