import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors } from '../global/styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { filterData } from '../global/data'


// used inside SearchScreen, looks like typeahead
const SearchComponent = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const [data, setData] = useState(filterData) // changes on every search change
  const [filteredData, setFilteredData] = useState<any[]>([])  // this state is used for save filtered data from data state

  useEffect(() => {
    const filtered = data.filter((item) => {
      return item.name.toLowerCase().includes(searchInput)
    }) 
    setFilteredData(filtered)
  }, [searchInput])
  
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback style={styles.inputTouch}
          onPress={() => setModalVisible(true)} >
        <Ionicons name="search" size={22} />
        <Text style={{fontSize:16, color:colors.grey2, margin:6}}>
          What are you looking for?
        </Text>
      </TouchableWithoutFeedback>
      <Modal animationType='fade' transparent={false}
          visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback 
                onPress={() => setModalVisible(false)} >
              <Ionicons name='arrow-back' size={20} />
            </TouchableWithoutFeedback>
            <TextInput style={styles.input}
              autoFocus placeholder='Search'
              value={searchInput}
              onChangeText={(val) => setSearchInput(val)}
            />
            <TouchableOpacity style={{backgroundColor:colors.grey3, borderRadius:50}}
                onPress={() => setSearchInput("")} >
              <Ionicons name='close' size={18} color="white" />
            </TouchableOpacity>
          </View>
          {/* {console.log} */}
          <FlatList
            data={filteredData}
            renderItem={({item}) => {
              return <TouchableOpacity>
                <Text style={styles.foundItem}>{item.name}</Text>
              </TouchableOpacity>
            }}
          />
        </View>
      </Modal>
    </View>
  )
}

export default SearchComponent

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputTouch: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grey5,
    paddingHorizontal: 4,
    margin: 4,
    shadowColor: "black",
    shadowOffset: {width:0, height:0},
    shadowRadius: 5,
    shadowOpacity: 0.5,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    margin: 4,
    borderColor: colors.grey3,
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: {width:0, height:0},
    shadowRadius: 4,
    shadowOpacity: 0.5,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 8,
    outlineStyle: "none",
  },
  modal: {
  },
  foundItem: {
    fontSize: 18,
    color: colors.grey1,
    margin: 8,
  }
})