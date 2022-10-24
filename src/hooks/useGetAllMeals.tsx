import firestore from '@react-native-firebase/firestore'
import * as React from 'react'
import {Food} from '../models/food'

type PostsResponse = Food[]

const useGetAllMeals = () => {
  const [loading, setLoading] = React.useState(false)
  const [meals, setMeals] = React.useState<PostsResponse | null>([])

  React.useEffect(() => {
    const subscriber = firestore()
      .collection('meals')
      .orderBy('date', 'desc')
      .onSnapshot(querySnapshot => {
        const meals: PostsResponse = []

        querySnapshot.forEach(documentSnapshot => {
          meals.push({
            ...(documentSnapshot.data() as Food),
            id: documentSnapshot.id,
          })
        })

        setMeals(meals)
        setLoading(false)
      })

    return () => subscriber()
  }, [])

  return {loading, meals}
}

export default useGetAllMeals
