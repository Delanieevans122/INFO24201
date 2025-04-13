// Ensure the print button images are preloaded
PrintButton1 = new Image;
PrintButton2 = new Image;
logo1 = new Image;
logo2 = new Image;

// If document.images exists, preload the images for the print button and logo
if (document.images) {
    PrintButton1.src = "Images/Print1.jpg";  // Print button image 1
    PrintButton2.src = "Images/Print2.jpg";  // Print button image 2
    logo1.src = "Images/logo1.jpg";          // Default logo image
    logo2.src = "Images/logo2.png";          // Alternative logo image
}

// Array for the full-size images and their titles
var imgArray = [
    'Image1Lg.jpg',  // Full-size Image 1
    'Image2Lg.jpg',  // Full-size Image 2
    'Image3Lg.jpg',  // Full-size Image 3
    'Image4Lg.jpg'   // Full-size Image 4
];

// Array for the titles corresponding to the full-size images
var titleArray = [
    'Dog Performing a Trick',
    'Two Dogs',
    'Dog and Two Boys Portrait',
    'Woman and Dog'
];

// Path to the images
var imgPath = "Images/Fullsize/";

// Function to swap the full-size image and caption when a thumbnail is clicked
function swapImage(imgID) {
    var theImage = document.getElementById('theImage');  // Get the full-size image element
    var textDiv = document.getElementById('bottomText');  // Get the caption element

    // Update the full-size image and caption based on the clicked thumbnail
    var newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;  // Set the new image source
    textDiv.innerHTML = titleArray[imgID];  // Update the caption text
}

// Function to preload the full-size images (for faster loading)
function preloadImages() {
    for (var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image();
        tmpImg.src = imgPath + imgArray[i];  // Preload each full-size image
    }
}

// Print function to trigger the browser's print dialog
function printPage() {
    window.print();  // This opens the print dialog
}
