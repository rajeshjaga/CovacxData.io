const dataStream = (props) => {
  let buffer = [];
  if (props !== undefined && props !== null) {
    let { data } = props;
    data.forEach((item, index) => {
      let temp;
      if (index === 0) {
      } else {
        temp = item.item - data[index - 1].item;
        buffer.push({ item: temp, day: item.day });
      }
    });
  } else {
    console.log("nothing");
  }
  return buffer;
};
export default dataStream;
