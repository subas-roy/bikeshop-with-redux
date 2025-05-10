
import { baseApi } from '../../api/baseApi';

const OrderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      createOrder: builder.mutation({
        query: (orderData) => ({
          url: "/order",
          method: 'POST',
          body: orderData,
        }),
      }),

      getOrders: builder.query({
        query: () => ({
          url: "/order",
          method: "GET",
        }),
      }),

      verifyOrder: builder.mutation({
        query: (order_id) => ({
          url: "/order/verify",
          params: {order_id},
          method: "GET",
        }),
      }),
    }),
  });

export const {useCreateOrderMutation, useGetOrdersQuery, useVerifyOrderMutation } = OrderApi;