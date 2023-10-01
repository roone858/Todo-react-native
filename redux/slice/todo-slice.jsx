import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { retrieveData } from "../../utils/asyncStorage";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await retrieveData();

  return response;
});

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload),
      };
    },

    completeTodo: (state, action) => {
      const index = state.data.findIndex(
        (todo) => todo.id == action.payload.id
      );
      if (index !== -1) {
        state.data[index].isComplete = action.payload.value;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      return { ...state, error: action.payload.error };
    });
  },
});

export const { addTodo ,  deleteTodo, completeTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
