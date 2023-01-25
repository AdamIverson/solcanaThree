import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firestoreDB/firestore';

const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const openModal = () => {
    setModalVisible(!modalVisible);
  }

  const submitForm = async () => {
    try {

      const docRef = await addDoc(collection(db, "contacts"), {
        first: name,
        phone: phone,
        email: email,
        message: message
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setName("");
    setEmail("");
    setModalVisible(!modalVisible);
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <TouchableWithoutFeedback
          onPress={openModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>It's So Nice To Meet You!</Text>
              <TextInput
                style={styles.textInput}
                placeholder='name'
                value={name}
                onChangeText={setName} />
              <TextInput
                style={styles.textInput}
                placeholder='phone'
                value={phone}
                onChangeText={setPhone} />
              <TextInput
                required
                style={styles.textInput}
                placeholder='email'
                value={email}
                onChangeText={setEmail} />
              <TextInput
                style={styles.textInput}
                placeholder='message'
                value={message}
                onChangeText={setMessage} />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={submitForm}
              >
                <Text style={styles.modalText}>submit form</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen, styles.contact]}
        onPress={openModal}
      >
        <Text style={styles.textStyle}>Contact Us</Text>
      </Pressable>
    </View>
  )
}

export default ModalComponent

const styles = StyleSheet.create({
  contact: {
    position: "absolute",
    bottom: 100,
    left: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#66A0C5",
  },
  buttonClose: {
    backgroundColor: "#66A0C5",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textInput: {
    width: 200,
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
    padding: 10,
    borderRadius: 25
  }
})