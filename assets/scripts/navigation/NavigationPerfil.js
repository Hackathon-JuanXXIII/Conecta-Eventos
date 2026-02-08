import { Pressable, Image } from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

// Componentes
import { PerfilView } from '../../components/views/PerfilView';
import { ListaEventosView } from "../../components/views/ListaEventosView";

// Iconos
import icono_atras from '../../icons/arrow-bend-up-left.webp'

// propiedad options
const stackoptions = {
    headerTitle: '',           // Quita el texto del título/Pone el titulo sin nada escrito
    headerTransparent: true,   // El header que se "pinta" por el navigation se "fusiona" con el fondo de la app
    headerBackVisible: false,   // Deshabilita la flecha que retorna hacia atras
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export function BackBTN() {
    const navigation = useNavigation()

    return (
        <Pressable 
            onPress={() => navigation.goBack()}
        >
            <Image
                source={icono_atras}
            />
        </Pressable>
    )
}