import { Text, View, StyleSheet} from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
        <Text style={styles.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </View>
    );
}

const styles = StyleSheet.create({ 
    footer: {
        width: '100%',
        flex: 0.4,
        backgroundColor: '#ffeab2',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textPost: {
        fontSize: 14,
    }
});
