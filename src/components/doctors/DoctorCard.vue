<script setup>
import { computed } from 'vue'

// props accepted
const { doctor } = defineProps(['doctor'])

//like logic
const toggleLike = () => {
  if (!doctor.isLiked) {
    doctor.isLiked = true
    doctor.likes++
    if (doctor.isDislike) {
      //if user already have an dislike active and want to like
      doctor.isDislike = false
      doctor.likes++
    }
  } else {
    doctor.isLiked = false
    doctor.likes--
  }
}
//dislike logic
const toggleDislike = () => {
  if (!doctor.isDislike) {
    doctor.isDislike = true
    doctor.likes--
    if (doctor.isLiked) {
      //if user already have and like active and want to dislike
      doctor.isLiked = false
      doctor.likes--
    }
  } else {
    doctor.isDislike = false
    doctor.likes++
  }
}

//template class handlers
const likeClassHandler = computed(() => (doctor.isLiked ? 'bxs-like' : 'bx-like'))
const dislikeClassHandler = computed(() => (doctor.isDislike ? 'bxs-dislike' : 'bx-dislike'))
</script>

<template>
  <li>
    <div class="d-card">
      <!-- Doctor picture -->
      <img src="@/assets/images/d-avatar.png" alt="Avatar" class="d-card-avatar" />

      <!-- Doctor name -->
      <section class="d-card-info-sec">
        <h1>{{ doctor.name }}</h1>
      </section>

      <!-- Doctor email -->
      <section class="d-card-info-sec responsive">
        <label for="">Email</label>
        <h4>{{ doctor.email }}</h4>
      </section>

      <!-- Doctor Specialisations -->
      <section class="d-card-info-sec responsive">
        <label for="">Specialisations</label>
        <ul>
          <li v-for="(special, i) in doctor.specialisations" :key="i">
            <h4>{{ special }} <span v-if="i !== doctor.specialisations.length - 1">,</span></h4>
          </li>
        </ul>
      </section>

      <!-- Doctor comment -->
      <section class="d-card-info-sec">
        <label for="" class="comment-label">Comment</label>
        <textarea
          class="comment-input"
          rows="4"
          maxlength="120"
          v-model="doctor.comment"
          placeholder="Write your comment"
        />
      </section>

      <!-- Doctor like actions -->
      <section class="d-card-info-sec d-flex flex-col align-center">
        <div class="actions">
          <i :class="`bx ${likeClassHandler}`" style="color: #29b36f" @click="toggleLike"></i>
          <i :class="`bx ${dislikeClassHandler}`" style="color: red" @click="toggleDislike"></i>
        </div>
        <p>{{ doctor.likes }} likes</p>
      </section>
    </div>
  </li>
</template>
