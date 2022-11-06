const randomOptions = [
  [
    "will",
    "will not",
    "might",
    "might not",
    "probably",
    "probably not",
    "possibly",
    "possibly not",
    "presumably",
    "presumably not",
    "may",
    "may not",
  ],
  ["get", "have"],
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
    "wife",
    "husband",
    "boyfriend",
    "girlfriend",
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
