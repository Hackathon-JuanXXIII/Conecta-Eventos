import { useState } from 'react';

import { View, Pressable, Text, Image } from 'react-native';

// Estilos CSS
import { tile_css, tileExtra_css, tileEvento_css } from '../css/tiles_css';

export function Tile({onPress, icono, titulo, desc}) {
    return (
        <Pressable style={tile_css.contenedor}
            onPress={onPress}
        >
            <View style={tile_css.contenedorIcono}>
                <Image style={tile_css.icono}
                    source={icono}
                />
            </View>
            <View style={tile_css.contendorTexto}>
                <Text style={tile_css.texto_titulo}>{titulo}</Text>
                <Text style={tile_css.texto}>{desc}</Text>
            </View>
        </Pressable>
    )
}

export function TileExtra({onPress, icono, titulo}) {
    return (
        <Pressable style={tileExtra_css.contenedor}
            onPress={onPress}
        >
            <View style={tileExtra_css.contenedoIcono}>
                <Image style={tileExtra_css.icono}
                    source={icono}
                />
            </View>
            <View style={tileExtra_css.contendorTexto}>
                <Text style={tileExtra_css.texto_titulo}>{titulo}</Text>
            </View>
        </Pressable>
    )
}

export function TileEvento({onPress, id, nombre, id_categoria, imagen, categoria, tags}) {
    const coloresTags = {
        1: '#BCE2D3', // Deportes
        2: '#F9B9D0', // Música
        3: '#B3D4F4', // Tecnología
        4: '#C5A99B', // Arte
        5: '#FDC49D', // Gastronomía
        6: '#9ADBD4', // Educación
        7: '#D7B9F1', // Cine
        8: '#A3EBF3', // Viajes

        // EXTRA
        9: '#E9D2B5',  // Literatura
        10: '#CDE5A6', // Naturaleza
        11: '#B0BEC5', // Ciencia
        12: '#E18BB0', // Moda
        13: '#BFC5E8', // Videojuegos
        14: '#F9ACAA', // Ocio/Social
    }

    const colorTag = coloresTags[id_categoria] || '#C1D9F9'

    const coloresCategorias = {
        1: '#5BAC8B', // Deportes
        2: '#EF4F85', // Música
        3: '#4A90E2', // Tecnología
        4: '#795548', // Arte
        5: '#F88741', // Gastronomía
        6: '#26A69A', // Educación
        7: '#9B51E0', // Cine
        8: '#00BCD4', // Viajes

        // EXTRA
        9: '#D4A373', // Literatura
        10: '#8BC34A', // Naturaleza
        11: '#607D8B', // Ciencia
        12: '#C2185B', // Moda
        13: '#3F51B5', // Videojuegos
        14: '#F44336', // Ocio/Social
    }

    const colorTileEvento = coloresCategorias[id_categoria] || '#5099F8'

    return (
        <Pressable style={[tileEvento_css.contenedorEvento_base, {backgroundColor: colorTileEvento}]} 
            onPress={onPress}
            id_categoria={id_categoria}
        >
            <View>
                <Image style={tileEvento_css.imagenEvento}
                    source={imagen}
                />
            </View>
            <View style={tileEvento_css.separator}></View>
            <View style={[tileEvento_css.descEvento, {gap: 10}]}>
                <Text style={tileEvento_css.nombreEvento}>
                    {nombre}
                </Text>
                <Text style={tileEvento_css.categoriaEvento}>
                    {categoria}
                </Text>
                <View style={tileEvento_css.tagsEvento}>
                    {/* Recorro el array de tags e itero sobre él, pero antes trocear el array para que solo haya 3 objetos en él*/}
                    {/* Se pone el interrogante a la derecha del array para que en el caso de que el array no contenga nada no ejecute `for`*/}
                    {tags?.slice(0, 3).map((tag, index) => (
                            <Text key={index} style={{gap: 5, backgroundColor: colorTag}}>
                                #{tag}
                            </Text>
                        )) 
                    }
                </View>
            </View>
        </Pressable>
    )
}