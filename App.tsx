import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet,  Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <View style={styles.header}>
        <Text style={styles.headerText}>Só viagens</Text>
      </View>

      <View style={styles.post}>
        <Text style={styles.headerPost}>São Paulo</Text>
        <Text style={styles.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, commodi cum aliquam ab blanditiis molestias, quod totam eum atque vitae deleniti, fugiat mollitia beatae obcaecati repellat nisi repellendus suscipit saepe.</Text>
        {/* <Button title="Saiba mais" color="#EBB246"></Button> */}

      
      <Image source={require('./assets/saoPaulo.jpg')}
      style={{width:200, height:100, alignItems: 'center'}}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Saiba mais</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.post}>
        <Text style={styles.headerPost}>Rio de Janeiro</Text>
        <Text style={styles.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, commodi cum aliquam ab blanditiis molestias, quod totam eum atque vitae deleniti, fugiat mollitia beatae obcaecati repellat nisi repellendus suscipit saepe.</Text>
          {/* <Button title="Saiba mais" color="#EBB246"></Button> */}

          <Image source={require('./assets/RioDeJaneiro.jpg')}
      style={{width:200, height:100, justifyContent: 'center'}}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Saiba mais</Text>
        </TouchableOpacity>
      </View>    

      <View style={styles.footer}>
        <Text style={styles.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    flex:1,
    backgroundColor: '#ffeab2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 22
  },
  headerText: {
    color: '#000',
    fontSize: 30
  },
  post: {
    flex: 2
  },
  headerPost : {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#EB9A46',
    paddingVertical: 12
  },
  textPost: {
    fontSize: 14,
    padding: 12
  },
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
    fontWeight: 'bold'
  },
  footer: {
    width: '100%',
    flex:0.7,
    backgroundColor: '#ffeab2',
    justifyContent: 'center',
    alignItems: 'center',
    
  }

});
