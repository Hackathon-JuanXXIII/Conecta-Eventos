import { registerRootComponent } from 'expo';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Componentes
import { PerfilView } from '../../components/views/PerfilView';
import { ListaEventosView } from "../../components/views/ListaEventosView";


const Stack = createNativeStackNavigator();

export function NavigationPerfil() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Definimos la ruta al componente */}
                <Stack.Screen 
                    name='PerfilView'
                    component={PerfilView}
                />

                <Stack.Screen
                    name='ListaEventosView'
                    component={ListaEventosView}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}