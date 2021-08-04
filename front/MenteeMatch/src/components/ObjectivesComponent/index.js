import React, { useState } from 'react';
import { Text, View, FlatList, ScrollView, Switch } from 'react-native';
import styles from './styles';
import useMode from '../../hooks/useMode';
import InputText from '../InputText';
import Button from '../Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
import Dialog from 'react-native-dialog';

const Item = ({
  objetive,
  mode,
  state,
  objective_id,
  handleDelete,
  handleEdit,
}) => {
  const [show, setshow] = useState(false);
  const [showModal, setshowmodal] = useState(false);
  const [description, setdescription] = useState(objetive);
  const [newState, setnewstate] = useState(false);
  const toggle = () => setshow(!show);

  return (
    <View style={{ ...styles.item, backgroundColor: mode.inputBg }}>
      <View style={styles.container}>
        <Text style={{ ...styles.title, color: mode.text }}>
          Estado: {state}
        </Text>
        <Text style={{ ...styles.title, color: mode.text }}>- {objetive}</Text>

        <View
          style={{
            borderBottomColor: mode.text,
            borderBottomWidth: 1,
            marginTop: 20,
          }}
        />

        <View style={styles.btns_container}>
          <Button
            icon={
              <Ionicons name="pencil-outline" size={30} color={mode.text} />
            }
            style={styles.btn}
            pressFunction={() => setshowmodal(!showModal)}
          />

          {/* INPUT MODAL */}

          <Dialog.Container visible={showModal}>
            <Dialog.Title>Edita tu objetivo!</Dialog.Title>

            <Dialog.Switch
              label="Completo"
              value={newState}
              onValueChange={() => setnewstate(!newState)}></Dialog.Switch>

            <Dialog.Input
              label="Objetivo"
              value={description}
              onChangeText={setdescription}></Dialog.Input>

            <Dialog.Button label="Cerrar" onPress={() => setshowmodal(false)} />
            <Dialog.Button
              label="Editar"
              onPress={() =>
                handleEdit(objective_id, { description, state: newState }) &&
                setshowmodal(false)
              }
            />
          </Dialog.Container>

          {/* INPUT MODAl */}

          <Button
            icon={<Ionicons name="trash-outline" size={30} color={mode.text} />}
            style={styles.btn}
            pressFunction={() => toggle()}
          />
          <SCLAlert
            show={show}
            onRequestClose={toggle}
            theme="danger"
            title="Atencion!"
            subtitle="Estas por eliminar un objetivo"
            headerIconComponent={
              <Ionicons name="alert-outline" size={32} color="white" />
            }>
            <SCLAlertButton
              theme="info"
              onPress={() => handleDelete(objective_id)}>
              Eliminar
            </SCLAlertButton>
            <SCLAlertButton theme="default" onPress={toggle}>
              Cancelar
            </SCLAlertButton>
          </SCLAlert>
        </View>
      </View>
    </View>
  );
};

const ObjectivesComponent = ({
  data,
  handleAdd,
  handleDelete,
  handleEdit,
  mentee,
}) => {
  const [input, setinput] = useState('');
  const { mode } = useMode();
  const renderItem = ({ item }) => (
    <Item
      objetive={item.description}
      objective_id={item._id}
      state={item.state}
      mode={mode}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );

  return (
    <ScrollView>
      <View style={{ ...styles.container, backgroundColor: mode.bg }}>
        <View style={styles.add_objectives}>
          <InputText
            onChangeText={setinput}
            value={input}
            placeholder="Ingresar objetivo a cumplir"
          />

          <Button title={'Agregar'} pressFunction={() => handleAdd(input)} />
        </View>

        <View style={{ ...styles.content, backgroundColor: mode.bg }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ObjectivesComponent;
