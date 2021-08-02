import generateAxios from '../utils/generateAxios';
import { API_URL } from '@env';

const postUserSkillsToLearn = async (skills, token) => {
  try {
    const server = generateAxios(token);
    const updatedUser = await server.put(API_URL + '/api/users/skills/learn', {
      skillsToLearn: skills,
    });
    return updatedUser;
  } catch (error) {
    console.log(error);
  }
};

const postUserSkillsToTeach = async (skills, token) => {
  try {
    const server = generateAxios(token);
    const updatedUser = await server.put(API_URL + '/api/users/skills/teach', {
      skillsToTeach: skills,
    });
    return updatedUser;
  } catch (error) {
    console.log(error);
  }
};

const getObjectivesFromUser = async (id, token) => {
  try {
    const server = generateAxios(token);
    const objectives = await server.get(
      API_URL + `/api/users/objectives/${id}`,
    );
    return objectives;
  } catch (err) {
    console.log(err);
  }
};

const postObjectivesToUser = async (menteeId, token, description) => {
  try {
    const server = generateAxios(token);
    const res = await server.post(API_URL + '/api/users/objectives', {
      menteeId,
      description,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
const deleteObjectivesToUser = async (menteeId, token, objetiveId) => {
  try {
    const server = generateAxios(token);
    const res = await server.delete(
      API_URL + `/api/users/objectives/${menteeId}/${objetiveId}`,
    );

    return res;
  } catch (err) {
    console.log(err);
  }
};
const updateObjectivesToUser = async (token, objetiveId, data) => {
  try {
    const server = generateAxios(token);
    const res = await server.put(API_URL + `/api/users/objectives`, {
      objetiveId,
      data,
    });

    return res;
  } catch (err) {
    console.log(err);
  }
};

const setMenteeToMentor = async (menteeId, mentorId, token) => {
  try {
    const server = generateAxios(token);
    await server.put(API_URL + '/api/users/mentor', {
      id: menteeId,
      _id: mentorId,
    });
  } catch (error) {
    console.log({ error });
  }
};

export {
  postUserSkillsToLearn,
  postUserSkillsToTeach,
  setMenteeToMentor,
  getObjectivesFromUser,
  postObjectivesToUser,
  deleteObjectivesToUser,
  updateObjectivesToUser,
};
