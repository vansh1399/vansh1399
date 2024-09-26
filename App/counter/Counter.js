import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/Slice/counter.slice'
import { fetchcategory } from '../redux/Slice/category.slice'



export default function Counter() {


    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchcategory())
    } , [])
    // const counter = useSelector(state => state.count);

    const category = useSelector(state => state.categoryfire);

    // console.log("sjdjdjdjjdjjd",category);

    const handalInc = ()=>{
        dispatch(increment())
    }

    const handalDec = ()=>{
        dispatch(decrement())
    }

  return (
    
    <View>
      <Text>Counter</Text>
     {/* 1 */}
      <TouchableOpacity onPress={handalInc}> 
            <Text>+</Text>
        </TouchableOpacity>

        {/* <Text>{counter.count}</Text> */}

        <TouchableOpacity onPress={handalDec}>
            <Text>-</Text>
        </TouchableOpacity>

    </View>
  )
}