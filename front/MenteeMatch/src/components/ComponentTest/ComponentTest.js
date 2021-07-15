import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux';
import styles from './styles';

const ComponentTest = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUser({}))
  }, [])

  return (
    <View style={styles.details}>
      <Text style={styles.text}>Testing</Text>
      <Text style={styles.text}>in progress...</Text>
    </View>
  )
}

export default ComponentTest
