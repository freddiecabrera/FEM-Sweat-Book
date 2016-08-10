const initialState = [
  { id: 1, name: 'Legs', type: 'Weight Training' },
  { id: 2, name: 'Shoulders', type: 'Weight Training' },
  { id: 3, name: 'Arms', type: 'Weight Training' },
  { id: 4, name: 'Chest', type: 'Weight Training' },
  { id: 5, name: 'Back', type: 'Weight Training' },
  { id: 6, name: 'Core', type: 'Weight Training' },
  { id: 7, name: 'Cardio', type: 'Cardio' }
]

const Categories = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default Categories
