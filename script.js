document.addEventListener('DOMContentLoaded', () => {
    const petNameElement = document.querySelector('#pet-name span');
    const ownerPhoneElement = document.querySelector('#owner-phone span');
    const qrInfoElement = document.querySelector('#qr-info span');
    const vetInfoElement = document.querySelector('#vet-info span');

    // Sneaky data
    const petData = {
        name: 'Sneaky',
        ownerPhone: '+2539730573',
        qrInfo: "Sneaky''s owners have already been alerted that her QR code has been scanned.",
        vetInfo: 'Arroyo Veterinary Clinic, (575) 524-0900'
    };

    // Populate the pet info
    petNameElement.textContent = petData.name;
    ownerPhoneElement.textContent = petData.ownerPhone;
    qrInfoElement.textContent = petData.qrInfo;
    vetInfoElement.textContent = petData.vetInfo;
});
