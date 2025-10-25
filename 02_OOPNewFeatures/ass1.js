class UserProfile {
  #username;
  #email;
  #birthdate;

  #usernameMethod(name) {
    if (typeof name !== "string" || name.length < 1 || name !== name.trim()) {
      throw new Error("Username must be a non-empty string without leading or trailing spaces.");
    }
    this.#username = name;
  }

  #emailMethod(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== "string" || !emailRegex.test(email)) {
      throw new Error("Invalid email format.");
    }
    this.#email = email;
  }

  #birthdateMethod(birthdate) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if(!regex.test(birthdate.split('T')[0])) {
        throw new Error("Date must be in YYYY-MM-DD format.");
    }

    const [year, month, date] = birthdate.split('-').map(Number);

    const dateObject = new Date(Date.UTC(year, month - 1, date));

    if(isNaN(dateObject.getTime())) {
      throw new Error("Invalid date.");
    }

    var resolvedYear = dateObject.getUTCFullYear();
    var resolvedMonth = dateObject.getUTCMonth() + 1;
    var resolvedDate = dateObject.getUTCDate();

    if(resolvedYear !== year || resolvedMonth !== month || resolvedDate !== date) {
      throw new Error("Date must be in YYYY-MM-DD format");
    }

    this.#birthdate = date;
  }

  constructor(username, email, birthdate) {
    this.#usernameMethod(username);
    this.#emailMethod(email);
    this.#birthdateMethod(birthdate);
  }

  get username() {
    return this.#username;
  }

  get email() {
    return this.#email;
  }

  get birthdate() {
    return this.#birthdate;
  } 

  set username(newUsername) {
    this.#usernameMethod(newUsername);
  }

  set email(newEmail) {
    this.#emailMethod(newEmail);
  }

  set birthdate(newBirthdate) {
    this.#birthdateMethod(newBirthdate);
  }
}


var user1 = new UserProfile("Raghupathi", "raghupathi@gamil.com", '1996-01-01');
console.log(user1.username); // Raghupathi
console.log(user1.email);
console.log(user1.birthdate); // 1