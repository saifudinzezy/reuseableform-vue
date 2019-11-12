<template>
  <form>
    <!-- :hint="`${select.name}`" -->
    <v-select
      v-model="select"
      :items="ops"
      @change="tambah(select)"
      item-text="name"
      item-value="description"
      label="Pilih tingkatan sekolah yang terakhir atau saat ini kamu ikuti."
      persistent-hint
      return-object
      single-line
    />
    <!-- {{select}} -->

    <!-- <v-btn small color="primary" dark class="mb-10" @click="adds">Add</v-btn> -->

    <div v-for="(item, index) in sekolah" :key="index" class="mb-10">
      <h4>{{nameSchool[index]}}</h4>
      <v-text-field label="Nama Sekolah/Universitas" v-model="item.name" />
      <v-text-field label="Lokasi" v-model="item.place" />
      <v-select
        :items="items"
        v-model="valueInput"
        @change="checkInput(valueInput)"
        label="Apa kamu tamat tingkat pendidikan ini?"
        dense
        v-if="conditionSelect"
      />
      <v-text-field
        label="Berhenti di tahun keberapa?"
        v-if="conditionInput"
        v-model="item.yearBreak"
      />
      <v-text-field label="Tahun Kelulusan" v-model="item.yearEnd" />
      <v-text-field
        label="Jurusan yang diambil/Pelajaran yang paling kamu suka"
        v-model="item.jurusan"
      />
      <v-text-field label="Nilai IP terakhir/Nilai rata-rata terakhir" v-model="item.ip" />
      <v-textarea
        label="Ada hal menarik yang ingin kamu sampaikan? Misalnya kamu pernah dapat nilai tertinggi, beasiswa, atau sekolah kamu sekolah favorit."
        v-model="item.comment"
      />
    </div>
    {{sekolah}}
  </form>
</template>

<script>
import { nameSchool, items } from "@/assets/variabel/pendidikan";
import * as pendidikan from "@/assets/variabel/pendidikan";

export default {
  data() {
    return {
      conditionSelect: false,
      conditionInput: false,
      valueInput: "",
      select: { name: "TK", description: "desc 1" },
      sekolah: [
        {
          name: "",
          place: "",
          yearBreak: "",
          yearEnd: "",
          jurusan: "",
          ip: "",
          comment: ""
        }
      ],
      items: items,
      nameSchool: nameSchool,
      ops: pendidikan.ops
    };
  },
  methods: {
    adds() {
      this.sekolah.push({
        name: "",
        place: "",
        yearBreak: "",
        yearEnd: "",
        jurusan: "",
        ip: "",
        comment: ""
      });
    },
    tambah(array) {
      this.sekolah = [];
      this.conditionSelect = array.checkSelect;
      this.conditionInput = array.checkInput;
      for (let index = 0; index < array.detail.length; index++) {
        this.sekolah.push({
          name: "",
          place: "",
          yearBreak: "",
          yearEnd: "",
          jurusan: "",
          ip: "",
          comment: ""
        });
      }
    },
    checkInput(value) {
      if (
        value == "Tidak tamat dan tidak lanjut" ||
        value == "Belum tamat dan tidak lanjut"
      ) {
        console.log(value);
        this.conditionInput = true;
      } else {
        this.conditionInput = false;
      }
    }
  }
};
</script>