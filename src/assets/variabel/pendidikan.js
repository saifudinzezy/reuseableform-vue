const ops = [{
        name: "TK",
        description: "desc 1",
        detail: ["TK"],
        checkSelect: false,
        conditionInput: false
    },
    {
        name: "SD Kelas 1",
        description: "desc 21",
        detail: ["TK", "SD"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "SD Kelas 2",
        description: "desc 22",
        detail: ["TK", "SD"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "SD Kelas 3",
        description: "desc 23",
        detail: ["TK", "SD"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "SD Kelas 4",
        description: "desc 24",
        detail: ["TK", "SD"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "SD Kelas 5",
        description: "desc 25",
        detail: ["TK", "SD"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "SD Kelas 6",
        description: "desc 26",
        detail: ["TK", "SD"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "Paket A (Setara SD)",
        description: "desc 26",
        detail: ["TK", "SD"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "Tamat Paket A (Setara SD)",
        description: "desc 27",
        detail: ["TK", "SD"],
        checkSelect: false,
        conditionInput: false
    },
    {
        name: "Tamat SD",
        description: "desc 28",
        detail: ["TK", "SD"],
        checkSelect: false,
        conditionInput: false
    },
    {
        name: "SMP Kelas 1 atau Kelas 7",
        description: "desc SMP 1",
        detail: ["TK", "SD", "SMP"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "SMP Kelas 2 atau Kelas 8",
        description: "desc SMP 2",
        detail: ["TK", "SD", "SMP"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "SMP Kelas 3 atau Kelas 9",
        description: "desc SMP 3",
        detail: ["TK", "SD", "SMP"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "Paket B (Setara SMP)",
        description: "desc SMP 4",
        detail: ["TK", "SD", "SMP"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "Tamat Paket B (Setara SMP)",
        description: "desc SMP 5",
        detail: ["TK", "SD", "SMP"],
        checkSelect: false,
        conditionInput: false
    },
    {
        name: "Tamat SMP",
        description: "desc SMP 6",
        detail: ["TK", "SD", "SMP"],
        checkSelect: false,
        conditionInput: false
    },
    {
        name: "SMA/SMK Kelas 1 atau Kelas 10",
        description: "desc 31",
        detail: ["TK", "SD", "SMP", "SMA"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "SMA/SMK Kelas 2 atau Kelas 11",
        description: "desc 32",
        detail: ["TK", "SD", "SMP", "SMA"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "SMA/SMK Kelas 3 atau Kelas 12",
        description: "desc 33",
        detail: ["TK", "SD", "SMP", "SMA"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "Paket C (Setara SMA)",
        description: "desc 34",
        detail: ["TK", "SD", "SMP", "SMA"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "Tamat Paket C (Setara SMA)",
        description: "desc 35",
        detail: ["TK", "SD", "SMP", "SMA"],
        checkSelect: false,
        conditionInput: false
    },
    {
        name: "Tamat SMA/SMK",
        description: "desc 36",
        detail: ["TK", "SD", "SMP", "SMA"],
        checkSelect: false,
        conditionInput: false
    },
    {
        name: "D3 - Masih Kuliah",
        description: "desc 41",
        detail: ["TK", "SD", "SMP", "SMA", "D3"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "Tamat D3",
        description: "desc 42",
        detail: ["TK", "SD", "SMP", "SMA", "D3"],
        checkSelect: false,
        conditionInput: false
    },
    {
        name: "D4 - Masih Kuliah",
        description: "desc 51",
        detail: ["TK", "SD", "SMP", "SMA", "D3", "D4"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "Tamat D4",
        description: "desc 52",
        detail: ["TK", "SD", "SMP", "SMA", "D3", "D4"],
        checkSelect: false,
        conditionInput: false
    },
    {
        name: "S1 - Masih Kuliah",
        description: "desc 61",
        detail: ["TK", "SD", "SMP", "SMA", "D3", "D4", "S1"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "Tamat S1",
        description: "desc 62",
        detail: ["TK", "SD", "SMP", "SMA", "D3", "D4", "S1"],
        checkSelect: false,
        conditionInput: false
    },
    {
        name: "S2 - Masih Kuliah",
        description: "desc 71",
        detail: ["TK", "SD", "SMP", "SMA", "D3", "D4", "S1", "S2"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "Tamat S2",
        description: "desc 72",
        detail: ["TK", "SD", "SMP", "SMA", "D3", "D4", "S1", "S2"],
        checkSelect: false,
        conditionInput: false
    },
    {
        name: "S3 - Masih Kuliah",
        description: "desc 81",
        detail: ["TK", "SD", "SMP", "SMA", "D3", "D4", "S1", "S2", "S3"],
        checkSelect: true,
        conditionInput: false
    },
    {
        name: "Tamat S3",
        description: "desc 82",
        detail: ["TK", "SD", "SMP", "SMA", "D3", "D4", "S1", "S2", "S3"],
        checkSelect: false,
        conditionInput: false
    }
]

//name schools
const nameSchool = ["TK", "SD", "SMP", "SMA/SMK", "D3", "D4", "S1", "S2", "S3"]

//items
const items = [
    "Belum tamat (masih kuliah)",
    "Belum tamat dan tidak lanjut",
    "Sudah tamat",
    "Tidak tamat dan tidak lanjut"
]

export {
    ops,
    nameSchool,
    items
}