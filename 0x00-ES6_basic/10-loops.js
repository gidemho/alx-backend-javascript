export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  for (const idx in newArray) {
    if (Object.prototype.hasOwnProperty.call(newArray, idx)) { // Ensure it's a valid array index
      newArray[idx] = appendString + newArray[idx];
    }
  }

  return newArray;
}
