import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { bookApi } from "./bookApi"; // Keep your existing book API
import { authApi } from "./authApi"; // Import the new auth API

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    [authApi.reducerPath]: authApi.reducer, // Add authApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware, authApi.middleware),
});

// Setup listeners for refetching behavior
setupListeners(store.dispatch);
