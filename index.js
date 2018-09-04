// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
 const newObj = {...driver };
 
  newObj[key] = value;
 
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  
    driver[key] = value;
    return driver;
} 

function deleteFromDriverByKey(driver, key){
   
   let newdriver = delete driver.key;
   return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
   
 return  delete driver.key;
  
  
}