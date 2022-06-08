import { configureStore } from '@reduxjs/toolkit';

import timerReducer from "../features/timer/timerSlice";
import colorReducer from "../features/color/colorSlice";
import fontReducer from "../features/font/fontSlice";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    color: colorReducer,
    font: fontReducer,
  },
});
