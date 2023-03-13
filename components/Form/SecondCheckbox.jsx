import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

export default function SecondCheckbox({checkbox}) {

  const handleChange = (id) => {
    let temp = checkbox.map((box) => {
      if (id === box.id) {
        return { ...box, isChecked: !box.isChecked }
      }
      return box;
    })
    setCheckbox(temp);
  };
  
  let selected = checkbox.filter((selectedBox) => selectedBox.isChecked);

  return (
    <View style={styles.container}>

        <FlatList
          data={checkbox}
          renderItem={({ item }) =>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={item.isChecked}
                keyExtractor={item => item.id}
                onValueChange={() => handleChange(item.id)}
              />
              <Text>{item.name}</Text>
            </View>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});