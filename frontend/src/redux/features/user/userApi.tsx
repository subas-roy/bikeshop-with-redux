/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../../api/baseApi";


const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      
    }),

    getSingleUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
        
      }),
      
    }),

    updateUser: builder.mutation({
      query: ({data,id}) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data
      }),
      
    }),

    deleteUser: builder.mutation({
      query: (id:string) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
    
    }),


  }),
});

export const { useGetAllUsersQuery, useGetSingleUserQuery, useDeleteUserMutation, useUpdateUserMutation } = userApi ;