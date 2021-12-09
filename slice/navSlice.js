import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: {
    location: {
      lat: 46.84891,
      lng: 35.36533,
    },
  },
  destination: {
    location: {
      lat: 46.84891,
      lng: 35.36533,
    },
  },
  travelTimeInformation: null,
  placeholder: 'Where from?'
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
    setPlaceholder: (state) => {
        state.placeholder = 'My current location'
    }
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation, setPlaceholder } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
