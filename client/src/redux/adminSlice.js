import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../utility/index";

const initialState = {
    isLoading : false,
    productList : []
};

// -----------------------------------
// add projects

export const addProject = createAsyncThunk("projects/addProject",
    async (formData, thunkAPI) => {
        try {
          const response = await Api.post(
            "/api/project/addProject",
            formData,
            {
              withCredentials: true,
              headers: { "Content-Type": "multipart/form-data" }
            }
          );
          return  response.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// -----------------------------------
// Fetch All Projects

export const fetchAllProjects = createAsyncThunk("projects/fetchAllProjects",
    async (_, thunkAPI) => {
        try {
          const response = await Api.get(
            "/api/project/listProject",
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

export const viewProject = createAsyncThunk("projects/viewProject",
    async (id, thunkAPI) => {
        console.log("inside admin voew : ",id);
        
        try {
        const response = await Api.get(
            `/api/project/singleProject/${id}`,
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
// Edit Project

export const editProject = createAsyncThunk("projects/editProject",
    async ({formdata, id}, thunkAPI) => {
        console.log("inside admin : ",id);
        
        try {
          const response = await Api.put(
            `/api/project/editProject/${id}`,
            formdata,
            {
              withCredentials: true,
              headers: { "Content-Type": "multipart/form-data" }
            }
          );
          return  response.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// -----------------------------------
// delete Project

export const deleteProject = createAsyncThunk("projects/deleteProject",
    async (id, thunkAPI) => {
        console.log("inside admin del : ",id);
        
        try {
        const response = await Api.delete(
            `/api/project/removeProject/${id}`,
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

const adminProductSlice = createSlice({
    name : "adminProductSlice",
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(fetchAllProjects.pending, (state)=>{
            state.isLoading = true;
        }).addCase(fetchAllProjects.fulfilled, (state, action)=>{
            state.isLoading = false;
            console.log("list all proj : " ,action.payload);
            state.productList = (action?.payload?.success) ? action.payload?.projects : [];
        }).addCase(fetchAllProjects.rejected, (state)=>{
            state.isLoading = false;
            state.productList = [];
        })

        .addCase(addProject.pending, (state)=>{
            state.isLoading = true;
        }).addCase(addProject.fulfilled, (state, action)=>{
            state.isLoading = false;
            if (action.payload?.success) {
                state.productList.unshift(action.payload?.project);
            }
        }).addCase(addProject.rejected, (state)=>{
            state.isLoading = false;
        })

    }
});

export const {} = adminProductSlice.actions;
export default adminProductSlice.reducer;