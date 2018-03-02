import { chunk } from 'lodash';

console.log(chunk([1,2,3,4,5], 2));

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