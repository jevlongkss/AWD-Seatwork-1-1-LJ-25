const data = {
    cars: [
        { "id": 1, "name": "Lexus LC 500", "isAvailable": true, "image": "https://th.bing.com/th/id/R.b38f3a57caf92ca333d006523905142f?rik=%2fM3fSd%2bOiMQvDQ&riu=http%3a%2f%2fperformancedrive.com.au%2fwp-content%2fuploads%2f2016%2f01%2fLexus-LC-500.jpg&ehk=oVqqXq5iqk8Vg7cS4EnXse1nnrrDgBk2GsEXymxG%2bvk%3d&risl=&pid=ImgRaw&r=0" },
        { "id": 2, "name": "Lamborghini Huracán", "isAvailable": true, "image": "https://www.hdcarwallpapers.com/walls/2017_lamborghini_huracan_performante_4k_2-HD.jpg" },
        { "id": 3, "name": "Audi R8", "isAvailable": true, "image": "https://mediacloud.carbuyer.co.uk/image/private/s--qORbvB2C--/v1579632349/carbuyer/2018/10/audi_r8_8.jpg" },
        { "id": 4, "name": "Jaguar F-TYPE", "isAvailable": true, "image": "https://th.bing.com/th/id/OIP.qlSCOmDIEXrZ7Zvf1nz6egHaFj?rs=1&pid=ImgDetMain" },
        { "id": 5, "name": "Chevrolet Corvette Z06", "isAvailable": true, "image": "https://th.bing.com/th/id/OIP.-la9fGfSP9Bqa_TFBNxzNAHaE8?rs=1&pid=ImgDetMain" },
        { "id": 6, "name": "McLaren 720S", "isAvailable": true, "image": "https://hips.hearstapps.com/hmg-prod/images/2018-mclaren-720s-1544821930.jpg" },
        { "id": 7, "name": "Mercedes-AMG GT", "isAvailable": true, "image": "https://th.bing.com/th/id/R.1485b50f45ddcf961f509f65a7190cd4?rik=30AKXKW%2fhGtEqQ&riu=http%3a%2f%2fs1.cdn.autoevolution.com%2fimages%2fgallery%2fMERCEDES-BENZ-AMG-GT-R-5807_33.jpg&ehk=NBbeHaOjpEKj8FpTBeb15YP1gUTG0yDpB%2fIuzxbsqYE%3d&risl=&pid=ImgRaw&r=0" },
        { "id": 8, "name": "Porsche 911 GT3 RS", "isAvailable": true, "image": "https://th.bing.com/th/id/OIP.tZ64rm_aVzeGfEaO1bYUQgHaEK?rs=1&pid=ImgDetMain" },
        { "id": 9, "name": "Ford Mustang", "isAvailable": true, "image": "https://bringatrailer.com/wp-content/uploads/2019/01/2013_ford_boss_302_1547688118fcfa866ecBat-Boss302-040.jpg" },
        { "id": 10, "name": "Ferrari 812 Superfast", "isAvailable": true, "image": "https://miamiautosport.com/wp-content/uploads/2020/06/DSC_0837-scaled.jpg" }
    ]
};

function renderCarCards() {
    const carCardsContainer = document.getElementById('car-cards-container');
    carCardsContainer.innerHTML = '';
    data.cars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <h3>${car.name}</h3>
            <p>${car.isAvailable ? 'Available' : 'Not Available'}</p>
            <button 
                onclick="borrowCar(${car.id})" 
                style="background-color: ${car.isAvailable ? 'green' : 'red'};" 
                ${!car.isAvailable ? 'disabled' : ''}
            >
                ${car.isAvailable ? 'Rent' : 'Not Available'}
            </button>
        `;
        carCardsContainer.appendChild(card);
    });
}

function borrowCar(carId) {
    const car = data.cars.find(car => car.id === carId);
    if (car && car.isAvailable) {
        car.isAvailable = false;
        alert(`You have rented the ${car.name}.`);
        renderCarCards(); // Re-render the car cards to update the availability status
    } else {
        alert(`Sorry, the ${car.name} is not available.`);
    }
}

document.addEventListener('DOMContentLoaded', renderCarCards);