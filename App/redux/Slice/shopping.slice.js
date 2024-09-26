import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    Shoppingfire: [],
    error: null
}


export const ShopbySub = createAsyncThunk(
    'Shoppingfire/ShopbySub',
    async (data) => {
        console.log("kdkkddkkdkd", data);
        const ShoppingData = [];
        await firestore()
            .collection('Product')
            .get()
            .then(querySnapshot => {
                console.log('Total Product: ', querySnapshot.size);

                console.log("cat_id", data.cat_id);
                console.log("subcate_id", data.subcate_id);

                querySnapshot.forEach(documentSnapshot => {
                    if ((documentSnapshot.data().category_id === data.cat_id) && (documentSnapshot.data().Subcategory_id === data.subcate_id)) {
                        ShoppingData.push({ id: documentSnapshot.id,...documentSnapshot.data()})
                    }

                });

            })
        console.log("dkkdkdkdkdkkddkdkddkddkkddkdkdkdkdk", ShoppingData);
        return ShoppingData

    }
)
export const getShopping = createAsyncThunk(
    'Shoppingfire/getShopping',
    async () => {
        console.log("okokokokokokokokokokokokokokokokokok");
        const shooping = [];
        await firestore()
            .collection('Product')
            .get()
            .then(querySnapshot => {
                console.log('Total Product: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    shooping.push({ id: documentSnapshot.id,...documentSnapshot.data()})
                });

            })
        console.log("dkkdkdkdkdkkddkdkddkddkkddkdkdkdkdk", shooping);
        return shooping

    }
)

// export const productslice = createSlice({
//     name: 'product',
//     initialState: initialState,
//     extraReducers: (builder) => {
//         builder.addCase(ProBySub.fulfilled, (state, action) => {
//             state.Productfire = action.payload
//         })
     
//     }
// })


export const shoppingslice = createSlice({
    name: 'shopping',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(ShopbySub.fulfilled, (state, action) => {
            state.Shoppingfire = action.payload
        })
        builder.addCase(getShopping.fulfilled, (state, action) => {
            console.log("in productttttttttttt", action);
            state.Shoppingfire = action.payload
        })
        
    }
})

export default shoppingslice.reducer