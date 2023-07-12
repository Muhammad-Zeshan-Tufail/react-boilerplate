import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const response = data;

        return thunkAPI.fulfillWithValue(response);
    } catch (error) {
        throw error;
    }
});
