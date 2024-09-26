import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    categoryfire: [],
    error: null
}

export const fetchcategory = createAsyncThunk(
    'category/fetchcategory',
    async () => {
        try {
            const categoryData = [];
            await firestore()
                .collection('Category')
                .get()
                .then(querySnapshot => {
                    // console.log('Total Category: ', querySnapshot.size);

                    querySnapshot.forEach(documentSnapshot => {
                        categoryData.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
                    });

                });

            // console.log("actionnnnnn", categoryData);
            return categoryData
        } catch (error) {
            console.log(error);
        }
    }
)

export const categoryslice = createSlice({
    name: 'category',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchcategory.fulfilled, (state, action) => {
            state.categoryfire =  action.payload
          })
    }
})

export default categoryslice.reducer
