var convert = (jsonString) => {
  try {
    let json = JSON.parse(jsonString);
    let objArray = flatten(json);
    let csvArray = [Object.keys(objArray[0]).join(',')]

    objArray.forEach(obj => {
      let values = [];

      for (let key in obj){
        values.push(obj[key]);
      }
      csvArray.push(values.join(','));
    });

    let csv = csvArray.join('\n');
    return csv;

  } catch (error) {
    console.error(error);
    return -1;
  }
}

var flatten = (obj) => {
  let children = obj.children;
  let array = [];
  delete obj.children;

  array.push(obj);

  children.forEach( child => {
    array = array.concat(flatten(child));
  })

  return array;
}

exports.convert = convert;