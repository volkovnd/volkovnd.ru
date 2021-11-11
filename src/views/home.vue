<template>
  <div id="page">
    <v-container>
      <div class="row justify-content-around align-items-md-stretch">
        <div class="col-12 col-md">
          <v-img fluid src="~@/assets/avatar.jpg" />
        </div>
        <div class="col-12 col-md">
          <div class="py-3">
            <h1 class="mb-4">Николай Волков</h1>

            <div class="mb-3 pt-3 pb-3 border-top border-bottom">
              <div>Россия, Санкт-Петербург</div>
            </div>

            <div class="mb-3 pb-3 border-bottom">
              <v-grid v-for="contact in computedContacts" :key="contact.label" columns="4" gap="0.5rem 1rem">
                <v-grid-col col="1">
                  <b>{{ contact.label }}:</b>
                </v-grid-col>
                <v-grid-col col="3">
                  <a :href="contact.linkHref">{{ contact.linkText }}</a>
                </v-grid-col>
              </v-grid>
            </div>

            <div class="mb-3 pb-3 border-bottom">
              <v-grid gap="0.5rem">
                <v-btn v-for="skill in skills" :key="skill" variant="primary">{{ skill }}</v-btn>
              </v-grid>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      contacts: [
        {
          label: "E-Mail",
          linkText: "volkovnd@yandex.ru",
          linkHref: "mailto:volkovnd@yandex.ru",
        },
        {
          label: "GitHub",
          linkText: "https://github.com/volkovnd",
        },
        {
          label: "Telegram",
          linkText: "https://t.me/volkovnd",
        },
      ],
      skills: ["CSS", "HTML", "JavaScript"],
    };
  },
  computed: {
    computedContacts() {
      return this.contacts.map((contact) => ({
        linkHref: contact.linkText,

        ...contact,
      }));
    },
  },
};
</script>
