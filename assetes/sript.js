// A small script to change the header appearance when scrolling down
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            // Add a class to make the header background fully opaque and potentially add a shadow
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
        } else {
            // Revert to semi-transparent when at the top
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            header.style.boxShadow = 'none';
        }
    });

    // Simple click handler for the CTA button (for example)
    document.getElementById('cta-button').addEventListener('click', function() {
        console.log("Explore button clicked!");
        // Example: Scroll to the next section or open a form
        // window.scrollTo({ top: document.getElementById('next-section').offsetTop, behavior: 'smooth' });
    });
});


// Sections-02

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.py-5');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // Add initial class for styling
        observer.observe(section);
    });
});

/* Corresponding CSS for the fade-in effect (add to style.css) */
/*
.fade-in-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in-section.visible {
    opacity: 1;
    transform: translateY(0);
}
*/


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>

// Sections-05

document.addEventListener("DOMContentLoaded", function() {
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    // IMPORTANT: Replace with your actual YouTube or Vimeo video URL
    const videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; 

    // Event listener for when the modal is about to be shown (when the button is clicked)
    videoModal.addEventListener('show.bs.modal', function () {
        // Start playing the video when the modal opens
        videoFrame.setAttribute('src', videoURL);
    });

    // Event listener for when the modal is closed
    videoModal.addEventListener('hide.bs.modal', function () {
        // Stop the video by clearing the src attribute
        videoFrame.setAttribute('src', '');
    });
});

// Sections-06

document.addEventListener("DOMContentLoaded", function() {
    // --- Video 1 Modal Handling ---
    const modal1 = document.getElementById('videoModal1');
    // Assuming you insert the iframe into the modal body with a unique ID, e.g., videoFrame1
    const videoFrame1 = document.getElementById('videoFrame1'); 
    const videoURL1 = "YOUR_VIDEO_URL_1?autoplay=1"; 

    if (modal1) {
        modal1.addEventListener('show.bs.modal', () => {
            videoFrame1.setAttribute('src', videoURL1);
        });
        modal1.addEventListener('hide.bs.modal', () => {
            videoFrame1.setAttribute('src', ''); // Stop video
        });
    }

    // --- Video 2 Modal Handling ---
    const modal2 = document.getElementById('videoModal2');
    const videoFrame2 = document.getElementById('videoFrame2'); 
    const videoURL2 = "YOUR_VIDEO_URL_2?autoplay=1"; 

    if (modal2) {
        modal2.addEventListener('show.bs.modal', () => {
            videoFrame2.setAttribute('src', videoURL2);
        });
        modal2.addEventListener('hide.bs.modal', () => {
            videoFrame2.setAttribute('src', ''); // Stop video
        });
    }
});

// Sections-07

document.addEventListener("DOMContentLoaded", function() {
    var copperTab = document.getElementById('copper-tab');
    var woodTab = document.getElementById('wood-tab');
    
    // Example: Add an event listener to the Wood tab when it's clicked
    woodTab.addEventListener('shown.bs.tab', function (event) {
        console.log("Wood tab content is now shown!");
        // Add code here to dynamically load images or trigger animations
    });
});

// Sections-08

document.addEventListener("DOMContentLoaded", function() {
    // Assuming a single Bootstrap Modal is used for all images, e.g., #imageModal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const imageModal = document.getElementById('imageModal');
    
    // You would need to define the simple modal structure in your HTML once
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const fullSrc = this.getAttribute('href');
            
            // Assuming the modal has an image element with id="modalImage"
            // document.getElementById('modalImage').setAttribute('src', fullSrc);
            
            // Show the modal here
            // const bsModal = new bootstrap.Modal(imageModal);
            // bsModal.show(); 
            
            console.log(`Loading full image: ${fullSrc}`);
        });
    });
});

// Sections-12

// This file is empty but included for future use if interactive features
// (like animations, sticky headers, or modals) are needed for the section.

document.addEventListener('DOMContentLoaded', function() {
    // Add any necessary JavaScript functionality here
});

// This file is included for potential future use with interactive features.
document.addEventListener('DOMContentLoaded', function() {
    // No specific JavaScript is required for the layout conversion.
});


// This file is empty but included for potential future use if interactive features
// (like a gallery light box or image hover effects) are added.

document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code for the Oasis section goes here
});

// Locations

// This file is empty but included for potential future use, 
// perhaps for interactive map loading or animations.

document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code for the Location section goes here
});


document.addEventListener('DOMContentLoaded', () => {
    const kafoLabel = document.querySelector('.kafo-label');
    const redLine = document.querySelector('.line-red');

    // Function to add hover effect
    const handleHover = (target, line) => {
        target.addEventListener('mouseenter', () => {
            line.style.strokeWidth = '8'; // Make the line thicker
            line.style.opacity = '1';
        });

        target.addEventListener('mouseleave', () => {
            line.style.strokeWidth = '5'; // Reset thickness
        });
    };

    // Apply the hover effect (assuming KAFU is near the Red Line)
    if (kafoLabel && redLine) {
        handleHover(kafoLabel, redLine);
    }
    
    // Repeat for other landmarks and lines (SIC, GONDA, etc.)
});
