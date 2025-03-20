import { Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button() {
    return (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Saiba mais</Text>
        </TouchableOpacity>
      
    );
}

const styles = StyleSheet.create({ 
button: {
    width: 200,
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#EBB246',
    alignSelf: 'center',
    marginHorizontal: 12
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight:'bold'
  }
})