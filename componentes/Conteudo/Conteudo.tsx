import { Text, View, Image, StyleSheet} from 'react-native';
import Button from '../Button/Button';

type Props = {
  titulo: string,
  corpo: string,
  imagem: object
}

export default function Conteudo(props: Props) {
    return (
        <View style={styles.conteudoMain}>
        <Text style={styles.textTitulo}>{props.titulo}</Text>
        <Image source={props.imagem} style={styles.image}/>
        <Text style={styles.textCorpo}>{props.corpo}</Text>
        





        </View>

    );
}

const styles = StyleSheet.create({
  conteudoMain: {
    flex: 1
  },
  textTitulo: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    backgroundColor: '#EB9A46',
    paddingVertical: 16, 
  }, 
  textCorpo: {
    color: '#000',
    top: 10,
    fontSize: 14,

},
image: {
  width: '100%',
  height: 160
  }
});