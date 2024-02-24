import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000/"
    }),
    endpoints:(builder)=>({
        getEmployees:builder.query({
            query:()=>"employees"
        })
    }),
})
export const{useGetEmployees}=api.endpoints
