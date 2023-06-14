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
</script>

<template>
  <li>
    <div class="d-card">
      <!-- Doctor picture -->
      <img src="@/assets/images/d-avatar1.png" alt="Avatar" class="d-card-avatar" />

      <div class="d-card-informations">
        <!-- Doctor name -->
        <section class="d-flex align-center" style="border-bottom: 1px solid #d2d2d2">
          <img src="@/assets/images/d-avatar1.png" alt="Avatar" class="d-card-rounded-avatar" />
          <h1>{{ doctor.name }}</h1>
        </section>

        <!-- Doctor email -->
        <section>
          <h4 class="d-flex align-center"><i class="bx bxs-envelope"></i>{{ doctor.email }}</h4>
        </section>

        <!-- Doctor Specialisations -->
        <section class="">
          <ul>
            <li v-for="(special, i) in doctor.specialisations" :key="i">
              <h4 class="d-flex align-center">
                <i class="bx bxs-brain"></i>{{ special }}
                <span v-if="i !== doctor.specialisations.length - 1">,</span>
              </h4>
            </li>
          </ul>
        </section>

        <!-- Doctor description -->
        <h6 class="">{{ doctor.description }}</h6>
      </div>

      <div class="d-card-actions">
        <!-- Doctor comment -->
        <section class="">
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
        <section class="d-flex flex-col align-center">
          <div style="font-size: 20px">
            <i
              :class="`bx ${doctor.isLiked ? 'bxs-like' : 'bx-like'}`"
              style="color: #29b36f"
              @click="toggleLike"
            ></i>
            <i
              :class="`bx ${doctor.isDislike ? 'bxs-dislike' : 'bx-dislike'}`"
              style="color: red"
              @click="toggleDislike"
            ></i>
          </div>
          <p>{{ doctor.likes }} likes</p>
        </section>
      </div>
    </div>
  </li>
</template>
