import { defineStore } from 'pinia'
import { ref  } from 'vue'

export const useDoctorStore = defineStore('doctor', () => {
  const doctors = ref([
    {
      id: 'e1ddbd8e43e6b',
      name: 'Anna',
      email: 'anna@poz.pl',
      specialisations: ['Surgeon', 'Radiologist'],
      likes: 83,
      isLiked: false,
      isDisiked: false,
      comment: '',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo commodi aspernatur, quaerat amet iure perspiciatis deleniti earum magnam.'
    },
    {
      id: 'e1dcbd8443e6b',
      name: 'Maria',
      email: 'maria@poz.pl',
      specialisations: ['Radiologist', 'Dermatologist'],
      likes: 24,
      isLiked: false,
      isDisiked: false,
      comment: '',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo commodi aspernatur, quaerat amet iure perspiciatis deleniti earum magnam.'
    },
    {
      id: 'e5ddbd3e43e6a',
      name: 'Saeed',
      email: 'saeed55@gmail.com',
      specialisations: ['Cardiologist', 'Dermatologist'],
      likes: 352,
      isDisiked: false,
      isLiked: false,
      comment: '',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo commodi aspernatur, quaerat amet iure perspiciatis deleniti earum magnam.'
    },
    {
      id: 'b1dabd8e22e5b',
      name: 'Soran',
      email: 'soran@poz.pl',
      specialisations: ['Psychiatrist'],
      likes: 105,
      isDisiked: false,
      isLiked: false,
      comment: '',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo commodi aspernatur, quaerat amet iure perspiciatis deleniti earum magnam.'
    },
    {
      id: 'b1aaba8e22e5b',
      name: 'mehran',
      email: 'mehran@gmail.pl',
      specialisations: ['Psychiatrist','Dermatologist','Surgeon'],
      likes: 245,
      isDisiked: false,
      isLiked: false,
      comment: '',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo commodi aspernatur, quaerat amet iure perspiciatis deleniti earum magnam.'
    },
  ])

  const createNewDoctor = (doctor) => {
    doctors.value.push(doctor)
  }
  return { doctors, createNewDoctor, }
})
