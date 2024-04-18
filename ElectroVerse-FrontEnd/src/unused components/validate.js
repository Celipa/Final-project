// Denhär komponenten används ej.
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validate = (formData, setErrors, evt) => {
  const err = {}

  // Name
  if(formData && formData.name && formData.name.trim() === '') {
    err.name = 'You need to enter a name';
  } else if(formData.name && formData.name.length < 3) {
    err.name = 'Your name must be at least 3 chars long';
  }

  // Email
  if(formData.email.trim() === '') {
    err.email = 'You need to enter an email address'
  } else if(!emailRegex.test(formData.email)) {
    err.email = 'You need to enter a valid email address'
  }

  // Phone Number
  if(formData && formData.phoneNumber && formData.phoneNumber.trim() === '') {
    err.phoneNumber = 'You need to enter a phone number';
  } else if(formData.phoneNumber && formData.phoneNumber.length < 10) {
    err.phoneNumber = 'Your phone number needs to be at least 10 digits long';
  }

  // Message
  if(formData && formData.message && formData.message.trim() === '') {
    err.message = 'You need to enter a message';
  }
  if(evt && evt.type === 'blur') {
    setErrors(errors => ({
      ...errors,
      [evt.target.name]: err[evt.target.name]
    }))
    return
  }
  setErrors(err)

  return Object.keys(err).length < 1
}