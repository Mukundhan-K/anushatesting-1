import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../utility/index";

const initialState = {
    isAuthenticated : false,
    isLoading : false,
    user : null,
    authChecked: false
};

// **********************************************************************************

// -----------------------------------
// signup user

export const addUser = createAsyncThunk("signup",
    async (formData, thunkAPI) => {
        try {
            const response = await Api.post(
                "/api/auth/createuser",
                formData,
                {withCredentials: true}
            )
            return  response.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data)
        };
    }
);

// -----------------------------------
// login user

export const loginUser = createAsyncThunk("login",
    async (formData, thunkAPI) => {
        try {
            const response = await Api.post(
                "/api/auth/login",
                formData,
                {withCredentials: true}
            );
            console.log(response);
            
            return  response.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        };
    }
);

// -----------------------------------
// check auth

export const checkUser = createAsyncThunk("checkuser",
    async (_, thunkAPI) => {
        try {
            const response = await Api.get(
                "/api/auth/admin",
                {
                    withCredentials: true,
                    headers : {
                        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate"
                    }
                }
            );
            // console.log(response);
            return  response.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        };
    }
);

// **********************************************************************************

const authSlice = createSlice({
    name : "authSlice",
    initialState,
    reducers : {
        setUser : (state, action)=>{
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.authChecked = false
            // localStorage.removeItem("authToken");
        },
    },
    extraReducers : (builder)=>{
        builder.addCase(loginUser.pending, (state)=>{
                  state.isLoading = true;
                }).addCase(loginUser.fulfilled, (state, action)=>{
                    console.log("action : ", action);
                    
                    state.isLoading = false,
                    state.user = (action?.payload?.success) ? (action.payload.user) : null;
                    state.isAuthenticated = (action?.payload?.success) ? true : false;
                }).addCase(loginUser.rejected, (state)=>{
                    state.isLoading = false,
                    state.user = null;
                    state.isAuthenticated = false;
                })
                
                .addCase(checkUser.pending, (state)=>{
                    // state.isLoading = true;
                }).addCase(checkUser.fulfilled, (state, action)=>{
                    // state.isLoading = false,
                    state.authChecked = true;
                    state.user = (action?.payload?.success) ? (action.payload.user) : null;
                    state.isAuthenticated = !!action.payload?.success;
                    
                }).addCase(checkUser.rejected, (state)=>{
                    // state.isLoading = false,
                    state.user = null;
                    state.isAuthenticated = false;
                    state.authChecked = true;
                });
    }
});

export const {setUser, logout} = authSlice.actions;
export default authSlice.reducer;