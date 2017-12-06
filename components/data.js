import moment from 'moment';

// Hardcode days for the sake of simplicity
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for times
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const photos = [
  {
    title: 'La La Land',
    photoUrl: 'https://i.imgur.com/po7UezG.jpg',
    description: 'Drama/Romance',
    days,
    times,
  },
  {
    title: 'Paterson',
    photoUrl: 'https://i.imgur.com/pE0C9E0.jpg',
    description: 'Drama/Comedy',
    days,
    times,
  },
  {
    title: 'Jackie',
    photoUrl: 'https://i.imgur.com/VqUi1sw.jpg',
    description: 'Drama/Biography',
    days,
    times,
  },
  {
    title: 'Lo and Behold Reveries of the Connected World',
    photoUrl: 'https://i.imgur.com/s106X7S.jpg',
    description: 'Documentary',
    days,
    times,
  },
  {
    title: '10 Cloverfield Lane',
    photoUrl: 'https://i.imgur.com/kV2BVdH.jpg',
    description: 'Drama',
    days,
    times,
  },
  {
    title: 'Birth of a Nation',
    photoUrl: 'https://i.imgur.com/a6HJj8S.jpg',
    description: 'Fantasy/Myster',
    days,
    times,
  },
  {
    title: 'De Palma',
    photoUrl: 'https://i.imgur.com/oOIa73M.jpg',
    description: 'Documentary',
    days,
    times,
  },
  {
    title: 'Doctor Strange',
    photoUrl: 'https://i.imgur.com/kyHDVOk.jpg',
    description: 'Fantasy/Science Fiction',
    days,
    times,
  },
  {
    title: 'Eddie the Eagle',
    photoUrl: 'https://i.imgur.com/GNrdAuF.jpg',
    description: 'Drama/Sport',
    days,
    times,
  },
  {
    title: 'Pride and prejudice and zombies',
    photoUrl: 'https://i.imgur.com/KhbG0Lw.jpg',
    description: 'Thriller/Action',
    days,
    times,
  },
  {
    title: 'Finding Dory',
    photoUrl: 'https://i.imgur.com/BTexHYJ.jpg',
    description: 'Comedy/Adventure',
    days,
    times,
  },
  {
    title: 'Green Room',
    photoUrl: 'https://i.imgur.com/Q0Ysh7L.jpg',
    description: 'Crime/Thriller',
    days,
    times,
  },
  {
    title: 'Kubo and the Two Strings',
    photoUrl: 'https://i.imgur.com/uTFCKZc.jpg',
    description: 'Fantasy/Adventure',
    days,
    times,
  },
  {
    title: 'In a Valley of Violence',
    photoUrl: 'https://i.imgur.com/DTtJ62G.jpg',
    description: 'Drama/Western',
    days,
    times,
  },
  {
    title: 'O.J.: Made in America',
    photoUrl: 'https://i.imgur.com/T8uc6x8.jpg',
    description: 'Documentary',
    days,
    times,
  },
  {
    title: 'Rogue One: A Star Wars Story',
    photoUrl: 'https://i.imgur.com/zOF2iYc.jpg',
    description: 'Science Fiction/Action',
    days,
    times,
  },
  {
    title: 'Sing Street',
    photoUrl: 'https://i.imgur.com/C3ExEb6.jpg',
    description: 'Drama/Romance',
    days,
    times,
  },
  {
    title: 'Zoolander 2',
    photoUrl: 'https://i.imgur.com/ejlIijD.jpg',
    description: 'Comedy',
    days,
    times,
  },
];