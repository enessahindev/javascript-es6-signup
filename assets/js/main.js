const userName = ["enes", "enes1", "enes2"];
const userPass = ["enes", "enes1", "enes2"];

const spinner = document.getElementById("spinner"),
    alert = document.getElementById("alert");

const update = (value) => {
    spinner.classList.remove("visible");

    const usernameExists = userName.some(u => u === value);

    if (usernameExists) {
        alert.classList.add("visible");
    } else {
        alert.classList.remove("visible");
    }
};

const debounce = (callback, time) => {
    let interval;
    return (...args) => {
        clearTimeout(interval);
        interval = setTimeout(() => {
            callback.apply(null, args);
        }, time);
    };
};

const handleStartTyping = () => {
    spinner.classList.add("visible");
};

const handleChange = debounce((input) => {
    const { value } = input.target;
    update(value);
}, 500);

function login() {
    // Get the input values
    var username = document.getElementById("uName").value;
    var password = document.getElementById("uPass").value;

    // Perform a login check (this is just an example, you should do a server-side check in production)
    if (username === "enes" && password === "enes") {
      // Login successful, print a message and redirect
      console.log("Login successful");
      window.location.href = "http://enessahin.dev"; // replace with your actual redirect URL
    } else {
      // Login failed, display an error message
      console.log("Invalid username or password");
    }
  }