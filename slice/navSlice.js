import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,

  waypoint: null,

  destination: null,

  travelTimeInformation: null,

  btnwaypoint: null,

  apply: null,

  request: null,

  location: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setWaypoint: (state, action) => {
      state.waypoint = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
    setbtnwaypoint: (state, action) => {
      state.btnwaypoint = action.payload;
    },
    setApply: (state, action) => {
      state.apply = action.payload;
    },
    setRequest: (state, action) => {
      state.request = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const {
  setOrigin,
  setWaypoint,
  setDestination,
  setTravelTimeInformation,
  setbtnwaypoint,
  setApply,
  setRequest,
  setLocation,
} = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectWayPoint = (state) => state.nav.waypoint;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;
export const selectBtnWayPoint = (state) => state.nav.btnwaypoint;
export const selectApply = (state) => state.nav.apply;
export const selectRequest = (state) => state.nav.request;
export const selectLocation = (state) => state.nav.location;

export default navSlice.reducer;
