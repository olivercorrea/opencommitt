function boolToWord( bool ){
    //...
    let respuesta;
    if (bool) {
      return "Yes"
      //console.log("Yes")
    } else if (bool === false) {
      return "No"
    }
  
  }

// Example usage:
console.log(boolToWord(true));  // Output: "Yes"
console.log(boolToWord(false)); // Output: "No"