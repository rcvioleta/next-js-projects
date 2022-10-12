import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "../slices/eventSlice";

export const store = configureStore({
  reducer: {
    events: eventsSlice,
  },
});
