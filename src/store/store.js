import { configureStore } from '@reduxjs/toolkit';

import timerReducer from "../features/timer/timerSlice";
import colorReducer from "../features/color/colorSlice";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    color: colorReducer,
  },
});
