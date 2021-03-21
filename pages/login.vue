<template>
  <div id="container">
    <div id="content" :class="{'toRight': toRight,'toLeft':toLeft}">
      <client-only>
        <carousel v-bind="options" ref="carousel" id="carousel">
          <slide class="slide">
            <div class="textWrapper">
              <p class="title">Welcome Back</p>
              <p class="para">Hello, great to see you again<br />Login and continue to work!</p>
              <content-button title="Sign Up" :method="moveRight"/>
            </div>
          </slide>
          <slide class="slide">
            <div>
              <div class="textWrapper">
                <p class="title">Signup</p>
                <p class="para">Hello, great to see you again<br />Login and continue to work!</p>
                <content-button title="Sign Up" :method="moveLeft"/>
              </div>
            </div>
          </slide>
        </carousel>
      </client-only>
    </div>
    <div id="form" :class="{'toRightForm': toRightForm,'toLeftForm':toLeftForm}">
      <div id="loginForm" v-if="isLogin">
        <p class="greenColor title">Log In To Your Account</p>
        <div id="serviceButtonWrapper">
          <service-button title="F" @click="moveLeft"/>
          <service-button title="G+" @click="moveLeft"/>
        </div>
        <p class="grey">or use your email account</p>
        <styled-input @valueChange="loginEmailChange" type="text" placeholder="Email"/>
      </div>
      <div v-else>
        <p class="greenColor title">Create Your Account</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ContentButton from '../components/ContentButton.vue'
import ServiceButton from '../components/ServiceButton.vue'
import StyledInput from '../components/StyledInput.vue'

  export default {
    components: {
      ContentButton,
      ServiceButton,
      StyledInput
    },

    data() {
      return {
        toRight: false,
        toLeft: false,
        toLeftForm:false,
        toRightForm:false,
        isLogin: true,
        options: {
          loop: true,
          mouseDrag: false,
          perPage: 1,
          speed:1000,
          paginationEnabled: false
        }
      }
    },

    methods: {
      moveRight() {
        this.toLeft = false
        this.toRight = true
        this.$refs.carousel.goToPage(this.$refs.carousel.currentPage + 1)
        this.toLeftForm = true
        this.toRightForm = false
        setTimeout(() => {
          this.isLogin = false
        }, 400)
      },

      moveLeft() {
        this.toRight = false
        this.toLeft = true
        this.$refs.carousel.goToPage(this.$refs.carousel.currentPage - 1)
        this.toRightForm = true
        this.toLeftForm = false
        setTimeout(() => {
          this.isLogin = true
        }, 400)
      },

      loginEmailChange(e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>
#container {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
}

#content {
  display: flex;
  background: rgb(2,0,36);
  background: linear-gradient(172deg, rgba(2,0,36,1) 0%, rgba(76,191,152,1) 0%, rgba(78,175,186,1) 100%);
  width: 30%;
  height: 100%;
  position: absolute;
  white-space: nowrap;
}

#content p{
  color: white;
}

.title {
  font-size: 3.4rem;
}

.para {
  font-size: 1.6rem;
  padding-top: 2rem;
  text-align: center;
}

.textWrapper {
  display: flex;
  flex-direction: column;
  align-items:center;
  height: 100vh;
  padding-top: 20rem;
}

#carousel {
  width: 36rem;
}

.toRight {
  animation: toRight 1.3s forwards;
}

.toLeft {
  animation: toLeft 1.3s forwards;
}

@keyframes toRight {
  0% {
    left: 0%;
  }
  30% {
    width: 40%;
  }
  70% {
    width: 30%;
  }
  100% {
    left: 70%
  }
}

@keyframes toLeft {
  0% {
    left: 70%;
  }
  30% {
    width: 40%;
  }
  70% {
    width: 30%;
  }
  100% {
    left: 0%;
  }
}

.toLeftForm {
  animation: toLeftForm 1.5s forwards;
}

.toRightForm {
  animation: toRightForm 1.5s forwards;
}

@keyframes toLeftForm {
  0% {
    margin-left: 30%;
  }
  100% {
    margin-left: 0%;
  }
}

@keyframes toRightForm {
  0% {
    margin-left: 0%;
  }
  100% {
    margin-left: 30%;
  }
}
  
.section {
  transition: all 1s ease;
  width: 100%;
  padding-top: 20rem;
}

#form {
  width: 70%;
  margin-left: 30%;
  text-align: center;
  padding-top: 8rem;
}

#form p {
  width: 100%;
  text-align: center;
}

#serviceButtonWrapper {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.greenColor {
  color: #4CBE9B;
}

.grey {
  color: rgb(195, 194, 194);
}


</style>
