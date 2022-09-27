import firestore from '@react-native-firebase/firestore'
import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {Food} from '../models/food'

type PostsResponse = Food[]

export const foodsApi = createApi({
  reducerPath: 'foodsApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    // // conver to onSnapshot
    // getAllMeals: builder.query<PostsResponse, void>({
    //   queryFn() {
    //     try {
    //       let foods: PostsResponse = []
    //       firestore()
    //         .collection('foods')
    //         .onSnapshot(documentSnapshot => {
    //           let meals: PostsResponse = []
    //           documentSnapshot?.forEach(food =>
    //             meals.push({...(food.data() as Food), id: food.id}),
    //           )
    //           console.log('User data: ', meals)
    //         })
    //       return {data: foods}
    //     } catch (error) {
    //       return {error}
    //     }
    //   },
    // }),
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
    removeMeal: builder.mutation<Food, void>({
      async queryFn(arg: string) {
        try {
          // let food: Food = []
          const userFood = await firestore()
            .collection('meals')
            .doc(arg)
            .delete()
          return {data: userFood}
        } catch (error) {
          return {error}
        }
      },
    }),
    updateMeal: builder.mutation<Food, void>({
      async queryFn(arg: string, data: string) {
        try {
          // let food: Food = []
          const userFood = await firestore()
            .collection('meals')
            .doc(arg)
            .update({data})
          return {data: userFood}
        } catch (error) {
          return {error}
        }
      },
    }),
    addMeal: builder.mutation<Food, void>({
      async queryFn(arg: Food) {
        try {
          // let food: Food = []
          const userFood = await firestore().collection('meals').add({arg})
          return {data: userFood}
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
} = foodsApi
