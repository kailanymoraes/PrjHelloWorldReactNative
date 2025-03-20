import { Text, View, Image, StyleSheet} from 'react-native';
import Button from '../Button/Button';

export default function Card() {
    return (
        <View style={styles.post}>
        <Text style={styles.headerPost}>São Paulo</Text>

        <Image style={styles.imagesp}
          source={require('./assets/saoPaulo.jpg')}
          resizeMode='cover' />

        <Text style={styles.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, commodi cum aliquam ab blanditiis molestias, quod totam eum atque vitae deleniti, fugiat mollitia beatae obcaecati repellat nisi repellendus suscipit saepe.</Text>
        {/* <Button title="Saiba mais" color="#EBB246"></Button> */}

        <Button/>

        </View>

    );
}

const styles = StyleSheet.create({
post: {
    flex: 2
  },
  headerPost: {
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
  imagesp: {
    width: 'auto',
    height: 100,
    borderWidth: 1,
  }
})