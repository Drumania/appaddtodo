import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../Styles/Colors'

const Item = ({item, onPress}) => {
  return (
    <View style = {styles.itemContainer}>
      <TouchableOpacity onPress={()=>onPress(item.id)}>
        <Text style = {styles.text}>{item.todo}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.secundary,
        padding: 15,
        borderRadius: 10,
        marginBottom: 15
    },
    text:{
        color: colors.white,
        fontSize: 20
    }
})