export default function binaryIndexOf(arr, searchTimestamp) {
  const isReversedArr = Date.parse(arr[0]) > Date.parse(arr[1]);

  const array = isReversedArr ? arr : arr.reverse();

  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;
  // let resultIndex;
  const _searchTimestamp = Date.parse(searchTimestamp);
  console.log('_searchTimestamp=', _searchTimestamp);

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = Date.parse(array[currentIndex]);

    if (currentElement > _searchTimestamp) {
      minIndex = currentIndex + 1;
    } else if (currentElement < _searchTimestamp) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  const result = !isReversedArr ? (~maxIndex - (arr.length - 1)) : ~maxIndex;

  return Math.abs(result) === array.length ? null : Math.abs(result);
}

// TODO(SEIV): remove all code below after check
// Array.prototype.binaryIndexOf = binaryIndexOf;
// console.log('binaryIndexOf');
//
// const arr = [
//
//
// 	"2017-11-14 15:14:12.895",
// 	"2017-11-14 16:15:33.020",
//
//
//     // "2017-09-28 12:42:51.584",
//     // "2017-09-28 11:41:29.724",
//     // "2017-09-28 10:40:08.833",
//     // "2017-09-28 09:38:48.333",
//     // "2017-09-28 08:37:26.052",
//     // "2017-09-28 07:36:05.474",
//     // "2017-09-28 06:34:44.849",
// ];
// // const searchTime = "2017-09-28 10:40:08.833";
// // const searchTime = "2017-09-28 10:45:08.833";
// // const searchTime = "2017-09-28 07:40:05.474";
// const searchTime = "2017-11-14 16:15:33.022";
// console.log("searchTime=", searchTime,);
// console.log("arr=", arr,);
// const foundIndex = binaryIndexOf(arr, searchTime);
// console.log("foundIndex= ", foundIndex);
