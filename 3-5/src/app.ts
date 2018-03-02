const NUM = 45

interface Cat {
  name: String,
  gendor: String
}

function touchCat(cat: Cat) {
  console.log('miao~', cat.name)
}

touchCat({
  name: 'Tom',
  gendor: 'male'
});