import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { colors } from '../global/styles'
import { filterData } from '../global/data'


// used inside SearchScreen, looks like typeahead
const SearchComponent = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const [data, setData] = useState(filterData) // changes on every search change
  const [filteredData, setFilteredData] = useState<any[]>([])  // this state is used for save filtered data from data state
  const [textInputFocused, setTextInputFocused] = useState(true) //

  useEffect(() => {
    // filter search data on every searchInput change
    const filtered = data.filter((item) => {
      return item.name.toLowerCase().includes(searchInput)
    }) 
    setFilteredData(filtered)
  }, [searchInput])
  
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
        <View style={styles.inputTouch}>
          <Ionicons name="search" size={22} />
          <Text style={{fontSize:16, color:colors.grey2, margin:6}}>
            What are you looking for?
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType='fade' transparent={false}
          visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.inputContainer}>
            {textInputFocused ? (
              <Ionicons name='search' size={20} />
            ):(
              <Ionicons name='arrow-back' size={20}
                onPress={() => setModalVisible(false)}
              />
            )}
            <TextInput style={styles.input}
              autoFocus placeholder='Search'
              value={searchInput}
              onChangeText={(val) => setSearchInput(val)}
              onFocus={() => setTextInputFocused(true)}
              onBlur={() => setTextInputFocused(false)}
            />
            <TouchableOpacity onPress={() => setSearchInput("")} >
              <MaterialIcons name='cancel' size={22} color={colors.grey1} />
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
    // flex: 1
  },
  inputTouch: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grey5,
    paddingVertical: 4,
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