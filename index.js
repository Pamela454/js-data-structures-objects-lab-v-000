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
  const driver = { key: "value" };
  const newDriver = Object.assign({}, obj);
  
  newObj; 
  
  delete newDriver.key;
  const newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

