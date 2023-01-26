const manipulateForm = (originalObject) => {
  let newObject = Object.entries(originalObject).reduce((obj, [key, value]) => {
    if (key === "firstName" || key === "lastName") obj[key] = value.trim().replace(/\s+/g, ' ');
    else obj[key] = value;
    return obj;
  }, {});
  return newObject;
};

export { manipulateForm };
