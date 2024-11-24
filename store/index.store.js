import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./theme/theme.slice";

const store = configureStore({ reducer: { theme: themeSliceReducer } });

export default store;
