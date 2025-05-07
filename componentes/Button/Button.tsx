import { Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Conteudo from '../Conteudo/Conteudo';


export default function Button() {

    //const [mais, setMais] = useState(true); 
    const [textButton, setTexto] = useState("Ler mais");

    function lerMais() {

      if (textButton === 'Ler mais') {
        setTexto('Lido');
      }

      alert("Você clicou no post")

    }




    return (

        <TouchableOpacity style={styles.button} onPress={lerMais}>
          <Text style={styles.buttonText}>
            {textButton}
          </Text>
        </TouchableOpacity>
      
    );
}

const styles = StyleSheet.create({ 
button: {
    width: 160,
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#EBB246',
 
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight:'bold'
  }
})