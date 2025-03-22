import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-backend-seven-mocha.vercel.app/api",
    credentials: "include",
  }),

  endpoints: () => ({}),
  tagTypes: ["blogs", "projects", "message"],
});
