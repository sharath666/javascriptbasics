let options = {
    title: "Menu",
    width: 100,
    height: 200
  };

  //let {width, b, c} = options;

  // in objects keyname has be to same has in the main object if u give some other key name which is not present in the main object it will show undefined

  //u can change the order of the object using destructing

  // u can use width instead of options.width

  let {title, width, height} = options;


console.log(options.width)


let {height1, width1, title1} = { title1: "Menu", height1: 200, width1: 100 }


console.log(height1)



let options4 = {
    title4: "Menu"
  };
  
  let {width4 = 100, height4 = 200, title4} = options4;
  
console.log(width4)

