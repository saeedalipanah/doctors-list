import { ref } from 'vue'

export default function setup() {
  const sortOrder = ref('')
  const toggleSortOrder = () => {
    if (sortOrder.value === '') {
      sortOrder.value = 'asc'
    } else if (sortOrder.value === 'asc') {
      sortOrder.value = 'desc'
    } else if (sortOrder.value === 'desc') {
      sortOrder.value = ''
    }
  }

  return { sortOrder, toggleSortOrder }
}
