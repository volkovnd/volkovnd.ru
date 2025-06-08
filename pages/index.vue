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

      <div class="location py-1 border-top border-bottom font-small">Россия, Санкт-Петербург</div>

      <div class="contacts py-1 border-bottom">
        <div
          v-for="contact in сontacts"
          :key="contact.label"
          class="contact font-small flex"
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

      <div class="skills gap-1 flex py-1 mb-2 border-bottom">
        <v-tag
          v-for="skill in skills"
          :key="skill"
          variant="primary"
          size="sm"
        >
          {{ skill }}
        </v-tag>
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
#home {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1032px;
  margin-right: auto;
  margin-left: auto;
}

.info {
  flex: 0 0 33%;
  width: 100%;
  max-width: 33%;
  padding-right: 1rem;
  padding-left: 1rem;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    width: 100%;
    max-width: 100%;
  }
}

.logo {
  flex: 0 0 67%;
  width: 100%;
  max-width: 67%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    width: 100%;
    max-width: 100%;
  }

  img {
    display: block;
    width: 100%;
  }
}

.contact {
  align-items: center;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;

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
</style>
