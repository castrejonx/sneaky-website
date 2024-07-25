document.addEventListener('DOMContentLoaded', () => {
    const petNameElement = document.querySelector('#pet-name span');
    const ownerPhoneElement = document.querySelector('#owner-phone span');
    const vetInfoElement = document.querySelector('#vet-info span');

    // Dummy data
    const petData = {
        name: 'Buddy',
        ownerPhone: '+123456789',
        vetInfo: 'Dr. Jane Doe, Vet Clinic, (123) 456-7890'
    };

    // Populate the pet info
    petNameElement.textContent = petData.name;
    ownerPhoneElement.textContent = petData.ownerPhone;
    vetInfoElement.textContent = petData.vetInfo;
});
