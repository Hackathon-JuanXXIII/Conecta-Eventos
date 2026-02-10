import { Pressable, Image } from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

// Componentes
import { PerfilView } from '../../components/views/PerfilView';
import { ListaEventosView } from "../../components/views/ListaEventosView";
import { DetalleEventoView } from "../../components/views/DetallesEvento";

// Estilos CSS
import { navigationBackBTN_css } from "../../css/navigationBackBTN_css";

// Iconos
import icono_atras from '../../icons/arrow-bend-up-left.webp'

// propiedad options
const stackoptions = {
    headerShown: false,   // Deshabilita/Quita el header que dibuja por defecto, y todos sus "relacionados"
}

const Stack = createNativeStackNavigator();

export function NavigationPerfil() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Definimos la ruta al componente */}
                <Stack.Screen 
                    name='PerfilView'
                    component={PerfilView}
                    options={stackoptions}
                />

                <Stack.Screen
                    name='ListaEventosView'
                    component={ListaEventosView}
                    options={stackoptions}
                />

                <Stack.Screen
                    name='DetalleEventoView'
                    component={DetalleEventoView}
                    options={stackoptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}