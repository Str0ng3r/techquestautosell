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
    firma: 'HUMMER',
   price:'$25',
   startProbeg:1,
    probeg:1000000,
    isLoading:false,
    favorites:[],
    error:null,
    data:[],
    first:false,
  },
  reducers: {
    setStartProbeg(state,action) {
      state.startProbeg = action.payload
    },
    setData(state,action) {
      state.data = action.payload
    },
    setId(state, action) {
      state.id = action.payload;
    },
    setFirst(state,action) {
      state.first = action.payload
    },
    setFirma(state, action) {
      state.firma = action.payload;
    },
    setPrice(state,action) {
        state.price = action.payload
    },
    setProbeg(state,action) {
        state.probeg = action.payload
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

export const { setId, setFirma,setPrice,setProbeg,setFavor,setData,setStartProbeg,setFirst } = collectionsSlice.actions;
export const mainReducer = collectionsSlice.reducer;