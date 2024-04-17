import type { CartProduct } from "@/interfaces";
import { create } from "zustand";



interface State {
    cart: CartProduct[];

    // Add a new product to the cart
    // Remove a product from the cart
    // Update the quantity of a product in the cart
}

export const useCartStore = create<State>()(
    (set) => ({
        cart: []
    })
)