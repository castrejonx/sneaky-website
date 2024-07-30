document.addEventListener('DOMContentLoaded', () => {
    const petNameElement = document.querySelector('#pet-name span');
    const qrInfoElement = document.querySelector('#qr-info span');
    const ownerPhoneElement = document.querySelector('#owner-phone span');
    const vetInfoElement = document.querySelector('#vet-info span');

    // Sneaky data
    const petData = {
        name: 'Sneaky',
        ownerPhone: '+2539730573',
        qrInfo: "",
        vetInfo: 'Arroyo Veterinary Clinic (575) 524-0900'
    };

    // Populate the pet info
    petNameElement.textContent = petData.name;
    qrInfoElement.textContent = petData.qrInfo;
    ownerPhoneElement.textContent = petData.ownerPhone;
    vetInfoElement.textContent = petData.vetInfo;
});
