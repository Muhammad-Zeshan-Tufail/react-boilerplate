import { createSlice } from "@reduxjs/toolkit";
import { login } from "./userThunk";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
