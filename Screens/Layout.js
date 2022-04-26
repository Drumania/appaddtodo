import {View,TextInput,Text,TouchableOpacity,StyleSheet} from 'react-native'
import Item from '../Components/Item'
import {colors} from '../Styles/Colors'
import { useState } from 'react'
import ButtonCustom from '../Components/ButtonCustom'

const Layout = () => {

  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextInput 
          placeholder='add items'
          style={styles.input}
          onChangeText={setInput}
          value={input}
        />
        <ButtonCustom />
      </View>
      <View style={styles.itemList}>
          <Item item = {{id: 1, todo: "Estudiar React Native"}}></Item>
          <Item item = {{id: 2, todo: "Estudiar React"}}></Item>
          <Item item = {{id: 3, todo: "Estudiar Bootstrap"}}></Item>
          <Item item = {{id: 3, todo: "Ver tutoriales indios"}}></Item>
      </View>
    </View>  
  )
}

export default Layout

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,    
  },
  topContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    width: 200,
    marginRight: 10,
    height: 40,
    paddingHorizontal: 8,
    fontSize: 20
  },
  itemList: {
    backgroundColor: colors.primary,
    width: '95%',
    padding: 20,
  }
})