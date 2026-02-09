import { Pressable, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { navigationBackBTN_css } from "../css/navigationBackBTN_css";
import icono_atras from '../icons/arrow-bend-up-left.webp';

export function BackBTN() {
    const navigation = useNavigation();

    return (
        <Pressable 
            style={navigationBackBTN_css.contenedor}
            onPress={() => navigation.goBack()}
        >
            <Image 
                style={navigationBackBTN_css.icono}
                source={icono_atras}
            />
        </Pressable>
    );
}