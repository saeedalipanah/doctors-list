<script setup>
import { reactive, ref } from 'vue'
import { useDoctorStore } from '../../stores/doctors'
import { useRouter } from 'vue-router'

const router = useRouter()
const doctorStore = useDoctorStore()

// form date
const enteredName = reactive({
  value: '',
  isValid: true
})
const enteredEmail = reactive({
  value: '',
  isValid: true
})
const enteredDescription = ref('')
const selectedSpecials = ref([])
const availableSpecials = ref([
  'Surgeon',
  'Radiologist',
  'Cardiologist',
  'Psychiatrist',
  'Dermatologist'
])

//name validations
const checkNameValidation = () => {
  enteredName.isValid = /^[A-Za-z\s]+$/.test(enteredName.value)
}
//email validations
const checkEmailValidation = () => {
  enteredEmail.isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail.value)
}

const submitForm = () => {
  if (enteredEmail.isValid && enteredName.isValid) {
    const newDoctor = {
      id: Math.random().toString(16).slice(2), //generate unic id in 13 digits
      name: enteredName.value,
      email: enteredEmail.value,
      specialisations: selectedSpecials.value,
      likes: 0,
      isLiked: false,
      isDisiked: false,
      comment: '',
      description: enteredDescription.value
    }
    doctorStore.createNewDoctor(newDoctor) //set new doctor to the list of doctors
    router.push({ name: 'home' }) // go to the doctors list
    alert('Registered Successfully Show List !')

    resetForm() //reset form after submit
  }
}

const resetForm = () => {
  enteredName.value = ''
  enteredEmail.value = ''
  ;(enteredDescription.value = ''), (selectedSpecials.value = [])
}
</script>

<template>
  <form class="form" @submit.prevent="submitForm">
    <!-- Form explation -->
    <h1>Registration Form</h1>
    <p style="margin-bottom: 5px">
      Enter your information and join the great MediChoice community.
    </p>
    <!-- Name filed -->
    <fieldset :class="{ error: !enteredName.isValid }">
      <label for="name">*Name</label>
      <input
        class="w-100 inp"
        type="text"
        id="name"
        placeholder="Enter your name"
        required
        v-model.trim="enteredName.value"
        @input="checkNameValidation"
      />
      <p v-if="!enteredName.isValid">Only English characters are allowed</p>
    </fieldset>

    <!-- Email field -->
    <fieldset :class="{ error: !enteredEmail.isValid }">
      <label for="email">*Email</label>
      <input
        class="w-100 inp"
        type="email"
        id="email"
        name="email"
        placeholder="Enter your emial"
        required
        v-model.trim="enteredEmail.value"
        @input="checkEmailValidation"
      />
      <p v-if="!enteredEmail.isValid">Invalid email adderss</p>
    </fieldset>

    <!-- Description field -->
    <fieldset>
      <label for="description">Description</label>
      <textarea
        id="description"
        name="desc"
        v-model="enteredDescription"
        maxlength="150"
        rows="5"
        placeholder="Enter your escription"
        class="w-100 inp"
      ></textarea>
    </fieldset>

    <!-- Specialisations field -->
    <fieldset>
      <label for="specialisations">*Specialisations</label>
      <select v-model="selectedSpecials" required multiple class="w-100 inp" style="height: 145px">
        <option disabled value="">At least select one</option>
        <option v-for="(option, i) in availableSpecials" :key="i" :value="option">
          {{ option }}
        </option>
      </select>
    </fieldset>
    
    <!-- Form actions -->
    <div class="actions">
      <router-link class="btn error" :to="{ name: 'home' }">Cancel</router-link>
      <button class="btn success">Submit</button>
    </div>
  </form>
</template>
