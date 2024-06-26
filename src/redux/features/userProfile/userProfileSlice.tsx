import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { BASE_URL, ACCESS_TOKEN } from "@/lib/constants";

// Define a type for the user profile
type UserProfile = {
  avatar: string;
  bio: string;
  created_at: string;
  updated_at: string;
};

type initialStateType = {
  username: string; // Adjusted to be a non-nullable string
  status: "idle" | "loading" | "success" | "failed";
  userProfile: UserProfile | null;
  error: string | undefined;
};

const initialState: initialStateType = {
  username: "", // Initialize as empty string or set to a default value
  status: 'idle',
  userProfile: null,
  error: undefined,
};

// create async thunk
export const fetchUserProfile = createAsyncThunk("userProfile/fetchUserProfile", async () => {
  const response = await fetch(`${BASE_URL}/api/user/profile/`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  });
  const data = await response.json();
  return data;
});

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    // Add any additional reducers if needed
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.status = 'success';
      state.userProfile = action.payload;
    });
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  }
});

export default userProfileSlice.reducer;

export const selectAvatar = (state: RootState) => state.userProfile.userProfile?.avatar;
export const selectBio = (state: RootState) => state.userProfile.userProfile?.bio;
