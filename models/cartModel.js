const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    cartItems: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          default: 1,
        },
        color: {
          type: String,
        },
        price: {
          type: Number,
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    totalPrice: {
      type: Number,
    },
    totalPriceAfterDiscount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const cartModel = mongoose.model("Cart", cartSchema);

module.exports = cartModel;
