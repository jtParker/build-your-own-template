function template(str, delims) {
  // Fill this in
  let open = '*(';
  let close = ')*';

  if (delims) {
    open = delims.open;
    close = delims.close;
  }


  return function (name, emotion, thing, num) {

    // remember console.log
    return str; // template renderer usually returns a string
  };

}
