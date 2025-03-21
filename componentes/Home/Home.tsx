import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import Card from '../../componentes/Card/Card';

export default function Button() {
    return (
<View style={styles.container}>
      <StatusBar style='auto' />
      
      <Header/>   
        
        <Card/>
        <Card/>
      
      <Footer/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
    
  
    
  
  });