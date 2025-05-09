import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIs } from "../../../../shared";


export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await APIs.user.getUsers();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Ошибка загрузки");
        }
    }
);

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (id, { rejectWithValue }) => {
        try {
            await APIs.user.deleteUsers(id)
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateUserRole = createAsyncThunk(
    "users/updateUserRole",
    async ({ userId, newRole }, { rejectWithValue }) => {
      try {
        await APIs.user.updateUsers(userId, { role: newRole });
        return { userId, newRole };
      } catch (error) {
        console.error("Update error details:", {
          config: error.config,
          response: error.response
        });
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
  );


const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Загрузка пользователей
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            // Удаление пользователя
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload);
            })

            // Изменение роли
            .addCase(updateUserRole.fulfilled, (state, action) => {
                const { userId, newRole } = action.payload;
                
          
                state.users = state.users.map(user => 
                  user.id === userId ? { ...user, role: newRole } : user
                );
                
                const index = state.users.findIndex(u => u.id === userId);
                if (index !== -1) {
                  state.users[index].role = newRole;
                }
              })
    },
});

export const selectAllUsers = (state) => state.users.users;
export const selectLoading = (state) => state.users.loading;
export const selectError = (state) => state.users.error;

export default usersSlice.reducer;