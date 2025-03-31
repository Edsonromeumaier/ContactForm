// Example of server-side validation for CRUD operations

function validateInput(data) {
    const errors = {};

    // Example validation rules
    if (!data.name || data.name.trim() === '') {
        errors.name = 'Name is required.';
    } else if (data.name.length < 3) {
        errors.name = 'Name must be at least 3 characters long.';
    }

    if (!data.email || data.email.trim() === '') {
        errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = 'Invalid email format.';
    }

    if (!data.message || data.message.trim() === '') {
        errors.message = 'Message is required.';
    } else if (data.message.length < 10) {
        errors.message = 'Message must be at least 10 characters long.';
    }

    return errors;
}

// Example usage
function handleRequest(req, res) {
    const validationErrors = validateInput(req.body);

    if (Object.keys(validationErrors).length > 0) {
        return res.status(400).json({ errors: validationErrors });
    }

    // Proceed with CRUD operation (e.g., create, update, etc.)
    res.status(200).json({ message: 'Validation passed!' });
}

module.exports = { validateInput, handleRequest };