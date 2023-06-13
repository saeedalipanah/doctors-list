<script setup>
// components
import DoctorCard from './DoctorCard.vue'
import { useRouter } from 'vue-router';
import { useDoctorStore } from '../../stores/doctors'
import { computed, ref } from 'vue'
const router = useRouter()
//stored doctors fetch
const doctorStore = useDoctorStore()
const doctors = computed(() => doctorStore.doctors)

//filter on name
const searchedName = ref('')
let filteredList = ref([])
const onChangeSearchInput = () => {
  filteredList.value = doctors.value.filter((doctor) =>
    doctor.name.toUpperCase().includes(searchedName.value.toLocaleUpperCase())
  )
}

//sort on likes
const sortOrder = ref('')
const originalDoctorsList = ref('')
originalDoctorsList.value = [...doctors.value]
const toggleSort = () => {
  if (sortOrder.value === '') {
    sortOrder.value = 'asc'
  } else if (sortOrder.value === 'asc') {
    sortOrder.value = 'desc'
  } else if (sortOrder.value === 'desc') {
    sortOrder.value = ''
  }
}
const sortedList = computed(() => {
  const copy = searchedName.value ? [...filteredList.value] : [...doctors.value]
  if (sortOrder.value === 'asc') {
    return copy.sort((a, b) => b.likes - a.likes)
  } else if (sortOrder.value === 'desc') {
    return copy.sort((a, b) => a.likes - b.likes)
  }
})
const sortIconHanler = computed(() =>
  sortOrder.value === 'asc' ? 'down' : sortOrder.value === 'desc' ? 'up' : ''
)


// show the list based on what filter and sort applied
const listToShow = computed(() =>
  searchedName.value ? filteredList.value : sortOrder.value ? sortedList.value : doctors.value
)

const goToReg = ()=>{
  router.push({name:'register'})
}

</script>

<template>
  <div class="doctors-container">

  <!-- Header (search bar) -->
    <header class="doctors-header d-flex">
    
    <!-- Filters -->
      <figure class="filters">
        <div class="input-box">
          <input
            type="search"
            v-model.trim="searchedName"
            placeholder="Search doctor name"
            @input="onChangeSearchInput"
          />
          <i class="bx bx-search-alt-2 bx-tada"></i>
        </div>
        <div class="sort-box d-flex align-center">
          <h3>SortBy</h3>
          <button @click="toggleSort" class="d-flex align-center  new-btn">
            <span> Popularity </span>
            <i :class="`bx bxs-${sortIconHanler}-arrow`" style="margin-left: 5px"></i>
          </button>
        </div>
      </figure>

      <!-- Register btn -->
      <button class="new-btn d-flex align-center" @click="goToReg">
         Register 
        <i class="bx bx-user-plus"></i>
      </button>
    </header>

    <!-- list of doctors -->
    <TransitionGroup tag="ul" name="fade" class="doctors">
      <doctor-card v-for="(doctor, index) in listToShow" :key="index" :doctor="doctor">
      </doctor-card>
    </TransitionGroup>
  </div>
</template>