import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Асинхронные Thunks
export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/users");
            if (!response.ok) throw new Error("Ошибка загрузки");
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (userId, { rejectWithValue }) => {
        try {
            await fetch(`/api/users/${userId}`, { method: "DELETE" });
            return userId; // Возвращаем ID для удаления из стейта
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateUserRole = createAsyncThunk(
    "users/updateUserRole",
    async ({ userId, newRole }, { rejectWithValue }) => {
        try {
            await fetch(`/api/users/${userId}/role`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ role: newRole }),
            });
            return { userId, newRole };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Стейт и редьюсеры
const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {}, // Синхронные редьюсеры (если нужны)
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
                const user = state.users.find(user => user.id === userId);
                if (user) user.role = newRole;
            });
    },
});

export default usersSlice.reducer;