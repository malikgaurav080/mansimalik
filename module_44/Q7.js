class user {
  userName;
  password;
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
  getpassword() {
    return this.password.replace(/./g, "*");
  }
  setPassword(newPassword) {
    let containsNumber = false;
    let containsUppercase = false;
    for (let i = 0; i < newPassword.length; i++) {
      const char = newPassword.charAt(i);
      if (!isNaN(char)) {
        containsNumber = true;
      } else if (char === char.toUpperCase()) {
        containsUppercase = true;
      }
    }
    if (newPassword.length >= 8 && containsNumber && containsUppercase) {
      this.password = newPassword;
    } else {
      console.log(
        "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
      );
    }
  }
}
const User = new user("johndoe", "Password123");
console.log(User.getpassword()); // ***********

User.setPassword("myPassword");
// User.setPassword("MyPassword");
// User.setPassword("Mypassword123");
// console.log(User.getpassword());
