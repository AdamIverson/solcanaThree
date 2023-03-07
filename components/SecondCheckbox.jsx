import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

const checkboxData = [
  { id: 1, name: 'prenatal', isChecked: false },
  { id: 2, name: 'postpartum', isChecked: false },
  { id: 3, name: 'managing chronic pain', isChecked: false },
  { id: 4, name: 'recently started hormone therapy', isChecked: false },
  { id: 5, name: 'undergoing top surgery (or have in the recent past)', isChecked: false },
  { id: 6, name: 'recovering from an injury', isChecked: false },
  { id: 7, name: 'losing weight for medical reasons', isChecked: false }
];

export default function SecondCheckbox({checkbox}) {
  console.log('checkbox prop in SecondCheckbox:', checkbox);

  // const [checkbox, setCheckbox] = useState(checkboxData);

  const handleChange = (id) => {
    // console.log(options);
    let temp = checkbox.map((box) => {
      if (id === box.id) {
        return { ...box, isChecked: !box.isChecked }
      }
      // console.log(box);
      return box;
    })
    setCheckbox(temp);
  };
  
  let selected = checkbox.filter((selectedBox) => selectedBox.isChecked);
  console.log('selected:', selected);
  // console.log('options:', options);

  return (
    <View style={styles.container}>

        <FlatList
          data={checkboxData}
          renderItem={({ item }) =>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={selected.isChecked}
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
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});