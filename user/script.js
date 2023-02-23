// Define an array to store the user data
let users = [];

// Define variables to hold the form elements
const userForm = document.getElementById('userForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const dobInput = document.getElementById('dob');
const maleInput = document.getElementById('male');
const femaleInput = document.getElementById('female');
const hobbyInput = document.getElementById('hobby');
const countryInput = document.getElementById('country');
const stateInput = document.getElementById('state');
const cityInput = document.getElementById('city');
const addUserBtn = document.getElementById('addUser');
const updateUserBtn = document.getElementById('updateUser');
const cancelUpdateBtn = document.getElementById('cancelUpdate');
const userList = document.getElementById('userList');

// Define a function to generate a unique user ID
function generateUserId() {
	return '_' + Math.random().toString(36).substr(2, 9);
}

// Define a function to render the user list
function renderUserList() {
	// Clear the user list
	userList.innerHTML = '';

	// Render each user in the array
	users.forEach((user) => {
		// Create a list item element
		const li = document.createElement('li');

		// Create a span element to hold the user's full name
		const fullNameSpan = document.createElement('span');
		fullNameSpan.textContent = user.fullName;

		// Create a span element to hold the user's email
		const emailSpan = document.createElement('span');
		emailSpan.textContent = user.email;

		// Create a span element to hold the user's date of birth
		const dobSpan = document.createElement('span');
		dobSpan.textContent = user.dob;

		// Create a span element to hold the user's gender
		const genderSpan = document.createElement('span');
		genderSpan.textContent = user.gender;

		// Create a span element to hold the user's hobby
		const hobbySpan = document.createElement('span');
		hobbySpan.textContent = user.hobby;

		// Create a span element to hold the user's location
		const locationSpan = document.createElement('span');
		locationSpan.textContent = `${user.city}, ${user.state}, ${user.country}`;

		// Create a button element to edit the user
		const editBtn = document.createElement('button');
		editBtn.textContent = 'Edit';
		editBtn.addEventListener('click', () => {
			editUser(user.id);
		});

		// Create a button element to delete the user
		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'Delete';
		deleteBtn.addEventListener('click', () => {
			deleteUser(user.id);
		});

		// Append all elements to the list item
		li.appendChild(fullNameSpan);
		li.appendChild(emailSpan);
        li.appendChild(dobSpan);
        li.appendChild(genderSpan);
        li.appendChild(hobbySpan);
        li.appendChild(locationSpan);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        	// Append the list item to the user list
	userList.appendChild(li);
});
}

// Define a function to add a user
function addUser() {
// Get the form values
const fullName = fullNameInput.value.trim();
const email = emailInput.value.trim();
const dob = dobInput.value.trim();
const gender = maleInput.checked ? 'Male' : 'Female';
const hobby = hobbyInput.value.trim();
const country = countryInput.value;
const state = stateInput.value;
const city = cityInput.value;
// Validate the form values
if (!fullName || !email || !dob || !hobby || !country) {
	alert('Please fill in all fields.');
	return;
}

// Add the user to the array
const user = {
	id: generateUserId(),
	fullName,
	email,
	dob,
	gender,
	hobby,
	country,
	state,
	city,
};
users.push(user);

// Reset the form
userForm.reset();

// Render the updated user list
renderUserList();
}

// Define a function to edit a user
function editUser(id) {
// Find the user in the array
const user = users.find((user) => user.id === id);
// Populate the form with the user data
fullNameInput.value = user.fullName;
emailInput.value = user.email;
dobInput.value = user.dob;
if (user.gender === 'Male') {
	maleInput.checked = true;
} else {
	femaleInput.checked = true;
}
hobbyInput.value = user.hobby;
countryInput.value = user.country;
stateInput.value = user.state;
cityInput.value = user.city;

// Show the update and cancel buttons, and hide the add button
addUserBtn.style.display = 'none';
updateUserBtn.style.display = 'inline-block';
cancelUpdateBtn.style.display = 'inline-block';

// Set the update button's click event to update the user
updateUserBtn.onclick = function() {
	// Get the updated form values
	const updatedFullName = fullNameInput.value.trim();
	const updatedEmail = emailInput.value.trim();
	const updatedDob = dobInput.value.trim();
	const updatedGender = maleInput.checked ? 'Male' : 'Female';
	const updatedHobby = hobbyInput.value.trim();
	const updatedCountry = countryInput.value;
	const updatedState = stateInput.value;
	const updatedCity = cityInput.value;

	// Validate the updated form values
	if (!updatedFullName || !updatedEmail || !updatedDob || !updatedHobby || !updatedCountry || !updatedState || !updatedCity) {
		alert('Please fill in all fields.');
		return;
	}

	// Update the user in the array
	user.fullName = updatedFullName;
	user.email = updatedEmail;
	user.dob = updatedDob;
	user.gender = updatedGender;
	user.hobby = updatedHobby;
	user.country = updatedCountry;
	user.state = updatedState;
	user.city = updatedCity;

	// Reset the form and hide the update and cancel buttons
	userForm.reset();
	addUserBtn.style.display = 'inline-block';
	updateUserBtn.style.display = 'none';
	cancelUpdateBtn.style.display = 'none';

	// Render the updated user list
	renderUserList();
};

// Set the cancel update button's click event to reset the form and hide the update and cancel buttons
cancelUpdateBtn.onclick = function() {
    userForm.reset();
    addUserBtn.style.display = 'inline-block';
    updateUserBtn.style.display = 'none';
    cancelUpdateBtn.style.display = 'none';
    };
    }
    
    // Define a function to delete a user
    function deleteUser(id) {
    // Remove the user from the array
    users = users.filter((user) => user.id !== id);
    // Render the updated user list
renderUserList();
}

// Define a function to generate a unique user ID
function generateUserId() {
// Generate a random 6-digit number
return Math.floor(Math.random() * 900000) + 100000;
}

// Set the form's submit event to add a user
userForm.onsubmit = function(event) {
event.preventDefault();
addUser();
};

// Render the initial user list
renderUserList();


