import firestore from '@react-native-firebase/firestore'
import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {Food} from '../models/food'

type PostsResponse = Food[]

export const foodsApi = createApi({
  reducerPath: 'foodsApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getOneMeal: builder.query<Food, void>({
      async queryFn(arg: string) {
        try {
          const userFood = await firestore().collection('meals').doc(arg).get()

          let data = {...userFood.data(), id: userFood.id}
          return {data}
        } catch (error) {
          return {error}
        }
      },
    }),
    removeMeal: builder.mutation({
      async queryFn(id: string) {
        try {
          const userFood = await firestore()
            .collection('meals')
            .doc(id)
            .delete()
          return {data: userFood}
        } catch (error) {
          return {error}
        }
      },
    }),
    updateMeal: builder.mutation({
      async queryFn({id, data}: {id: string; data: Food}) {
        try {
          // let food: Food = []
          const userFood = await firestore()
            .collection('meals')
            .doc(id)
            .update(data)
          return {data: userFood}
        } catch (error) {
          return {error}
        }
      },
    }),
    addMeal: builder.mutation({
      async queryFn(arg: any) {
        try {
          // let food: Food = []
          const userFood = await firestore().collection('meals').add(arg)
          return {data: userFood}
        } catch (error) {
          return {error}
        }
      },
    }),
    getMealCategory: builder.query({
      async queryFn(arg: any) {
        try {
          const userFood = await firestore()
            .collection('meals')
            .where('type', '==', arg)
            .get()
          const doc = await userFood.docs

          const data = doc.map(d => {
            return {...d.data(), id: d.id}
          })

          return {data}
        } catch (error) {
          return {error}
        }
      },
    }),
  }),
})

export const {
  useAddMealMutation,
  useGetOneMealQuery,
  useRemoveMealMutation,
  useUpdateMealMutation,
  useGetMealCategoryQuery,
} = foodsApi
