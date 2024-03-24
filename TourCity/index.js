// Define a sample tour data (in real-world scenario, you would fetch this from an API)
const toursData = [
    { name: "Agra Tour", description: "The most famous monument of Agra, the Taj Mahal.", duration: "5 hours", price: "$200", },
    { name: "Delhi Tour", description: "Ancient city of Indraprastha mentioned in the Mahabharata.", duration: "12 hours", price: "$225" },
    { name: "Mumbai Tour", description: "Portuguese rule in the 16th century followed by the British East India Company's control.", duration: "10 hours", price: "$310" },
    { name: "Kolkata Tour", description: "Established as a trading post by the British East India Company in 1690..", duration: "7 hours", price: "$248" },
    { name: "Chennai Tour", description: "Founded by the British East India Company in 1639 as a trading post.", duration: "9 hours", price: "$250" },
    { name: "Jaipur Tour", description: "Planned city based on principles of Vastu Shastra and Shilpa Shastra.", duration: "8 hours", price: "$190" },
    { name: "Hyderabad Tour", description: "Founded by the Qutb Shahi dynasty in the late 16th century.", duration: "9 hours", price: "$200" },
    { name: "Varanasi Tour", description: "One of the oldest continuously inhabited cities in the world.", duration: "11 hours", price: "$179" },
    { name: "Pune Tour", description: "Flourishing educational and cultural hub in contemporary India.", duration: "7 hours", price: "$339" },
    { name: "Bangalore Tour", description: "Rapid urbanization and growth as India's Silicon Valley.", duration: "6 hours", price: "$399" },

];

// Function to render tour list
function renderTours() {
    const tourListDiv = document.getElementById('tour-list');
    tourListDiv.innerHTML = ''; // Clear previous content

    // Loop through tour data and create HTML elements for each tour
    toursData.forEach(tour => {
        const tourDiv = document.createElement('div');
        tourDiv.classList.add('tour-item');

        tourDiv.innerHTML = `
            <h2>${tour.name}</h2>
            <p>${tour.description}</p>
            <p><strong>Duration:</strong> ${tour.duration}</p>
            <p><strong>Price:</strong> ${tour.price}</p>
            <button class="book-now-button" onclick="redirectToBookingPage('${tour.name}')">Explore Now</button>
        `;

        tourListDiv.appendChild(tourDiv);
    });
}

// Function to redirect to the corresponding booking page based on tour name
function redirectToBookingPage(tourName) {
    let bookingPageUrl;
    switch(tourName) {
        case 'Agra Tour':
            bookingPageUrl = '/src/assets/agra.html';
            break;
        case 'Delhi Tour':
            bookingPageUrl = '/src/assets/delhi.html';
            break;
        case 'Mumbai Tour':
            bookingPageUrl = '/src/assets/mumbai.html';
            break;
        case 'Kolkata Tour':
            bookingPageUrl = '/src/assets/kolkata.html';
            break;
        case 'Chennai Tour':
            bookingPageUrl = '/src/assets/chennai.html';
            break;
        case 'Jaipur Tour':
            bookingPageUrl = '/src/assets/jaipur.html';
            break;
        case 'Hyderabad Tour':
            bookingPageUrl = '/src/assets/hyderabad.html';
            break;
        case 'Varanasi Tour':
            bookingPageUrl = '/src/assets/varanasi.html';
            break;
        case 'Pune Tour':
            bookingPageUrl = '/src/assets/pune.html';
            break;
        case 'Bangalore Tour':
            bookingPageUrl = '/src/assets/bangalore.html';
            break;
        // Add cases for other tour names and their respective HTML files
        default:
            // Default to a generic booking page if the tour name doesn't match
            bookingPageUrl = 'index.html';
    }
    
    // Redirect the user to the corresponding booking page
    window.location.href = bookingPageUrl;
}

// Call the renderTours function when the page loads
window.onload = renderTours;
