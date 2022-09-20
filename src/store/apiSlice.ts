import firestore from '@react-native-firebase/firestore'
import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {Food} from '../models/food'

type PostsResponse = Food[]

export const foodsApi = createApi({
  reducerPath: 'foodsApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    // conver to onSnapshot
    getAllMeals: builder.query<PostsResponse, void>({
      queryFn() {
        try {
          let foods: PostsResponse = []
          firestore()
            .collection('foods')
            .onSnapshot(documentSnapshot => {
              let meals: PostsResponse = []
              documentSnapshot?.forEach(food =>
                meals.push({...(food.data() as Food), id: food.id}),
              )
              console.log('User data: ', meals)
            })
          return {data: foods}
        } catch (error) {
          return {error}
        }
      },
    }),
    getOneMeal: builder.query<Food, void>({
      async queryFn(arg: string) {
        try {
          const userFood = await firestore().collection('foods').doc(arg).get()

          let data = userFood.data()
          return {data}
        } catch (error) {
          return {error}
        }
      },
    }),
    removeMeal: builder.query<Food, void>({
      async queryFn(arg: string) {
        try {
          // let food: Food = []
          const userFood = await firestore()
            .collection('foods')
            .doc(arg)
            .delete()
          return {data: userFood}
        } catch (error) {
          return {error}
        }
      },
    }),
    updateMeal: builder.query<Food, void>({
      async queryFn(arg: string, data: string) {
        try {
          // let food: Food = []
          const userFood = await firestore()
            .collection('foods')
            .doc(arg)
            .update({data})
          return {data: userFood}
        } catch (error) {
          return {error}
        }
      },
    }),
    addMeal: builder.query<Food, void>({
      async queryFn(arg: string) {
        try {
          // let food: Food = []
          const userFood = await firestore().collection('foods').add({arg})
          return {data: userFood}
        } catch (error) {
          return {error}
        }
      },
    }),
  }),
})

export const {
  useAddMealQuery,
  useGetAllMealsQuery,
  useGetOneMealQuery,
  useRemoveMealQuery,
  useUpdateMealQuery,
} = foodsApi
