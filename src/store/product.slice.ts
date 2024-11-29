import axios from "@/utils/axios";
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        products: [],
        total: 0,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload.products;
            state.total = action.payload.total;
        },
    },
});

export const {
    setLoading,
    setProducts,
} = productSlice.actions;

export default productSlice.reducer;

export const FetchProductsAction = (limit: number = 10, skip: number = 0, sortBy: string = "title", order: string = "asc") => async (dispatch: any) => {
    try {
        dispatch(setLoading(true));
        const data: any = await axios.get(`/products`, {
            params: {
                limit,
                skip,
                sortBy,
                order,
            },
        });
        dispatch(setProducts(data));
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(setLoading(false));
    }
};
