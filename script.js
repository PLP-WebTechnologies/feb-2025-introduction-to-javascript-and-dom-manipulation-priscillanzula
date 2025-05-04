document.addEventListener('DOMContentLoaded', () => {
    const checkLocationBtn = document.getElementById('checkLocationBtn');
    const locationInput = document.getElementById('location');
    const waterSourceList = document.getElementById('waterSourceList');
    const noResultsMessage = document.getElementById('noResults');

    // Sample water source data (in a real application, this would come from an API)
    const waterSourcesData = [
        { name: 'Community Well A', location: 'Nairobi', safety: 'safe' },
        { name: 'River Zuri Section 1', location: 'Nairobi', safety: 'moderate' },
        { name: 'Borehole X', location: 'Kajiado', safety: 'unsafe' },
        { name: 'Dam Y', location: 'Nairobi', safety: 'safe' },
    ];

    // Function to dynamically update the displayed water sources
    function displayWaterSources(location) {
        waterSourceList.innerHTML = ''; // Clear previous results
        const filteredSources = waterSourcesData.filter(source =>
            source.location.toLowerCase().includes(location.toLowerCase())
        );

        if (filteredSources.length > 0) {
            noResultsMessage.style.display = 'none';
            filteredSources.forEach(source => {
                const listItem = document.createElement('li');
                listItem.textContent = `${source.name} (${source.location}) - Safety: ${source.safety.toUpperCase()}`;
                listItem.classList.add(source.safety); // Add CSS class based on safety
                waterSourceList.appendChild(listItem);
            });
        } else {
            noResultsMessage.style.display = 'block';
        }
    }

    // Respond to user interaction (button click)
    checkLocationBtn.addEventListener('click', () => {
        const enteredLocation = locationInput.value.trim();
        if (enteredLocation) {
            displayWaterSources(enteredLocation);
        } else {
            alert('Please enter a city or region.');
        }
    });

    // Initial display (optional - could show all sources or a default message)
    // displayWaterSources('');
});