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
import { pushMeet } from '../../redux/Reducers/meetsReducer'

const CreateMeet = ({navigation}) => {

  const { mode } = useMode();
  const user = useSelector(state => state.user);
  let mentorOrMentee = user.mentees.length ? user.mentees.map(person => ({label: person.name + ' ' + person.surname, value: person._id})) 
  : [{label: "un nombre", value: "un id 8237"}, {label: "otro nombre", value: "otro id 2342"}]
  console.log('mentorOrMentee: ', mentorOrMentee)
  const [open, setOpen] = useState(false)
  const [participant, setParticipant] = useState(null)
  const [items, setItems] = useState(mentorOrMentee)
  console.log("Items: ", items)
  const [date, setDate] = useState(new Date())
  const dispatch = useDispatch();

  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if(!data) throw new Error('No data passed through')
      let datas = data
      datas.participants = [user._id, participant]
      datas.date = date
      await dispatch(pushMeet(datas))
      // console.log("Presionaste Crear reunión. Data ---> ", datas)
      navigation.navigate('Meets')
    } catch(err) { console.log(err) }
  }

  return user.mentees.length ? (
    <View style={{...styles.module, backgroundColor: mode.bg}}>
    <View style={{...styles.container, backgroundColor: mode.bg}} onSubmit={onSubmit}>
        <Text style={{...styles.title, color: mode.text}}>Crear una reunión</Text>
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
          style={{...styles.input, backgroundColor: mode.bg}}
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
            style={{...styles.dropDown, backgroundColor: mode.bg}}
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
            style={{...styles.date, backgroundColor: mode.bg}}
            date={date}
            onDateChange={setDate}
          />
        )}
      />
    <Button title="Crear" pressFunction={handleSubmit(onSubmit)} />
    </View>
    </View>
  )
  :
  <View style={{...styles.notContainer, backgroundColor: mode.bg}}>
    <Text style={{...styles.not, color: mode.text}}>Para crear una reunión, debes tener al menos un mentee/mentor asignado.</Text>
    <Button title={user.isMentor ? 'Buscar Mentees' : 'Buscar Mentor'} pressFunction={() => navigation.navigate('Matcher')} />
  </View>
} 

export default CreateMeet;