<template>
  <v-app>
    <v-app-bar app color="primary" dark></v-app-bar>
    <v-content class="mt-10 mb-10 mr-10 ml-10">
      <Reuse />
    </v-content>
  </v-app>
</template>

<script>
// import Form from "./components/Form";
import Reuse from "./components/Reuse";

export default {
  name: "App",

  components: {
    // Form,
    Reuse
  },

  data: () => ({
    //
    sekolah: ["smp", "sma"],
    school: "",
    name: "",
    schools: [
      "TK",
      "SD Kelas 1",
      "SD Kelas 2",
      "SD Kelas 3",
      "SD Kelas 4",
      "SD Kelas 5",
      "SD Kelas 6",
      "Paket A (setara SD)",
      "Tamat Paket A (setara SD)",
      "Tamat SD", //SD
      "SMP Kelas 1 atau Kelas 7",
      "SMP Kelas 2 atau Kelas 8",
      "SMP Kelas 3 atau Kelas 9",
      "Paket B (setara SMP)",
      "Tamat Paket B (setara SMP)",
      "Tamat SMP", //SMP
      "SMA/SMK Kelas 1 atau Kelas 10",
      "SMA/SMK Kelas 2 atau Kelas 11",
      "SMA/SMK Kelas 3 atau Kelas 12",
      "Paket C (setara SMA)",
      "Tamat Paket C (setara SMA)",
      "Tamat SMA/SMK", //SMK
      "D3 - Masih kuliah",
      "Tamat D3", //D3
      "D4 - Masih kuliah",
      "Tamat D4", //D4
      "S1 - Masih kuliah",
      "Tamat S1", //S1
      "S2 - Masih kuliah",
      "Tamat S2", //S2
      "S3 - Masih kuliah",
      "Tamat S3" //S3
    ]
  }),
  mounted() {},
  beforeUpdate() {}
};
</script>
