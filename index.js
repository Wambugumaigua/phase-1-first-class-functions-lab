// Code your solution in this file!

// Define the returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Define the returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Define the createFareMultiplier function
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // Define the fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // Define the fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // Define the selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Define the selectDifferentDrivers function
  function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
  }
  
  // Test the fareDoubler function
  console.log(fareDoubler(10)); // Output: 20