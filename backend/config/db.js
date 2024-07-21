import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://harshilmistry23:foOdDeliVery2302@cluster0.a6hmgbs.mongodb.net/food-del')
    .then(()=>console.log("DB Connected"));
}
