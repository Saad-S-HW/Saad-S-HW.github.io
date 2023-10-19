# Saad-S-HW.github.io

Images Slideshow Report (Image carousel slider):

HTML:
   " <!-- Banner Section -->
    <section class="banner-container">
      <img name="slide" alt="Alt goes here" title="Title goes here"
      width="140%"/>
    </section>" : In summary, this HTML code creates a banner section that contains an image. The image has attributes for alternative text ("alt") and a title ("title"). The "name" attribute, although used here, is not a standard attribute for images. The "width" attribute controls the image's display size. The image can be dynamically changed using JavaScript. 

JS:
 At the beginning of the script, 'currentIndex' is set to 0, indicating the current image index being displayed.
An empty array 'images' is created to store the paths to the images that will be displayed in the slideshow.
'interval' is set to 2000, which defines the interval between image transitions in milliseconds (2 seconds).
'changeImage Function' responsible for changing the displayed image. It first finds an HTML 'img' element with the 'name' attribute set to "slide" using 'document.querySelector'. Then, it sets the 'src' attribute of this image element to the path of the image at the current index. After that, it updates the 'currentIndex' to point to the next image in the 'images' array, effectively creating a loop that cycles through the images.
The 'setInterval' function is used to repeatedly call the 'changeImage' function at the specified interval. This triggers the automatic image change in the slideshow.
The 'window.addEventListener' method is used to add an event listener for the 'load' event of the window. When the web page finishes loading, it calls the 'changeImage' function once to initially set the image on page load.


User Registration Form:

HTML:
'<title>User Registration Form</title>': This is the title of the webpage
'<link rel="stylesheet" type="text/css" href="form.css">': This line links an external CSS file named "form.css" to style the form's elements. The 'href' attribute specifies the path to the CSS file.
'<body>': The main content of the webpage is placed within the '<body>' tag.
'<form id="form">': This opening <form> tag defines the user registration form.
Input Fields: The form includes several input fields within '<div>' elements with the class "input-control." Each input field is labeled with a '<label>' element and includes an <input> element for user input. These input fields include "Username," "Email," "Password," and "Confirm Password." They are given unique IDs for identification in JavaScript.
Additionally, there are '<div>' elements with the class "error" and unique IDs (e.g., "usernameError," "emailError") to display error messages related to the input fields.
The form includes a submit button with the 'type' attribute set to "submit," which triggers the form's submission. It has an 'id' attribute of "submitButton" for JavaScript access.

JS:
At the end of the HTML code, a '<script>' section is used to include JavaScript code. This code is responsible for real-time form validation and handling form submission.
JavaScript variables are declared to access various HTML elements by their IDs (e.g., const username = document.getElementById('username')).
Functions are defined to validate email format, password length, and check if passwords match.
Event listeners are added to the form and individual input elements to perform real-time validation when users interact with the form.
The form's submission is handled, and if there are no validation errors, an alert is displayed to indicate a successful form submission.


