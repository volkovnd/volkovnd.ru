<template>
  <div id="home">
    <div class="logo">
      <img
        src="~@/assets/images/avatar.jpg"
        alt="logo"
      />
    </div>

    <div class="info">
      <h1 class="name py-2">Николай Волков</h1>

      <div class="location py-2 border-top border-bottom">Россия, Санкт-Петербург</div>

      <div class="contacts py-2 border-bottom">
        <div
          v-for="contact in сontacts"
          :key="contact.label"
          class="contact"
        >
          <div class="contact-label">
            <b>{{ contact.label }}:</b>
          </div>
          <div class="contact-link">
            <a
              :href="contact.linkHref"
              target="_blank"
            >
              {{ contact.linkText || contact.linkHref }}
            </a>
          </div>
        </div>
      </div>

      <div class="skills py-1 mb-2 border-bottom">
        <v-btn
          v-for="skill in skills"
          :key="skill"
          variant="primary"
          size="sm"
        >
          {{ skill }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const сontacts = ref([
  {
    label: "E-Mail",
    linkText: "volkovnd@yandex.ru",
    linkHref: "mailto:volkovnd@yandex.ru"
  },
  {
    label: "GitHub",
    linkHref: "https://github.com/volkovnd"
  },
  {
    label: "Telegram",
    linkHref: "https://t.me/volkovnd"
  }
]);

const skills = ref(["HTML", "CSS", "TypeScript", "Vue", "Nuxt"]);
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
}

h1 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: 500;
}
b {
  font-weight: 700;
}

a {
  color: $primary;
  text-decoration: none;

  &:visited {
    color: $primary;
  }
}

#home {
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 1032px;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}

.info {
  flex: 0 0 33%;
  width: 100%;
  max-width: 33%;
}

.logo {
  flex: 0 0 67%;
  width: 100%;
  max-width: 67%;

  img {
    display: block;
    width: 100%;
  }
}

.contact {
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  margin-bottom: 0.375rem;
  font-size: 14px;

  &-label {
    flex: 0 0 100px;
    width: 100%;
    max-width: 100px;
  }

  &-link {
    flex: 1 0;
    width: 100%;

    a {
      text-decoration: underline;
    }
  }
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.mb-1 {
  margin-bottom: 0.5rem;
}

.mb-2 {
  margin-bottom: 1rem;
}

.py-1 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-2 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.border-top {
  border-top: 1px solid #ccc;
}

.border-bottom {
  border-bottom: 1px solid #ccc;
}
</style>
