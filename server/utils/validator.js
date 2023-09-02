const validate = (schema) => {
  for (const key in schema) {
    const value = schema[key].value;
    const options = schema[key].options;

    const type = options.type || typeof value;

    if (options.type && type !== typeof value) {
      return "Invalid data type";
    }

    switch (type) {
      case "string":
        if (options.min && value.length < options.min)
          return key + " must be greater than " + options.min;
        if (options.max && value.length > options.max)
          return key + " must be less than " + options.max;
        if (options.pattern && !options.pattern.test(value))
          return "invalid value provided for " + key;

      case "number":
        if (options.min && value < options.min)
          return key + " must be greater than " + options.min;
        if (options.max && value > options.max)
          return key + " must be less than " + options.max;

      default:
        return null;
    }
  }
};

module.exports = validate;
