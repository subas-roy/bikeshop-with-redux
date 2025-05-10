/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: ["Products"],
    }),

    getSingleProduct: builder.query({
      query: (id:string) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
      providesTags: ["Products"],
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: '/products/create-product',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),

    updateProduct: builder.mutation({
      query: ({data ,id}) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),

    deletedProduct: builder.mutation({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: 'DELETE',
        
      }),
      invalidatesTags: [ "Products"],
    }),
  }),
});

export const { useGetAllSemestersQuery , useAddProductMutation, useDeletedProductMutation, useUpdateProductMutation, useGetSingleProductQuery} = productApi ;