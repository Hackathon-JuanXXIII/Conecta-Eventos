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

export function TileEvento({onPress, nombre, id_categoria, imagen, categoria, tags}) {
    const coloresTags = ['#D3E6FE', '#FFD1C7', '#C2F0D5'];

    return (
        <Pressable style={tileEvento_css.contenedorEvento_base} 
            onPress={onPress}
            id_categoria={id_categoria}
        >
            <View>
                <Image style={tileEvento_css.imagenEvento}
                    source={imagen}
                />
            </View>
            <View style={tileEvento_css.separator}></View>
            <View style={tileEvento_css.descEvento}>
                <Text style={tileEvento_css.nombreEvento}>
                    {nombre}
                </Text>
                <Text style={tileEvento_css.categoriaEvento}>
                    {categoria}
                </Text>
                <View style={tileEvento_css.tagsEvento}>
                    {/* Recorro el array de tags e itero sobre él, pero antes trocear el array para que solo haya 3 objetos en él*/}
                    {/* Se pone el interrogante a la derecha del array para que en el caso de que el array no contenga nada no ejecute `for`*/}
                    {tags.length != 0 ? (
                       tags?.slice(0, 3).map((tag, index) => (
                            <Text key={index} style={{gap: 5, color: coloresTags[index]}}>
                                #{tag}
                            </Text>
                        )) 
                    ) : (
                        <Text style={{}}>
                            Sin etiquetas
                        </Text>
                    )}
                </View>
            </View>
        </Pressable>
    )
}