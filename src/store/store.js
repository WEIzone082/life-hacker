import { createSlice, configureStore } from "@reduxjs/toolkit";

const initSlice = createSlice({
    name: "init",
    initialState: { activities: null, activityData: null },
    reducers: {
        getActivities(state, action) {
            state.activities = action.payload;
        },
        setActivity(state, action) {
            state.activityData = null;
            console.log(state.activities);
            state.activityData = state.activities.filter(
                (x) => x.activity.id == action.payload
            );
        },
    },
});

const store = configureStore({ reducer: { initial: initSlice.reducer } });

export const initActions = initSlice.actions;

export default store;
