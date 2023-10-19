# Saad-S-HW.github.io

Images Slideshow Report (Image carousel slider):

 At the beginning of the script, 'currentIndex' is set to 0, indicating the current image index being displayed.
An empty array 'images' is created to store the paths to the images that will be displayed in the slideshow.
'interval' is set to 2000, which defines the interval between image transitions in milliseconds (2 seconds).
'changeImage Function' responsible for changing the displayed image. It first finds an HTML 'img' element with the 'name' attribute set to "slide" using 'document.querySelector'. Then, it sets the 'src' attribute of this image element to the path of the image at the current index. After that, it updates the 'currentIndex' to point to the next image in the 'images' array, effectively creating a loop that cycles through the images.
The 'setInterval' function is used to repeatedly call the 'changeImage' function at the specified interval. This triggers the automatic image change in the slideshow.
The 'window.addEventListener' method is used to add an event listener for the 'load' event of the window. When the web page finishes loading, it calls the 'changeImage' function once to initially set the image on page load.


User Registration Form:

