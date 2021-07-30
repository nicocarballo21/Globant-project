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
  } catch (error) {}
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
};
