import React, { useEffect, useState } from 'react';
import ObjectivesComponent from '../../components/ObjectivesComponent';
import {
  getObjectivesFromUser,
  postObjectivesToUser,
} from '../../services/axiosServices';
import { useSelector } from 'react-redux';

const Objectives = ({ route }) => {
  const mentee = route.params.mente;

  const { userToken } = useSelector(state => state.auth);
  const [data, setdata] = useState([]);

  useEffect(() => {
    const init = async () => {
      const id = mentee._id;
      const res = await getObjectivesFromUser(id, userToken);
      setdata(res.data);
    };

    init();
  }, []);

  // handlea add
  const handleAdd = async objective => {
    const res = await postObjectivesToUser(mentee._id, userToken, objective);
    console.log('posteado', res);
  };
  // handel delete
  // handle edit

  return (
    <ObjectivesComponent data={data} handleAdd={handleAdd} mentee={mentee} />
  );
};

export default Objectives;
