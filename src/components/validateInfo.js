export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First name required";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last name required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }
  if (!values.university.trim()) {
    errors.university = "University required";
  }
  if (!values.speciality.trim()) {
    errors.speciality = "Speciality required";
  }
  if (!values.city.trim()) {
    errors.city = "City required";
  }
  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number required";
  }
  if (!values.topicTitle.trim()) {
    errors.topicTitle = "Topic title required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
}
