// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";

// const OrderEditForm = ({ order, onClose }: any) => {
//   // const [updatedOrder, setUpdatedOrder] = useState(order);

//   // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   setUpdatedOrder({
//   //     ...updatedOrder,
//   //     [e.target.name]: e.target.value,
//   //   });
//   // };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Call an API to update the order (Not implemented here)
//     console.log("Updated Order:", updatedOrder);
//     onClose();
//   };

//   return (
//     <div className="modal modal-open">
//       <div className="modal-box">
//         <h2 className="text-xl font-semibold">Edit Order</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="my-4">
//             <label className="block text-gray-700">Order ID</label>
//             <input
//               type="text"
//               name="orderId"
//               value={updatedOrder.orderId}
//               // onChange={handleChange}
//               className="input input-bordered w-full"
//               disabled
//             />
//           </div>
//           <div className="my-4">
//             <label className="block text-gray-700">Customer</label>
//             <input
//               type="text"
//               name="customerName"
//               value={updatedOrder.customerName}
//               // onChange={handleChange}
//               className="input input-bordered w-full"
//             />
//           </div>
//           <div className="my-4">
//             <label className="block text-gray-700">Status</label>
//             <select
//               name="status"
//               value={updatedOrder.status}
//               // onChange={handleChange}
//               className="select select-bordered w-full"
//             >
//               <option value="Pending">Pending</option>
//               <option value="Shipped">Shipped</option>
//               <option value="Delivered">Delivered</option>
//             </select>
//           </div>
//           <div className="modal-action">
//             <button type="button" className="btn btn-ghost" onClick={onClose}>
//               Cancel
//             </button>
//             <button type="submit" className="btn btn-primary">
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OrderEditForm;
