// Redirigir a tenants.html
document.getElementById('view-tenants-btn').addEventListener('click', () => {
    window.location.href = 'tenants.html';
});

// Manejar el envío del formulario
document.getElementById('create-tenant-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Referencia al formulario
    const form = document.getElementById('create-tenant-form');

    // Obtener valores de los campos
    const tenantIdNumber = document.getElementById('tenant_id_number').value;
    const fullName = document.getElementById('full_name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Crear el objeto con los datos del formulario
    const data = {
        tenant_id_number: tenantIdNumber,
        full_name: fullName,
        email: email,
        phone: phone,
    };

    try {
        // Hacer la solicitud POST
        const response = await fetch('http://localhost:8000/api/tenants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Tenant created successfully!');
            console.log(await response.json());

            // Vaciar los campos del formulario
            form.reset();
        } else {
            alert(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to create tenant.');
    }
});
