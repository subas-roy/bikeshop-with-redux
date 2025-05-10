
const ViewAllOrdersTable = () => {
  const orders = [
    {
      _id: "12345",
      user: { name: "John Doe" },
      totalAmount: 100.0,
      status: "Pending",
      createdAt: "2025-04-22T10:30:00Z",
      paymentStatus: "Paid",
    },
    {
      _id: "67890",
      user: { name: "Jane Smith" },
      totalAmount: 250.0,
      status: "Shipped",
      createdAt: "2025-04-21T15:30:00Z",
      paymentStatus: "Paid",
    },
    {
      _id: "11223",
      user: { name: "Alice Brown" },
      totalAmount: 150.0,
      status: "Delivered",
      createdAt: "2025-04-20T12:45:00Z",
      paymentStatus: "Pending",
    },
  ];

  return (
    <div className="overflow-x-auto p-6">
      <h2 className="text-center my-2">This data only Hard code </h2>
      <table className="min-w-full table-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-md">
        <thead className="bg-indigo-600 dark:bg-indigo-700 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Order ID</th>
            <th className="py-2 px-4 text-left">User</th>
            <th className="py-2 px-4 text-left">Total Amount</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Order Date</th>
            <th className="py-2 px-4 text-left">Payment Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-900 dark:text-gray-100">
          {orders.map((order) => (
            <tr key={order._id} className="border-t dark:border-gray-700">
              <td className="py-2 px-4">{order._id}</td>
              <td className="py-2 px-4">{order.user.name}</td>
              <td className="py-2 px-4">${order.totalAmount}</td>
              <td className="py-2 px-4">
                <span
                  className={`badge ${
                    order.status === "Pending"
                      ? "bg-yellow-500 text-white"
                      : order.status === "Shipped"
                      ? "bg-blue-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-2 px-4">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
              <td className="py-2 px-4">
                <span
                  className={`badge ${
                    order.paymentStatus === "Paid"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {order.paymentStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
};

export default ViewAllOrdersTable;
