import React from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchComponent = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Icon name='search' size={24} color='#000' style={styles.icon} />
			</TouchableOpacity>

			<TextInput style={styles.input} placeholder='Search...' placeholderTextColor='#999' />

			<Image source={require('../assets/images/react-logo.png')} style={styles.logo} resizeMode='contain' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#D2E3FC',
		borderRadius: 100,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginHorizontal: 10,
	},
	icon: {
		marginRight: 10,
	},
	input: {
		flex: 1,
		fontSize: 16,
		color: '#333',
	},
	logo: {
		width: 30,
		height: 30,
		marginLeft: 10,
	},
});

export default SearchComponent;
