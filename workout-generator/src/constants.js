export const EQUIPMENT_LIST = [
  {
    id: "1",
    title: "Jump Rope",
    description: "add desc here!"
  },
  {
    id: "2",
    title: "Power Ball",
    description: "add desc here!"
  },
  {
    id: "3",
    title: "Dumbbells",
    description: "add desc here!"
  },
  {
    id: "4",
    title: "Barbell / Plates",
    description: "add desc here!"
  },
  {
    id: "5",
    title: "Pull-Up Bar",
    description: "add desc here!"
  },
  {
    id: "6",
    title: "Kettlebell",
    description: "add desc here!"
  },
  {
    id: "7",
    title: "Jumping Box",
    description: "add desc here!"
  },
  {
    id: "8",
    title: "Rings",
    description: "add desc here!"
  },
  {
    id: "9",
    title: "Resistance Band",
    description: "add desc here!"
  },
  {
    id: "10",
    title: "Sandbag",
    description: "add desc here!"
  },
  {
    id: "11",
    title: "None",
    description: "add desc here!"
  }
];

export const MUSCLE_LIST= [
  {
    id: "1",
    title: "Back"
  },
  {
    id: "2",
    title: "Legs"
  },
  {
    id: "3",
    title: "Shoulder"
  },
  {
    id: "4",
    title: "Arms"
  },
  {
    id: "5",
    title: "Full-Body"
  },
  {
    id: "6",
    title: "Abs"
  },  
];

const generateMinutes = () => {
  let minutes = [];
  for (let i = 0; i < 11; i++) {
    minutes.push({ value: i*60000, text: i, key: i })
  };
  return minutes;
}

const generateSeconds = () => {
  let seconds = [];
  for (let i = 0; i < 60; i=i+5) {
    seconds.push({ value: i*1000, text: i, key: i })
  };
  return seconds;
}

export const MINUTES = generateMinutes();
export const SECONDS = generateSeconds();