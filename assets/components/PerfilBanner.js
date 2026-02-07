import { View, Text, Image } from 'react-native';

import { perfilBanner_css } from "../css/perfilBanner_css";

export function PerfilBanner({nombre, url_avatar}) {
    return (
        <View style={perfilBanner_css.contenedor}>
            <View style={perfilBanner_css.contenedorTexto}>
                <Text style={perfilBanner_css.welcome}>Bienvenido,</Text>
                <Text style={perfilBanner_css.welcomeNombre}>{nombre}</Text>
            </View>
            <View style={perfilBanner_css.contenedorAvatar}>
                <Image style={perfilBanner_css.avatar}
                    source={{uri: url_avatar}}
                />
            </View>
        </View>
    )
}