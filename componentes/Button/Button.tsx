import { Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Conteudo from '../Conteudo/Conteudo';

type Props = {
  textButton: string,
  colorButton: string
}

export default function Button(props:Props) {

    //const [mais, setMais] = useState(true); 
    const [textButton, setTexto] = useState("Ler mais");
    //const [colorButton, setColor] = useState('#EBB246');

    function lerMais() {

      if (textButton === 'Ler mais') {
        setTexto('Lido');
      }

      alert(`Você clicou no post "${props.textButton}"`)

    }


   {/*function mudarCor() {
      if (styles.button, { backgroundColor: colorButton === '#EBB246'}) {
        setColor('#E05363');
      }
    } */} 


    return (

        <TouchableOpacity style={[styles.button, {backgroundColor : props.colorButton}]} onPress={lerMais}>
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
    //backgroundColor: '#EBB246',
 
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight:'bold'
  }
})