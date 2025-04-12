import axios from 'axios';

const API_BASE_URL = 'https://hp-api.onrender.com/api';
const createId = (name: string) => name.toLowerCase().replace(/\s+/g, '-');


export const getAllCharacters = async () => {
    const response = await axios.get(`${API_BASE_URL}/characters`);
    return response.data.map((char: any) => ({
        ...char,
        id: createId(char.name),
    }));
};

export const getStudents = async () => {
    const response = await axios.get(`${API_BASE_URL}/characters/students`);
    return response.data.map((char: any) => ({
        ...char,
        id: createId(char.name),
    }));
};

export const getStaff = async () => {
    const response = await axios.get(`${API_BASE_URL}/characters/staff`);
    return response.data.map((char: any) => ({
        ...char,
        id: createId(char.name),
    }));
};