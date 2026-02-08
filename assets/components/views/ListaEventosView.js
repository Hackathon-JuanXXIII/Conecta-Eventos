import { View, Text } from "react-native";

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { BackBTN } from "../../scripts/navigation/NavigationPerfil";

function ListaEventosContent() {
    const insets = useSafeAreaInsets();

    return (
        <View style={{paddingTop: insets.top}}>
            <BackBTN/>
            
            <Text>Prueba</Text>
        </View>
    )
}

export function ListaEventosView() {
    return (
        <SafeAreaProvider>
            <ListaEventosContent />
        </SafeAreaProvider>
    )
}