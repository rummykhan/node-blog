const Validation = {
    formatValidationErrors: function (validationErrors) {
        const errors = {};
        validationErrors.forEach((validationError) => {
            errors[validationError.path] = Validation.studlySpaced(validationError.message);
        });
        return errors;
    },

    studlySpaced: function (string) {
        return (string+ '').replace(/_/g, ' ');
    }
};

module.exports = Validation;