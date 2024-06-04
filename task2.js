const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Penolope",
  ];
  function searchName(parameter,limit,callback){
    let result = [];
    for (i = 0; i < name.length; i++){
      if (name[i].toLowerCase().indexOf(parameter.toLowerCase()) > -1){
        result.push(name[i]);
      if (result.length == limit){
        break;
      }
    }
  }
    callback(result)
  }

  function printNama(result){
    console.log(result);
  }
  searchName("an", 3, printNama)

