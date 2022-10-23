import { createSlice, createAction } from '@reduxjs/toolkit';

interface LocalizationItem {
    name: string;
    isActive: boolean;
}

interface LocalizationState {
    list: LocalizationItem[];
}

export const getLocalizationList = createAction<undefined>(
    'getLocalizationList'
);
export const changeLocalization = createAction<number>('changeLocalization');

const initialState: LocalizationState = {
    list: [
        {
            name: 'RU',
            isActive: true,
        },
        {
            name: 'ENG',
            isActive: false,
        },
        {
            name: 'MOL',
            isActive: false,
        },
    ],
};

const localizationSlice = createSlice({
    name: 'localization',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLocalizationList, (state) => state)
            .addCase(changeLocalization, (state, action) => {
                state.list = state.list.map((item, index) => {
                    if (item.isActive) {
                        item.isActive = false;
                    } else if (index === action.payload) {
                        item.isActive = true;
                    }
                    return item;
                });

                return state;
            });
    },
});

export default localizationSlice.reducer;
