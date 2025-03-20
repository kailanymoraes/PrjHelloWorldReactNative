import { Text, View, StyleSheet} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Só viagens</Text>
        </View>
    );
}

const styles = StyleSheet.create({ 
    header: {
        width: '100%',
        flex: 0.5,
        backgroundColor: '#ffeab2',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 22
      },
      headerText: {
        color: '#000',
        fontSize: 30
      },
});
