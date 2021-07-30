import React, { useEffect, useState } from 'react';
import ObjectivesComponent from '../../components/ObjectivesComponent';
import {
  getObjectivesFromUser,
  postObjectivesToUser,
  deleteObjectivesToUser,
} from '../../services/axiosServices';
import { useSelector } from 'react-redux';
import { simpleMessage } from '../../utils';

const Objectives = ({ route }) => {
  const mentee = route.params.mente;

  const { userToken } = useSelector(state => state.auth);
  const [data, setdata] = useState([]);
  const [state, setstate] = useState(false); // ver como hacer el re render de una forma no tan hardcodeada

  useEffect(() => {
    const init = async () => {
      const res = await getObjectivesFromUser(mentee._id, userToken);
      setdata(res.data);
    };

    init();
  }, [state]);

  const handleAdd = async objective => {
    const res = await postObjectivesToUser(mentee._id, userToken, objective);

    if (res) {
      simpleMessage(
        'Objetivo agregado',
        'El objetivo fue agregado correctamente',
        'success',
      );
      setTimeout(() => {
        setstate(!state);
      }, 1000);
    }
  };

  const handleDelete = async objetiveId => {
    const res = await deleteObjectivesToUser(mentee._id, userToken, objetiveId);
    if (res) setstate(!state);
  };

  const handleEdit = objectiveId => {
    console.log(objectiveId);
  };

  return (
    <ObjectivesComponent
      data={data}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      mentee={mentee}
    />
  );
};

export default Objectives;
