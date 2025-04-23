export function validateName(name) {
  try {
    return typeof name === "string" && name.length >= 5 && name.length <= 20;
  } catch {
    return false;
  }
}

export function validateEmail(email) {
  try {
    return typeof email === "string" && email.includes("@");
  } catch {
    return false;
  }
}

export function validateState(state) {
  try {
    return (
      typeof state === "string" &&
      state.length === 2 &&
      state === state.toUpperCase()
    );
  } catch {
    return false;
  }
}

export function validateCity(city) {
  try {
    return typeof city === "string" && city.trim().length > 0;
  } catch {
    return false;
  }
}