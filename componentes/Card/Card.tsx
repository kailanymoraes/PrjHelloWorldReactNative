import { Text, View, Image, StyleSheet} from 'react-native';
import Button from '../Button/Button';
import Conteudo from '../Conteudo/Conteudo';
import sp from '../../assets/saoPaulo.jpg'
import rio from '../../assets/RioDeJaneiro.jpg'


export default function Card() {
    return (
        <View style={styles.post}>
            <Conteudo titulo="São Paulo" corpo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, commodi cum aliquam ab blanditiis molestias, quod totam eum atque vitae deleniti, fugiat mollitia beatae obcaecati repellat nisi repellendus suscipit saepe."
            imagem={sp}/>
            <Button textButton='São Paulo' colorButton='#E05363'/>

            <Conteudo titulo="Rio de Janeiro" corpo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, commodi cum aliquam ab blanditiis molestias, quod totam eum atque vitae deleniti, fugiat mollitia beatae obcaecati repellat nisi repellendus suscipit saepe."
            imagem={rio}/>
            <Button textButton='Rio de Janeiro' colorButton='#E05363'/>

        </View>

    );
}

const styles = StyleSheet.create({
post: {
    flex:4
  }
  
  
})