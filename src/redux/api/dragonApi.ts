import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { IDragon } from "../../interfaces/dragon.interface";

const staggeredBaseQuery = retry(
  fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v4/" }),
  {
    maxRetries: 5,
  }
);
export const dragonApi = createApi({
  baseQuery: staggeredBaseQuery,
  reducerPath: "dragonApi",
  endpoints: (build) => ({
    getDragons: build.query<IDragon[], void>({
      query: () => ({ url: "dragons" }),
    }),
    getDragon: build.query<IDragon, string>({
      query: (id) => ({ url: `dragons/${id}` }),
      extraOptions: { maxRetries: 8 },
    }),
  }),
});

export const { useGetDragonQuery, useGetDragonsQuery } = dragonApi;
