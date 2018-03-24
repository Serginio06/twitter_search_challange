export const getFormatedDate = () => {
  const offset = new Date().getTimezoneOffset();
  let today = new Date();

  today.setMinutes(today.getMinutes() - offset);
  today = today.toISOString().slice(0, -1).replace(/T/, ' ');

  return today;
};

// export default getFormatedDate;


// this function take array of objects where one of the property px need to be transform from
// eurocents to euros (with comma)
// export const getEuroFromEurocents = (arr) => {
//   // console.log('arr=', arr);
//   if (!arr || arr.length === 0) {
//     return [];
//   }
//
//
//   const transformedPx = arr.map((item) => {
//     const obj = Object.assign({}, item);
//
//     if (item.px === 0) {
//       return obj;
//     }
//
//     // if (item.px.toString().slice(-1) === '0') {
//     //   // console.log('===========');
//     //   //   obj.px = `${item.px / 100}0`;
//     //     obj.px = item.px / 100;
//     //   return obj;
//     // }
//
//     obj.px = item.px / 100;
//
//     return obj;
//   });
//
//   return transformedPx;
// };
