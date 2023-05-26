import { Schema } from "mongoose"

const ModalSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true }
})

export const Product = modal('Product', ProductSchema)