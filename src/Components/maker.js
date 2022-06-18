const dataStream = (props) => {
  let buffer = [];
  if (props !== undefined || props !== null) {
    props.forEach((item, index) => {
      let temp;
      if (index === 0) {
        buffer.push(item);
      } else {
        temp = item.item - props[index - 1].item;
        buffer.push({ item: temp, day: item.day });
      }
    });
  } else {
    console.log("nothing");
  }
  return buffer;
};
export default dataStream;
