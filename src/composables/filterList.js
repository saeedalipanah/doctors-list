
// filterList(list , var that sould list filter based on)
// return an filtered array
export default function filterList(list, enteredSearchInput) {
  return list.filter((element) =>
    element.name.toUpperCase().includes(enteredSearchInput.toUpperCase())
  )
}
