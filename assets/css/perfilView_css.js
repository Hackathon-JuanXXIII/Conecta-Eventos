import { StyleSheet } from 'react-native';

export const perfilView_css = StyleSheet.create({
	screen: {
		flex: 1, // Expándete para llenar todo el espacio libre que deje tu padre, para que no se superpongan los diversos componentes

		alignItems: 'center',
		justifyContent: 'space-around'
	},
	container_Tiles: {
		flex: 1,
		width: '100%',

		alignItems: 'center',
		justifyContent: 'space-around'
	},
	container_TilesExtra: {
		flexDirection: 'row',
		alignItems: 'center',

		gap: 25,
	}
});