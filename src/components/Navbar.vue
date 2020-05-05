<template>
  <div>
    <nav class="nav__wrapper" id="navbar">
      <ul class="nav">
        <li role="presentation" :class="{ activeNav: this.AboutActive }">
          <a
            href="#About"
            class="nav__element"
            id="AboutNav"
            v-smooth-scroll
            v-on:click="
              toggleActive();
              AboutActive = true;
            "
          >
            <span class="nav__counter">About</span>
          </a>
        </li>

        <li role="presentation" :class="{ activeNav: this.DownloadActive }">
          <a
            href="#Download"
            class="nav__element"
            id="DownloadNav"
            v-smooth-scroll
            v-on:click="
              toggleActive();
              DownloadActive = true;
            "
          >
            <span class="nav__counter">Download</span>
          </a>
        </li>

        <li
          role="presentation"
          :class="{ activeNav: this.SubmitActive }"
          id="SubmitNav"
        >
          <a
            href="#Submit"
            class="nav__element"
            v-smooth-scroll
            v-on:click="
              toggleActive();
              SubmitActive = true;
            "
          >
            <span class="nav__counter">Submit</span>
          </a>
        </li>

        <li role="presentation" :class="{ activeNav: this.ContactActive }">
          <a
            href="#Contact"
            class="nav__element"
            id="ContactNav"
            v-smooth-scroll
            v-on:click="
              toggleActive();
              ContactActive = true;
            "
          >
            <span class="nav__counter">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
    <Scheme @UpdateScroll="updateScroll" />
  </div>
</template>

<script>
import Scheme from "@/components/MainScheme";

export default {
  name: "Navbar",
  components: {
    Scheme
  },
  data: function() {
    return {
      AboutActive: true,
      DownloadActive: false,
      SubmitActive: false,
      ContactActive: false
    };
  },
  methods: {
    toggleActive() {
      this.AboutActive = false;
      this.DownloadActive = false;
      this.SubmitActive = false;
      this.ContactActive = false;
    },
    updateScroll(Elem) {
      this.toggleActive();
      if (Elem == "About") this.AboutActive = true;
      else if (Elem == "Download") this.DownloadActive = true;
      else if (Elem == "Submit") this.SubmitActive = true;
      else if (Elem == "Contact") this.ContactActive = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  &__wrapper {
    position: fixed;
    height: 100%;
    padding: 0vw;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
  }

  & {
    margin: 0 0 25vh 3vw;
  }
  &__counter {
    font-size: 24px;
    transition: all 0.15s ease-out;
  }
  &__title {
    font-size: 32px;
    font-weight: 300;
    margin: 0 0 0.25em;
    width: 300px;
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: height 0.3s ease-out, opacity 0.2s ease-out;
  }
  &__body {
    font-weight: 100;
    font-size: 18px;
    font-size: 18px;
    width: 300px;
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: height 0.3s ease-out, opacity 0.2s ease-out;
  }

  li {
    position: relative;
    transition: all 0.3s ease-out;
    margin-bottom: 1em;
    list-style-type: none;

    &:after {
      content: "";
      display: block;
      border-left: 2px solid white;
      border-top: 2px solid white;
      height: 250px;
      width: 20px;
      position: absolute;
      left: -30px;
      top: 15px;
    }

    a {
      display: block;
      padding: 0;
      color: #fff;
      transition: all 0.15s ease-out;
      text-decoration: none;

      &:hover {
        background-color: transparent;
        padding-left: 1em;
      }
      &:focus {
        background-color: transparent;
      }
    }

    &.activeNav {
      pointer-events: none;
      padding-left: 1em;

      &:after {
        width: 35px;
        height: 400px;
        top: 35px;
      }

      .nav__counter {
        font-size: 48px;
      }
      .nav__title {
        height: 40px;
        opacity: 1;
        overflow: visible;
      }
      .nav__body {
        height: 100px;
        opacity: 1;
        overflow: visible;
      }
    }
  }
}</style
>>
