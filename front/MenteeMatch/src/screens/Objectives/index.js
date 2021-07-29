import React, { useEffect, useState } from 'react';
import ObjectivesComponent from '../../components/ObjectivesComponent';
import { getObjectivesFromUser } from '../../services/axiosServices';
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

  //handlea add

  return <ObjectivesComponent data={data} />;
};

export default Objectives;
