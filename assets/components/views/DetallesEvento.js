import { View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { BackBTN } from "../BackButton";


import { fObtenerDetalleEvento } from "../../scripts/apiEvento";


import { detalleEvento_css } from "../../css/detalleEvento_css";

function DetalleEventoContent({ route }) {
    const insets = useSafeAreaInsets();
    const { idEvento } = route.params; 
    const [evento, setEvento] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const obtenerEvento = async() => {
            setCargando(true);
            setError(false);
            
            const data = await fObtenerDetalleEvento(idEvento);
            
            if (data) {
                setEvento(data);
            } else {
                setError(true);
            }
            
            setCargando(false);
        }

        obtenerEvento();
    }, [idEvento]);

    const formatearFecha = (fechaString) => {
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
                <BackBTN />
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

    return (
        <ScrollView style={{ paddingTop: insets.top }}>
            <View style={detalleEvento_css.backBtnContainer}>
                <BackBTN />
            </View>

            <View style={detalleEvento_css.container}>
                <View style={detalleEvento_css.headerContainer}>
                    <Text style={detalleEvento_css.titulo}>{evento.nombre}</Text>
                    {evento.imagen_url && (
                        <Image 
                            style={detalleEvento_css.imagen}
                            source={{ uri: evento.imagen_url }}
                        />
                    )}
                </View>
                
                <View style={detalleEvento_css.infoContainer}>
                    <View style={detalleEvento_css.infoRow}>
                        <Text style={detalleEvento_css.label}>♿ Accesible</Text>
                        <Text style={detalleEvento_css.value}>
                            {evento.es_accesible ? "Sí" : "No"}
                        </Text>
                    </View>
                    {evento.id_categoria && (
                        <View style={detalleEvento_css.infoRow}>
                            <Text style={detalleEvento_css.label}>🏷️ Categoría</Text>
                            <Text style={detalleEvento_css.value}>
                                Categoría {evento.categoria.nombre}
                            </Text>
                        </View>
                    )}
                    {evento.organizador && (
                        <View style={detalleEvento_css.infoRow}>
                            <Text style={detalleEvento_css.label}>👤 Organizador</Text>
                            <Text style={detalleEvento_css.value}>{evento.entidad.nombre}</Text>
                        </View>
                    )}
                    {evento.creador && (
                        <View style={detalleEvento_css.infoRow}>
                            <Text style={detalleEvento_css.label}>👤 Creado por</Text>
                            <Text style={detalleEvento_css.value}>
                                {evento.creador.nombre} {evento.creador.apellido}
                            </Text>
                        </View>
                    )}
                    {evento.valoracion && (
                    <View style={detalleEvento_css.infoRow}>
                        <Text style={detalleEvento_css.label}>⭐ Valoración</Text>
                        <Text style={detalleEvento_css.value}>
                            {Number(evento.valoracion).toFixed(1)} / 5
                        </Text>
                    </View>
                    )}
                    <View style={detalleEvento_css.infoRow}>
                        <Text style={detalleEvento_css.label}>📅 Fecha de inicio</Text>
                        <Text style={detalleEvento_css.value}>
                            {formatearFecha(evento.fecha_inicio_evento)}
                        </Text>
                    </View>

                    {evento.fecha_fin_evento && (
                        <View style={detalleEvento_css.infoRow}>
                            <Text style={detalleEvento_css.label}>🏁 Fecha de fin</Text>
                            <Text style={detalleEvento_css.value}>
                                {formatearFecha(evento.fecha_fin_evento)}
                            </Text>
                        </View>
                    )}

                    {evento.ubicacion && (
                        <View style={detalleEvento_css.infoRow}>
                            <Text style={detalleEvento_css.label}>📍 Ubicación</Text>
                            <Text style={detalleEvento_css.value}>{evento.ubicacion}</Text>
                        </View>
                    )}

                    {evento.num_participantes !== null && (
                        <View style={detalleEvento_css.infoRow}>
                            <Text style={detalleEvento_css.label}>👥 Participantes</Text>
                            <Text style={detalleEvento_css.value}>
                                {evento.num_participantes}
                            </Text>
                        </View>
                    )}

                    {evento.descripcion && (
                        <View style={detalleEvento_css.descripcionContainer}>
                            <Text style={detalleEvento_css.label}>📝 Descripción</Text>
                            <Text style={detalleEvento_css.descripcion}>
                                {evento.descripcion}
                            </Text>
                        </View>
                    )}
 
                    {evento.tags && evento.tags.length > 0 && (
                        <View style={detalleEvento_css.infoRow}>
                            <Text style={detalleEvento_css.label}>🏷️ Tags</Text>
                            <Text style={detalleEvento_css.value}>
                                {evento.tags.map(tag => tag.nombre).join(", ")}
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

export function DetalleEventoView({ route }) {
    return (
        <SafeAreaProvider>
            <DetalleEventoContent route={route} />
        </SafeAreaProvider>
    );
}