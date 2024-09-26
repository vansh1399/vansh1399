import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    color: [],
    error: null
}

export const fetchcolor = createAsyncThunk(
    'color/fetchcolor',
    async () => {
        try {
            const colorData = [];
            await firestore()
                .collection('Color')
                .get()
                .then(querySnapshot => {
                    console.log('Total color: ', querySnapshot.size);

                    querySnapshot.forEach(documentSnapshot => {
                        colorData.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
                    });

                });

            // console.log("actionnnnnn", colorData);
            return colorData
        } catch (error) {
            console.log(error);
        }
    }
)

export const colorslice = createSlice({
    name: 'color',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchcolor.fulfilled, (state, action) => {
            state.color =  action.payload
          })
    }
})

export default colorslice.reducer
