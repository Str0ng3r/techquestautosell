import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://6501abed736d26322f5c1aaa.mockapi.io/auto/sell'


export const getCars = createAsyncThunk('cars/getCars', async (data,thunkApi) => {
    try{
        const response = await axios.get(`/collections?page=${data.page}&limit=8`)
        return response
    }catch (e) {
        return thunkApi.rejectWithValue(e.message)
    }
})

// export const getCarsStart = createAsyncThunk('cars/getCars', async (thunkApi) => {
//   try{
//       const response = await axios.get(`/collections?page=1&limit=8`)
//       return response
//   }catch (e) {
//       return thunkApi.rejectWithValue(e.message)
//   }
// })



const collectionsSlice = createSlice({
  name: 'cars',
  initialState: {
    id: '',
    firma: '',
    price:'',
    probeg:'',
    isLoading:false,
    favorites:[],
    error:null,
    data:[]
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
    },
    setFavor(state,action) {
      state.favorites = [...state.favorites,action.payload]
    }
  },
  extraReducers: {
    [getCars.pending](state,action) {
        state.isLoading = true
        state.error = null
    },
    [getCars.fulfilled](state,action) {
      console.log('getCars.fulfilled triggered')
        state.isLoading = false
        state.data = [...state.data, ...action.payload.data];
        state.error = null
    },
    [getCars.rejected](state,action) {
        state.isLoading = false
        state.error = action.payload
    }
  }
});

export const { setId, setFirma,setPrice,setProbeg,setFavor } = collectionsSlice.actions;
export const mainReducer = collectionsSlice.reducer;