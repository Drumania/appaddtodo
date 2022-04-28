import {View,TextInput,Text,FlatList,StyleSheet,Modal} from 'react-native'
import Item from '../Components/Item'
import {colors} from '../Styles/Colors'
import { useState } from 'react'
import ButtonCustom from '../Components/ButtonCustom'
import { TouchableOpacity } from 'react-native-web'

const Layout = () => {

  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [idSelected, setIdSelected] = useState('');

  const handleAdd = () => {
    if ( input !== ""){
      setTodoList([...todoList,{id: Date.now(), todo: input}])
      setInput("");
    }
  }

  const handleModal = (id) => {
    setModalVisible(true);
    setIdSelected(id)
  }

  const handleDelete = () => {
    const todosFiltrados = todoList.filter(item => item.id !== idSelected)
    setTodoList(todosFiltrados)
    setModalVisible(false)
  }
  

  const renderTodo = ({item}) => <Item item={item} onPress={handleModal} ></Item>;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextInput 
          placeholder='add items'
          style={styles.input}
          onChangeText={setInput}
          value={input}
        />
        <ButtonCustom onPress={handleAdd} />
      </View>
      <View style={styles.itemList}>
        {todoList.length !== 0 ?
        <FlatList
          data={todoList}
          keyExtractor={todo => todo.id }
          renderItem={renderTodo}
        >
        </FlatList>
        :
        <Text>not ToDo</Text>
        }
      </View>
          
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={()=>setModalVisible(false)}>
              <Text style={styles.textContainer}>Cerrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <Text>Delete Todo</Text>
            </TouchableOpacity>            
          </View>
        </Modal>

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
    height: '100%'
  },
  topContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.2
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
    flex: 0.8
  },
  modalContainer: {
    backgroundColor: colors.secundary,  
    margin: '5%',
    height: '90%',
    width: '90%',
  },
  textContainer: {
    color: colors.white,  
  },
})