import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../utility/index";

const initialState = {
    isLoading : false,
    productList : [],
    projectDetail : null
};

// -----------------------------------
// Fetch All Projects

export const fetchAllProjects = createAsyncThunk("shop/fetchAllProjects",
    async (formData, thunkAPI) => {

        console.log("formdat ", formData);
        
        try {
          const response = await Api.post(
            "/api/shop/listProject",
            formData,
            {withCredentials: true}
          );
          return  response.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


// -----------------------------------
// view Project

export const viewProject = createAsyncThunk("shop/viewProject",
    async (id, thunkAPI) => {
        console.log("inside shop view : ",id);
        
        try {
        const response = await Api.get(
            `/api/shop/singleProject/${id}`,
            {withCredentials: true}
        );
        return  response.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


// **********************************************************************************

const shopProductSlice = createSlice({
    name : "shopProductSlice",
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(fetchAllProjects.pending, (state)=>{
            state.isLoading = true;
        }).addCase(fetchAllProjects.fulfilled, (state, action)=>{
            state.isLoading = false;
            // console.log("list all proj shop : " ,action.payload);
            state.productList = (action?.payload?.success) ? action.payload?.projects : [];
        }).addCase(fetchAllProjects.rejected, (state)=>{
            state.isLoading = false;
            state.productList = [];
        })

        .addCase(viewProject.pending, (state)=>{
            state.isLoading = true;
        }).addCase(viewProject.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.projectDetail = (action?.payload?.success) ? action.payload?.project : null;
        }).addCase(viewProject.rejected, (state)=>{
            state.isLoading = false;
            state.projectDetail = null;
        })
    }
});

export default shopProductSlice.reducer;