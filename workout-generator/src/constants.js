export const EQUIPMENT_LIST = [
  {
    id: "1",
    title: "Jump Rope",
    description: "a rope!",
    url: "https://images-na.ssl-images-amazon.com/images/I/71aRUlvJegL._AC_SL1500_.jpg"
  },
  {
    id: "2",
    title: "Power Ball",
    description: "a ball!",
    url: "https://image.made-in-china.com/43f34j00amWQTVwCCogj/Power-Training-Fitness-Iron-Sand-Inside-Gym-Ball-Dead-Ball-Slam-Ball.jpg"
  },
  {
    id: "3",
    title: "Dumbbells",
    description: "a dumbbell!",
    url: "https://yorkbarbell.com/wp-content/uploads/2018/06/25-2.jpg"
  },
  {
    id: "4",
    title: "Barbell / Plates",
    description: "a plate!",
    url: "https://www.tunturi.org/website/Accessoires/14TUSCL381.jpg"
  },
  {
    id: "5",
    title: "Pull-Up Bar",
    description: "a pull bar!",
    url: "https://www.repfitness.com/media/catalog/product/w/e/web-381b0466_dims.jpg"
  },
  {
    id: "6",
    title: "Kettlebell",
    description: "a kettle!",
    url: "https://cdn.webshopapp.com/shops/281654/files/289054299/pe-kettlebell.jpg"
  },
  {
    id: "7",
    title: "Jumping Box",
    description: "a box!",
    url: "http://t0.gstatic.com/images?q=tbn%3AANd9GcQT-rd4q4z6QmThrkCQNxKb8nzytowcZLemchvrW5iiJ-d0KXclkO0qqzx88gleZGMzsw4Y6MJw&usqp=CAc"
  },
  {
    id: "8",
    title: "Rings",
    description: "a ring!",
    url: "https://www.roguefitness.com/media/catalog/product/cache/1/rogue_header_2015/472321edac810f9b2465a359d8cdc0b5/r/o/rogue-wood-rings-header1.jpg"
  },
  {
    id: "9",
    title: "Resistance Band",
    description: "a band!",
    url: "http://t0.gstatic.com/images?q=tbn%3AANd9GcSb9unY_w_KxAjAOYmgQpiVvs5ehKosInu6dKmu5O5rbJEGw0fNy60pCwP8HdDVHFNM2vZ_6e3c&usqp=CAc"
  },
  {
    id: "10",
    title: "Sandbag",
    description: "a bag!",
    url: "https://www.onnit.com/onnit/images/authority/6964.png?ver&w=735&auto=format"
  },
  {
    id: "11",
    title: "None",
    description: "a body!",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4XxscgsT612bQY1TDCYRmnxu1NztlGbdZEvW1E_ck2Bbj_g3T"
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