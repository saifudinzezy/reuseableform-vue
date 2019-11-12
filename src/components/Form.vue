<template>
  <form>
    <p>{{ names }}</p>
    <v-text-field v-model="name" label="Name Universitas" @input="submit" />
    <v-text-field v-model="lokasi" label="Lokasi" @input="submit" />
    <v-select :items="tamat" v-model="school" label="Apa kamu tamat tingkat pendidikan ini?" />
    <v-text-field v-if="checked" label="E-mail" />

    <p>{{ checked }}</p>
    <p></p>

    <!-- <v-btn class="mr-4" @click="submit">submit</v-btn> -->
  </form>
</template>

<script>
export default {
  props: {
    names: String,
    checked: String,
    smp: {
      type: Array
    }
  },
  data: () => ({
    name: "",
    lokasi: "",
    school: "",
    tamat: [
      "Belum tamat (masih kuliah).",
      "Belum tamat dan tidak lanjut.",
      "Sudah tamat.",
      "Tidak tamat dan tidak lanjut."
    ]
  }),
  methods: {
    submit() {
      this.$emit("input", this.name);
      console.log(this.name);
    }
  }
};
</script>