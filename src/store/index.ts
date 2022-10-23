import { configureStore } from '@reduxjs/toolkit';

import localizationReducer from './localizationSlice';

const store = configureStore({
    reducer: {
        localization: localizationReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
