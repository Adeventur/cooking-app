function convert(gallons){
    return gallons * 3.785
  }
  
  const gallons = parseInt(prompt("enter number"));
  const result = convert(gallons);
  alert(result);