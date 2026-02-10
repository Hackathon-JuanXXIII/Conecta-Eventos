import { View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// COmponentes
import { BackBTN } from "../BackBTN";

// Consumir API
import { fObtenerDetalleEvento } from "../../scripts/apiEvento";

// Estilos
import { detalleEvento_css } from "../../css/detalleEvento_css";

function DetalleEventoContent({id}) {
    const insets = useSafeAreaInsets();

    const [evento, setEvento] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const obtenerEvento = async() => {
            setCargando(true);
            setError(false);
            
            const data = await fObtenerDetalleEvento(id);
            
            if (data) {
                setEvento(data);
            } else {
                setError(true);
            }
            
            setCargando(false);
        }

        obtenerEvento();
    // Antes -> }, [idEvento]); <- Solo interesa que se ejcute una sola vez, por eso se pone solo lo de abajo
    }, []);

    const fFormatearFecha = (fechaString) => {
        const fecha = new Date(fechaString);
        return fecha.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (cargando) {
        return (
            <View style={[detalleEvento_css.loadingContainer, { paddingTop: insets.top }]}>
                <ActivityIndicator size="large" color="#5099F8" />
                <Text style={detalleEvento_css.loadingText}>Cargando evento...</Text>
            </View>
        );
    }

    if (error || !evento) {
        return (
            <View style={[detalleEvento_css.errorContainer, { paddingTop: insets.top }]}>
                <BackBTN />
                <Text style={detalleEvento_css.errorText}>❌ Error al cargar el evento</Text>
                <Text style={detalleEvento_css.errorSubtext}>
                    Por favor, intenta de nuevo más tarde
                </Text>
            </View>
        );
    }

    const imagen = 'https://placehold.co/400x400/webp'

    return (
        <View style={[detalleEvento_css.contenedor, {paddingTop: insets.top}, {flex: 1}]}>
            <BackBTN />

            <View style={[detalleEvento_css.headerContainer, {flex: 1}]}>
                <Text style={detalleEvento_css.titulo}>{evento.nombre}</Text>
                    <Image 
                        style={detalleEvento_css.imagen}
                        source={{uri: evento.imagen_url || imagen}}
                    />

                {/* `ScrollView` por que no va a ser una lista 100% dinamica */}
                <ScrollView style={{flex: 1}}>
                    <View style={detalleEvento_css.infoRow}>
                        <Text style={detalleEvento_css.label}>♿ Accesible</Text>
                        <Text style={detalleEvento_css.value}>
                            {evento.es_accesible ? 'Sí' : 'No'}
                        </Text>
                    </View>

                    <View style={detalleEvento_css.infoRow}>
                        <Text style={detalleEvento_css.label}>🏷️ Categoría</Text>
                        <Text style={detalleEvento_css.value}>
                            {evento.categoria.nombre || 'Sin categoria'}
                        </Text>
                    </View>

                    <View style={detalleEvento_css.infoRow}>
                        <Text style={detalleEvento_css.label}>👤 Organizador</Text>
                        <Text style={detalleEvento_css.value}>{evento.entidad.nombre || 'Anonimo'}</Text>
                    </View>

                    <View style={detalleEvento_css.infoRow}>
                        <Text style={detalleEvento_css.label}>👤 Creado por</Text>
                        <Text style={detalleEvento_css.value}>
                            {evento.creador ?
                                (evento.creador.nombre + ' ' + evento.creador.apellido) :
                                ('Anonimo')
                            }
                        </Text>
                    </View>

                    <View style={detalleEvento_css.infoRow}>
                        <Text style={detalleEvento_css.label}>⭐ Valoración</Text>
                        <Text style={detalleEvento_css.value}>
                            {Number(evento.valoracion).toFixed(1)} / 5
                        </Text>
                    </View>

                    <View style={detalleEvento_css.infoRow}>
                        <Text style={detalleEvento_css.label}>📅 Fecha de inicio</Text>
                        <Text style={detalleEvento_css.value}>
                            {fFormatearFecha(evento.fecha_inicio_evento)}
                        </Text>
                    </View>

                    <View style={detalleEvento_css.infoRow}>
                        <Text style={detalleEvento_css.label}>📍 Ubicación</Text>
                        <Text style={detalleEvento_css.value}>{evento.ubicacion || 'Sin determinar'}</Text>
                    </View>

                    <View style={detalleEvento_css.infoRow}>
                        <Text style={detalleEvento_css.label}>👥 Participantes</Text>
                        <Text style={detalleEvento_css.value}>
                            {evento.num_participantes || 'Todavia nadie, apuntate!!'}
                        </Text>
                    </View>

                    <View style={detalleEvento_css.descripcionContainer}>
                        <Text style={detalleEvento_css.label}>📝 Descripción</Text>
                        <Text style={detalleEvento_css.descripcion}>
                            {evento.descripcion || 'Disfrutar'}
                        </Text>
                    </View>

                    {evento.tags && evento.tags.length > 0 && (
                        <View style={detalleEvento_css.infoRow}>
                            <Text style={detalleEvento_css.label}>🏷️ Tags</Text>
                            <Text style={detalleEvento_css.value}>
                                {evento.tags.map(tag => tag.nombre).join(", ")}
                            </Text>
                        </View>
                    )}
                </ScrollView>
            </View>
        </View>
    )
}

// `route` vendria a ser como un objeto generado por el evento `onPress`,
// el cual devuelve la propiedad `params`,
// la cual hace refencia a los parametros pasados a la ruta
export function DetalleEventoView({route}) {
    const {id} = route.params || {}

    // console.log('route -> ' + JSON.stringify(route));
    // console.log('route.params -> ' + JSON.stringify(route.params));
    // console.log('id -> ' + id);

    return (
        <DetalleEventoContent id={id}/>
    )
}