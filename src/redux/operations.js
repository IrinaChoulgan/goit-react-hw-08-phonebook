import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://6195555674c1bd00176c6ced.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contacts, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contacts);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, { rejectWithValue }) => {
    try {
      const {
        data: { id },
      } = await axios.delete(`/contacts/${contactId}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default { addContacts, deleteContact, fetchContacts };
