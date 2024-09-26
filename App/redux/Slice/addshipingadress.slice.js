import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore, { firebase } from '@react-native-firebase/firestore';


const initialState = {
    isLoading: false,
    adsshipadrress: [],
    error: null
}


export const addshhipadress = createAsyncThunk(
    'adsshipadrress/addshhipadress',
    async (data) => {
        try {
            const AddShippingData = []

            const userRefrence = await firestore().collection('AddShippingAddress').doc(data.uid);
            const userDoc = await userRefrence.get();

            console.log("userDocuserDoc", userDoc.exists);

            try {
                if (userDoc.exists) {
                    await userRefrence.update(
                        {
                            addrress: firebase.firestore.FieldValue.arrayUnion(
                                data
                            )
                        }
                    );
                } else {
                    await userRefrence.set({
                        addrress: [data]
                    })
                }

                const getaddshipdata = [];
                await firestore()
                    .collection('AddShippingAddress')
                    .doc(data.uid)
                    .get()
                    .then(documentSnapshot => {
                        if (documentSnapshot.exists) {
                            getaddshipdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })

                        }
                    });

                return getaddshipdata;
            } catch (error) {
                console.log("Eroroooaoaooeeeo", error);
            }

        } catch (error) {
            console.log("erorroorororor", error);
        }

    }

);

export const getaddshipadreess = createAsyncThunk(
    'adsshipadrress/getaddshipadreess',
    async (id) => {
        try {
            const getaddshipdata = [];

            try {
                await firestore()
                    .collection('AddShippingAddress')
                    .doc(id)
                    .get()
                    .then(documentSnapshot => {
                        if (documentSnapshot.exists) {
                            getaddshipdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })

                        }
                    });
            } catch (error) {
                console.log("eoeoellslslsldsl", error);
            }

            // console.log("getaddshipdatagetaddshipdata", getaddshipdata);
            return getaddshipdata;

        } catch (error) {
            console.log(error);
        }
    },
)

export const deleteadrress = createAsyncThunk(
    'adsshipadrress/deleteadrress',
    async (data) => {
        console.log("sssssowowpwpwqppqpqpqpq", data);
        const userRefrence = await firestore().collection('AddShippingAddress').doc(data.uid);

        try {


            await userRefrence.update(
                {
                    addrress: firebase.firestore.FieldValue.arrayRemove(
                        data
                    )
                }
            );
            const getaddshipdata = [];
            await firestore()
                .collection('AddShippingAddress')
                .doc(data.uid)
                .get()
                .then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        getaddshipdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })

                    }
                });

            return getaddshipdata;
        } catch (error) {
            console.log("alallalallllskskkwowpqosks", error);
        }

    }
)

export const updateaddrress = createAsyncThunk(
    'adsshipadrress/addadrress',
    async (data) => {
        console.log("sssssowowpwpwqppqpqpqpq", data);

        try {
            const userRefrence = await firestore().collection('AddShippingAddress').doc(data.oldData.uid);

            try {
                await userRefrence.update(
                    {
                        addrress: firebase.firestore.FieldValue.arrayRemove(
                            data.oldData
                        )
                    }
                );

                await userRefrence.update(
                    {
                        addrress: firebase.firestore.FieldValue.arrayUnion(
                            data.newData
                        )
                    }
                );
                console.log("ksksksksssjksjsdjjdjdjdjdjkdjkdjdjkdjsdj");
            } catch (error) {
                console.log("dlspkxscdfjdoijhihufhfiu", error);
            }

            const getaddshipdata = [];
            await firestore()
                .collection('AddShippingAddress')
                .doc(data.oldData.uid)
                .get()
                .then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        getaddshipdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })

                    }
                });

            return getaddshipdata;
        } catch (error) {
            console.log("alallalallllskskkwowpqosks", error);
        }

    }

)


const addshipadrressSlice = createSlice({
    name: 'adsshipadrress',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addshhipadress.fulfilled, (state, action) => {
            state.adsshipadrress = action.payload
        })
        builder.addCase(getaddshipadreess.fulfilled, (state, action) => {
            state.adsshipadrress = action.payload
        })
        builder.addCase(deleteadrress.fulfilled, (state, action) => {
            state.adsshipadrress = action.payload
        })
        builder.addCase(updateaddrress.fulfilled, (state, action) => {
            state.adsshipadrress = action.payload
        })
    }
})

export default addshipadrressSlice.reducer