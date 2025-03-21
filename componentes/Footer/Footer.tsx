import { Text, View, StyleSheet} from 'react-native';
import { footerStyle } from './FooterStyle';

export default function Footer() {
    return (
        <View style={footerStyle.footer}>
        <Text style={footerStyle.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </View>
    );
}


