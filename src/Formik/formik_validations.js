export function validate(values) {
  const errors = {};
  //validation name
  if (values.name === "") {
    errors.name = "Email is required";
  }
  //balidation price
  if (values.price === "") {
    errors.price = "Price is required";
  } else if (/(?=\d{6,})(?=\d*\.?\d{2,})\d*(?:\.\d+)?$/.test(values.price)) {
    errors.price = "price length less than or equal to 6 digits";
  }
  if (values.category === "") {
    errors.category = "Category is required";
  }
  if (values.description === "") {
    errors.description = "description is required";
  }
  if (values.picture_url === "") {
    errors.picture_url = "URL is required input URL VALIDA ";
  }
  return errors;
}
