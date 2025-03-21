import { Text, View, StyleSheet} from 'react-native';
import { headerStyle } from './HeaderStyle';

export default function Header() {
    return (
        <View style={headerStyle.header}>
            <Text style={headerStyle.headerText}>Só viagens</Text>
        </View>
    );
}

