// import mongoose from "mongoose";
// export interface IOrder {
//     updateOne(arg0: { transaction: { id: string; transactionStatus: string; }; }): (mongoose.Document<unknown, {}, IOrder> & IOrder & { _id: mongoose.Types.ObjectId; } & { __v: number; })[] | PromiseLike<(mongoose.Document<unknown, {}, IOrder> & IOrder & { _id: mongoose.Types.ObjectId; } & { __v: number; })[]>;
//     order: any;
//     user: mongoose.Schema.Types.ObjectId
//     products : mongoose.Schema.Types.ObjectId;
//     quantity : number;
//     totalPrice ?: number;
//     productStatus ?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    // transaction: {
    //     id: string;
    //     transactionStatus: string;
    //     bank_status: string;
    //     sp_code: string;
    //     sp_message: string;
    //     method: string;
    //     date_time: string;
    //   };
// }

import mongoose from "mongoose";
export interface IOrder {
    user: mongoose.Schema.Types.ObjectId
    products : {
      product: mongoose.Schema.Types.ObjectId;
      quantity: number;
    }[];
    quantity : number;
    totalPrice ?: number;
    productStatus ?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    transaction: {
      id: string;
      transactionStatus: string;
      bank_status: string;
      sp_code: string;
      sp_message: string;
      method: string;
      date_time: string;
    };
    
}