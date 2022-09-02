import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk("user/login", async (userData, { rejectWithValue }) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData.credentials),
    };

    const response = await fetch("http://localhost:3001/api/v1/user/login", requestOptions);
    const data = await response.json();

    if (data.status === 200) {
      // If user checked "Remember me", store token in local storage
      if (userData.hasRememberMe) {
        localStorage.setItem("token", data.body.token);
      }
      return data;
    }

    console.error(data.message);
    return rejectWithValue(data);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getUserInfos = createAsyncThunk("user/getUserInfos", async (arg, { getState, rejectWithValue }) => {
  try {
    // Get user data from store
    const { user } = getState();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.userToken}`,
      },
    };

    const response = await fetch("http://localhost:3001/api/v1/user/profile", requestOptions);
    const data = await response.json();

    if (data.status === 200) {
      return data;
    }

    console.error(data.message);
    return rejectWithValue(data);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const editUserInfos = createAsyncThunk("user/editUserInfos", async (userData, { getState, rejectWithValue }) => {
  try {
    // Get user data from store
    const { user } = getState();

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.userToken}`,
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch("http://localhost:3001/api/v1/user/profile", requestOptions);
    const data = await response.json();

    if (data.status === 200) {
      return data;
    }

    console.error(data.message);
    return rejectWithValue(data);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});