import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    brand: [],
    error: null
}

export const fetchbrand = createAsyncThunk(
    'brand/fetchbrand',
    async () => {
        try {
            const brandData = [];
            await firestore()
                .collection('Brand')
                .get()
                .then(querySnapshot => {
                    console.log('Total brand: ', querySnapshot.size);

                    querySnapshot.forEach(documentSnapshot => {
                        brandData.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
                    });

                });

            // console.log("actionnnnnn", brandData);
            return brandData
        } catch (error) {
            console.log(error);
        }
    }
)

export const brandslice = createSlice({
    name: 'brand',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchbrand.fulfilled, (state, action) => {
            state.brand =  action.payload
          })
    }
})

export default brandslice.reducer
