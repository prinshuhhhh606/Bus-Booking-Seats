export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

export function isRequired(value) {
  return (
    value !== null && value !== undefined && value.toString().trim() !== ""
  );
}

export function isValidPassword(password) {
  return password && password.length >= 6;
}
export function validateName(name) {
  return /^[A-Za-z\s]{2,50}$/.test(name.trim());
}
export function isValidAge(age) {
  const ageNum = Number(age);
  return ageNum >= 1 && ageNum <= 120;
}