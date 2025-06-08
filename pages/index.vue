<template>
  <v-container>
    <v-row
      row-cols="1"
      row-cols-md="2"
    >
      <v-col>
        <v-img
          src="~@/assets/images/avatar.jpg"
          fluid
        />
      </v-col>

      <v-col>
        <div class="d-grid gap-4">
          <div class="py-2 border-top border-bottom">
            <h1>Николай Волков</h1>

            <div>Россия, Санкт-Петербург</div>
          </div>

          <div>
            <v-row
              v-for="contact in сontacts"
              :key="contact.label"
            >
              <v-col col="3">
                <b>{{ contact.label }}:</b>
              </v-col>
              <v-col col="9">
                <a :href="contact.linkHref">{{ contact.linkText || contact.linkHref }}</a>
              </v-col>
            </v-row>
          </div>

          <div class="py-2 border-top border-bottom">
            <v-grid gap="0.25rem">
              <v-btn
                v-for="skill in skills"
                :key="skill"
                variant="primary"
                size="sm"
              >
                {{ skill }}
              </v-btn>
            </v-grid>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
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

const skills = ref(["CSS", "HTML", "JavaScript"]);
</script>
