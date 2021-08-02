import React, { useState } from 'react';
import { Text, View, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { InputText, Button } from '../../components';
import DatePicker from 'react-native-date-picker'
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import useMode from '../../hooks/useMode';
import { logout } from '../../redux/Slices/authSlice';
import { createMeet } from '../../services/reduxServices'
 
const CreateMeet = () => {
  const { mode } = useMode();
  const user = useSelector(state => state.user);
  // if(!user.mentees.length) throw new Error('No mentees asigned')
  let mentorOrMentee = user.mentees.length ? user.mentees.map(person => ({label: person.name, value: person._id})) 
  : [{name: "un nombre", _id: "un id 8237"}, {name: "otro nombre", _id: "otr id 2342"}]
  console.log('mentorOrMentee: ', mentorOrMentee)
  const [open, setOpen] = useState(false)
  const [participant, setParticipant] = useState(null)
  // const [items, setItems] = useState([{ label: 'Mentee 1', value: 'mentee1' }, { label: 'Mentee 2', value: 'mentee2' }]);
  const [items, setItems] = useState(mentorOrMentee)
  console.log("Items: ", items)
  const [date, setDate] = useState(new Date())
  const { meets } = user;
  //   const navigation = useNavigation();
  const dispatch = useDispatch();

  // dispatch(logout())
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
      if(!data) throw new Error('No data passed through')
      let datas = data
      datas.participants = [user._id, participant]
      datas.date = date
      // await dispatch(createMeet(datas))
      console.log("Presionaste Crear reunión. Data ---> ", data)
    //   console.log("Participant ---> ", participant)

  }

  return (
    <View style={styles.container} onSubmit={onSubmit}>
        <Text style={styles.title}>Crear una reunión</Text>
        {/* <form onSubmit={handleSubmit(data => console.log(data))}> */}
      <Controller
      control={control}
      rules={{ required: 'Campo requerido' }}
      name='title'
      defaultValue=''
      render={({ field: { onChange, onBlur, value } }) => (
        <InputText
          style={styles.input}
          errors={errors.name}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholder="Título de la reunión"
          />)}
        />
    {errors.title && (
        <Text style={styles.error}>Ingrese un título</Text>
    )}
    <Controller
      control={control}
      name='description'
      defaultValue=''
      render={({ field: { onChange, onBlur, value } }) => (
        <InputText
          style={styles.input}
          errors={errors.name}
          onBlur={onBlur} 
          onChangeText={onChange}
          value={value}
          placeholder="Breve descripción"
          />)}
        />
    <Controller
      control={control}
      name='participant'
      defaultValue=''
      render={() => (
        <DropDownPicker
            style={styles.dropDown}
            open={open}
            value={participant}
            items={items}
            setOpen={setOpen}
            setValue={setParticipant}
            setItems={setItems}
            placeholder='Elige con quién'
            placeholderStyle={styles.placeholder}
            />
          )}
        />
    <Controller
        control={control}
        name="date"
        render={({ field: { onChange, onBlur, value } }) => (
            <DatePicker
            style={styles.date}
            date={date}
            onDateChange={setDate}
          />
        )}
      />
    <Button title="Crear" pressFunction={handleSubmit(onSubmit)} />
    {/* <input type='submit'/> */}

      {/* </form> */}
    </View>
  )
};

export default CreateMeet;