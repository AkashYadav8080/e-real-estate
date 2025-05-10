let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 5000);




  // price range display
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  priceRange.addEventListener('input', () => {
    priceValue.innerText = `$${priceRange.value.toLocaleString()}`;
  });

  // View Details Function
  function viewDetails(title, details, price, imageSrc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDetails').innerText = details;
    document.getElementById('modalImage').src = imageSrc;
    new bootstrap.Modal(document.getElementById('propertyModal')).show();
  }

//   const map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: lat, lng: lng },
//     zoom: 14,
//   });

//   // Add a marker
//   new google.maps.Marker({
//     position: { lat: lat, lng: lng },
//     map: map,
//   });

  // Apply Filters Function
  function applyFilters() {
    const type = document.getElementById('propertyType').value;
    const maxPrice = parseInt(document.getElementById('priceRange').value);
    const location = document.getElementById('location').value.toLowerCase();
    const properties = document.querySelectorAll('#property-list .col-lg-4');

    properties.forEach(property => {
      const propertyType = property.getAttribute('data-type');
      const propertyPrice = parseInt(property.getAttribute('data-price'));

      if ((type === 'all' || type === propertyType) && propertyPrice <= maxPrice && property.innerText.toLowerCase().includes(location)) {
        property.style.display = '';
      } else {
        property.style.display = 'none';
      }
    });
  }


// code for searching for properties
  function searchProperties() {
    
    const city = document.getElementById('city').value;
    const localities = document.getElementById('localities').value;
    const bhkType = document.getElementById('bhk-type').value;
    const propertyStatus = document.getElementById('property-status').value;
    const newBuilderProjects = document.getElementById('new-builder-projects').checked;
  
    console.log('Searching properties with the following criteria:');
    console.log('City:', city);
    console.log('Localities:', localities);
    console.log('BHK Type:', bhkType);
    console.log('Property Status:', propertyStatus);
    console.log('New Builder Projects:', newBuilderProjects);
  
    // Add your search logic here
  }
  
 
  // Add tab changes here
  function changeTab(activeId) {
    const tabs = ['buy', 'rent', 'residential'];
    
    tabs.forEach(tab => {
      const element = document.getElementById(tab);
      if (tab === activeId) {
        element.style.backgroundColor = "orange";
        element.style.color = "white";
      } else {
        element.style.backgroundColor = "white";
        element.style.color = "black";
      }
    });
  }
  