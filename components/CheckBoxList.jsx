import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

const CheckBoxList = () => {
  const [checkbox, onChangeCheckbox] = useState([
    { id: 1, name: 'prenatal', isChecked: false },
    { id: 2, name: 'postpartum', isChecked: true },
    { id: 3, name: 'managing chronic pain', isChecked: false },
    { id: 4, name: 'recently started hormone therapy', isChecked: false },
    { id: 5, name: 'undergoing top surgery (or have in the recent past)', isChecked: false },
    { id: 6, name: 'recovering from an injury', isChecked: false },
    { id: 7, name: 'losing weight for medical reasons', isChecked: false }
  ]);

  const Item = ({ name }) => {
    const [toggleCheckBoxList, setToggleCheckBoxList] = useState(false);

    return (
      <View
        style={styles.container}
      >
        <Checkbox
          disabled={false}
          value={toggleCheckBoxList}
          onValueChange={(newValue) => setToggleCheckBoxList(newValue)}
        />
        <Text
          style={styles.text}
        >{name}</Text>
      </View>
    )
  }

  const renderItem = ({ item }) => (
    <Item name={item.name} />
  )

  return (
    <View>
      <Text>check all that apply to you</Text>
      <View
        style={styles.container}
      >
        <FlatList
          data={checkbox}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default CheckBoxList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
})