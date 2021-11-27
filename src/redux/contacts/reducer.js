import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
import operations from './operations';

const { changeFilter } = actions;

const items = createReducer([], {
  [operations.fetchContacts.fulfilled]: (_, { payload }) => payload,
  [operations.addContacts.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [operations.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [operations.fetchContacts.pending]: () => true,
  [operations.fetchContacts.fulfilled]: () => false,
  [operations.fetchContacts.rejected]: () => false,
  [operations.addContacts.pending]: () => true,
  [operations.addContacts.fulfilled]: () => false,
  [operations.addContacts.rejected]: () => false,
  [operations.deleteContact.pending]: () => true,
  [operations.deleteContact.fulfilled]: () => false,
  [operations.deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
