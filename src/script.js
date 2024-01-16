document.addEventListener("DOMContentLoaded", function () {
    const imageArray = [
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/15788298/pexels-photo-15788298/free-photo-of-woman-posing-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=600'
        // Add more image URLs as needed
    ];

    let count = 0;

    function updateImage() {
        count = (count + 1) % imageArray.length;
        const image = imageArray[count];
        const slidingDiv = document.getElementById('slidingDiv');
        slidingDiv.style.backgroundImage = `url('${image}')`;
        // Add other logic or styles if needed
    }

    const timerId = setInterval(updateImage, 4000); // Change the interval as needed

    // Add other JavaScript code from the React component as needed
});
