import api from "./apiConfig.js";

export const getCharacters = async () => {
  try {
    //if succesfful
    const response = await api.get("/characters");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCharacter = async (id) => {
  try {
    //if succesfful
    const response = await api.get(`/characters/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCharacter = async (characterData) => {
  try {
    const response = await api.post("/characters", characterData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCharacter = async (id, characterData) => {
  try {
    const response = await api.put(`/characters/${id}`, characterData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCharacter = async (id) => {
  try {
    const response = await api.delete(`/characters/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
