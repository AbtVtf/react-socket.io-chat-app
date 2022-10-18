import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    roomCode: "asa",
    scan: false,
  },
  reducers: {
    setRoomCode(state, action) {
      state.roomCode = action.payload;
    },
  },
});
export const { setRoomCode } = sessionSlice.actions;

export const roomCode = (state) => state.roomCode;
export default sessionSlice.reducer;
