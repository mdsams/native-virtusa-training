import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');
import Button from './ButtonComponent';
import SearchComponent from './SearchComponent';

export default function HomePage() {
	return (
		<SafeAreaView style={styles.mainContainer}>
			<View style={styles.contentContainer}>
				<SearchComponent />
				<Text style={styles.container}>Welcome to React Native</Text>
				<Image source={require('../assets/images/virtusaIcon.jpeg')} style={styles.logo} resizeMode='contain' />
				<View style={styles.buttonAlign}>
					<Button onPress={() => console.log('save is pressed')} />
					<Button onPress={() => console.log('exit is pressed')} title='Exit' color='red' />
				</View>
				<Text style={styles.footer}>Developed By Shams</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	contentContainer: {
		padding: 10,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	container: {
		marginTop: height * 0.03,
		backgroundColor: '#D2E3FC',
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 25,
		marginVertical: 10,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	logo: {
		width: width * 0.9,
		height: height * 0.3,
		alignSelf: 'center',
		borderRadius: 20,
		marginVertical: height * 0.05,
	},
	buttonAlign: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 20,
		paddingHorizontal: 20,
		width: '100%',
	},
	footer: {
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 'auto',
		backgroundColor: '#CEEAD6',
		paddingVertical: 20,
		borderRadius: 10,
	},
});
