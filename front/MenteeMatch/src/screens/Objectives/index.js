import React, { useEffect, useState } from 'react';
import ObjectivesComponent from '../../components/ObjectivesComponent';
import {
  getObjectivesFromUser,
  postObjectivesToUser,
} from '../../services/axiosServices';
import { useSelector } from 'react-redux';

const Objectives = () => {
  const { userToken } = useSelector(state => state.auth);
  const [data, setdata] = useState([]);

  useEffect(() => {
    const init = async () => {
      const id = '61005bd08627a1b6fc9fd74a';
      const res = await getObjectivesFromUser(id, userToken);
      setdata(res.data);
    };

    init();
  }, []);

  // handlea add
  const handleAdd = async (objective, meenteId) => {
    const res = await postObjectivesToUser(meenteId, userToken, objective);
    console.log('posteado');
  };
  // handel delete
  // handle edit

  return <ObjectivesComponent data={data} handleAdd={handleAdd} />;
};

export default Objectives;
