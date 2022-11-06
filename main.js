const randomOptions = [
  [
    "will",
    "won't",
    "might",
    "might not",
    "will probably",
    "probably won't",
    "will possibly",
    "possibly won't",
    "may",
    "may not",
  ],
  ["get"],
  [
    "an amazing",
    "an awesome",
    "a great",
    "an excellent",
    "a fabulous",
    "a bad",
    "an odd",
    "an outrageous",
    "a hedious",
    "an awful",
  ],
  [
    "couple",
    "friend",
    "relationship",
    "experience",
    "story to tell",
    "trip",
    "health",
    'car',
    'house',
    'job',
    'surprise',
    'finance status'
  ],
];

const fYatesShuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
  }
  return arr[0];
}

const messageMixer = () => {
  return 'You ' + randomOptions.map(i => fYatesShuffle(i)).join(' ');
}

//Test program:
for(let i=0; i<10; i++){
  console.log(messageMixer());
}