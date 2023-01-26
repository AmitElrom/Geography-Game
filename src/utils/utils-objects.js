const manipulateForm = (originalObject) => {
  let newObject = Object.entries(originalObject).reduce((obj, [key, value]) => {
    switch (key) {
      case "password":
      case "password1":
      case "password2":
      case "newPassword":
      case "confirmedPassword":
      case "code":
      case "email":
        obj[key] = value.trim();
        break;
      default:
        break;
    }
    return obj;
  }, {});
  return newObject;
};

export { manipulateForm };
