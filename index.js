// Write your solution in this file!
const driver = {
};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
 
  return driver;
}

function deleteFromDriverByKey(driver, key, value) {
  const obj = { key: "driver" };
  const newObj = Object.assign({}, obj);
  
  newObj; 
  
  delete newObj.key;
  
  newObj;
  
  obj;
}

