/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  ShoppingBagIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  CurrencyBangladeshiIcon,
} from "@heroicons/react/24/outline";

import { useGetOrdersQuery } from "../redux/features/orderAndPayment/OrderApi";

const MyOrder = () => {
  const { data: orders, isLoading, isError } = useGetOrdersQuery(undefined);

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="h-6 w-32 mb-4" />
        <div className="space-y-4">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="h-24 w-full rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-center text-red-500">
        <XCircleIcon className="h-8 w-8 inline mb-2" />
        <p>Failed to load orders. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-primary">
        <ShoppingBagIcon className="h-8 w-8 text-purple-600" />
        My Orders
      </h1>

      {orders?.data?.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">You have no orders yet.</p>
      ) : (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {orders?.data?.map((order: any) => (
            <div
              key={order._id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between gap-3 hover:shadow-xl transition"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Order #{order._id.slice(-6)}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  Placed: {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex justify-between items-center mt-3">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === "delivered"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                  }`}
                >
                  {order.status === "delivered" ? (
                    <>
                      <CheckCircleIcon className="h-4 w-4 mr-1" />
                      Delivered
                    </>
                  ) : (
                    <>
                      <ClockIcon className="h-4 w-4 mr-1" />
                      Pending
                    </>
                  )}
                </span>

                <div className="flex items-center gap-2 text-lg font-semibold bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-lg">
                  <CurrencyBangladeshiIcon className="h-5 w-5" />
                  ৳{order.totalAmount}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrder;
