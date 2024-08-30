const validatePasswordVerification = (req, res, next) => {
    const { password, passwordVerification } = req.body;

    const errors = {};
    if (password !== passwordVerification){
        errors.passwordVerification = "Senhas não conferem.";
        return Object.keys(errors).length ? errors : null;
    }

    next();
  };

module.exports = validatePasswordVerification;