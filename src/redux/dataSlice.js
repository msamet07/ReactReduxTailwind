import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  data: [],
  keyword:""
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload] // stateleri dön içerdeki veriyi silme üzerinede actiondaki payloadları ekle
    },
    sortingDataFunc: (state, action) => {
      state.data = [...state.data.sort((a,b) => action.payload == "asc"? a.price-b.price : action.payload == "desc" ? b.price-a.price : null)]
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter(dt=> dt.id != action.payload)] //gelen dataları id ye göre filtrele aynı olanlar silinsin farklı olanlar kalsın.
    },
    updateDataFunc: (state, action) => {
      state.data = [...state.data.map(dt=> dt.id == action.payload.id ? ({...dt, ...action.payload}) : dt )] //gelen dataları id ye göre filtrele aynı olanlar silinsin farklı olanlar kalsın.
    },
    searchDataFunc : (state, action) => { //inputun içine girdiğimiz yapıyı tutmuş oluyoruz
      state.keyword = action.payload
    },
  },
})


export const { createDataFunc,deleteDataFunc,updateDataFunc ,sortingDataFunc , searchDataFunc} = dataSlice.actions

export default dataSlice.reducer