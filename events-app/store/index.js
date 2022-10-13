import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "../slices/eventSlice";

export default configureStore({
  reducer: {
    events: eventsSlice,
  },
});
