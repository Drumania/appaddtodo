import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Styles/Colors'

const Item = ({item}) => {
  return (
    <View style = {styles.itemContainer}>
      <Text style = {styles.text}>{item.todo}</Text>
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