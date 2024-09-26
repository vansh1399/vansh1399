import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    Subcategoryfire: [],
    error: null
}


export const SubByCat = createAsyncThunk(
    'Subcategoryfire/SubByCat',
    async (cat_id) => {
            const SubCateData = [];
            await firestore()
                .collection('SubCategory')
                .get()
                .then(querySnapshot => {
                    console.log('Total Subactegory: ', querySnapshot.size);

                    console.log("cat_id,cat_id", cat_id);

                    querySnapshot.forEach(documentSnapshot => {
                        if(documentSnapshot.data().category_id===cat_id){
                            SubCateData.push({
                                id:documentSnapshot.id,
                                ...documentSnapshot.data()
                        })
                        }
                      console.log(SubCateData);
                    });

                })
          
            return SubCateData

    }
)

export const subcategoryslice = createSlice({
    name: 'subcategory',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(SubByCat.fulfilled, (state, action) => {
            state.Subcategoryfire =  action.payload
          })
    }
})

export default subcategoryslice.reducer