import generateAxios from '../utils/generateAxios';
import { API_URL } from '@env';
import { simpleMessage } from '../utils';

const getNotes = async (token, menteeId) => {
  try {
    const server = generateAxios(token);
    const notes = await server.get(API_URL + `/api/users/notes/${menteeId}`);
    return notes;
  } catch (err) {
    console.log(err);
  }
};

const postNote = async (token, menteeId, data) => {
  const { description, title } = data;
  try {
    const server = generateAxios(token);
    const res = await server.post(API_URL + `/api/users/notes`, {
      menteeId,
      description,
      title,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

const deleteNote = async (token, noteId) => {
  try {
    const server = generateAxios(token);
    const res = await server.delete(API_URL + `/api/users/notes/${noteId}`);
    return res;
  } catch (error) {}
};

module.exports = {
  getNotes,
  postNote,
  deleteNote,
};
