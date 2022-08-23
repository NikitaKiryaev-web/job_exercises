const obj = { apple: { banana: { mango: "mango" } } };

const get = (keySequence, nestedObject) => {
  let keyArr = keySequence.split(".");
  return keyArr.reduce((prevValue, value) => {
    return prevValue[value];
  }, nestedObject);
};

function get2(keySequence, nestedObject) {
  return keySequence.split(".").reduce((acc, curr) => acc[curr], nestedObject);
}

console.log(get("apple.banana", obj));
console.log(get2("apple.banana", obj));
