import { View, Text, Image } from 'react-native';

import { profileBanner_css } from "../css/profileBanner_css";

export function ProfileBanner({nombre, url_avatar}) {
    return (
        <View style={profileBanner_css.contenedor}>
            <View style={profileBanner_css.contendorTexto}>
                <Text style={profileBanner_css.welcome}>Bienvenido,</Text>
                <Text style={profileBanner_css.welcomeNombre}>{nombre}</Text>
            </View>
            <View style={profileBanner_css.contenedoAvatar}>
                <Image style={profileBanner_css.avatar}
                    source={{uri: url_avatar}}
                />
            </View>
        </View>
    )
}