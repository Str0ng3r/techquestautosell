import { createSlice } from '@reduxjs/toolkit';

const collectionsSlice = createSlice({
  name: 'cars',
  initialState: {
    id: '',
    firma: '',
    price:'',
    probeg:''
  },
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setFirma(state, action) {
      state.firma = action.payload;
    },
    setPrice(state,action) {
        state.price = action.payload
    },
    setProbeg(state,action) {
        state.probeg = action.paylolad
    }
  },
});

export const { setName, setEmail } = userSlice.actions;