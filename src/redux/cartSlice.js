import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDataLoading: false,
  dataError: null,
  data: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //START LOADING
    startDataLoading(state) {
      state.isDataLoading = true;
    },

    //HAS ERROR
    hasDataError(state, action) {
      state.isDataLoading = false;
      state.dataError = action.payload;
    },

    //SET DATA
    setData(state, action) {
      state.isDataLoading = false;
      state.data = action.payload;
    },
  },
});

export default slice.reducer;

//SET SHOPPING CART DATA

export const getData = () => {
  return async (dispatch) => {
    dispatch(slice.actions.startDataLoading());
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      dispatch(slice.actions.setData(data));
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasDataError(error.toString()));
    }
  };
};
