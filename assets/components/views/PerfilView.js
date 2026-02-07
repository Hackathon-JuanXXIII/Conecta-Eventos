import { StatusBar } from 'expo-status-bar'
import { View, Alert } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';	// npx expo install react-native-safe-area-context`
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PerfilBanner } from '../PerfilBanner'
import { Tile, TileExtra } from '../Tiles'

import { perfilView_css } from "../../css/perfilView_css";

import icono_buscar from '../../icons/search.webp';
import icono_calendario from '../../icons/calendar-plus.webp';
import icono_ticket from '../../icons/ticket.webp';
import icono_gear from '../../icons/gear.webp';
import icono_amigos from '../../icons/user-list.webp';

const nombre_perfil_prueba = 'Nombre del login supongo'
const imagen_perfil_prueba = 'https://vanwinefest.ca/wp-content/uploads/bfi_thumb/profile-default-male-nyg4vc4i3m1d5pote7rfsv4o4c7p5ka5an0pselxcc-nyhjt6b1oifa23xq2ehfxoh9vink6vuxyns1y35vkc.png'

const mostrarAlerta = () => {
	Alert.alert('¡Funciona!', 'El componente responde');
};

function PerfilContent({nombre_perfil, imagen_perfil}) {
	const insets = useSafeAreaInsets(); // Obtenemos los márgenes seguros (esdecir que no obstaculizan): EJ: barra notificaciones

	return (
		<View style={[perfilView_css.screen, { paddingTop: insets.top }]}>
			<StatusBar style="auto" />

			<PerfilBanner
				nombre={nombre_perfil_prueba}
				url_avatar={imagen_perfil_prueba}
			/>

			<View style={perfilView_css.container_Tiles}>
				<Tile onPress={mostrarAlerta}
					icono={icono_buscar}
					titulo='Eventos'
					desc='Encuentra el evento perfecto para ti'
				/>
				<Tile onPress={mostrarAlerta}
					icono={icono_calendario}
					titulo='Crear un evento'
					desc='Dale forma a tu evento'
				/>
				<Tile onPress={mostrarAlerta}
					icono={icono_ticket}
					titulo='Mis eventos'
					desc='Tus eventos, a una pulsación'
				/>
			</View>

			<View style={perfilView_css.container_TilesExtra}>
				<TileExtra onPress={mostrarAlerta}
					icono={icono_amigos}
					titulo='Tus amigos'
				/>
				<TileExtra onPress={mostrarAlerta}
					icono={icono_gear}
					titulo='Configuración'
				/>
			</View>
		</View>
	);
}

export function PerfilView() {
	return (
		<SafeAreaProvider>
			<PerfilContent />
		</SafeAreaProvider>
	)
}