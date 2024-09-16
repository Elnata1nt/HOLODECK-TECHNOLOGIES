const validatePasswordVerification = (req, res, next) => {
    const { password, passwordVerification } = req.body;

    const errors = {};
    if (password !== passwordVerification){
        errors.passwordVerification = "Senhas não conferem.";
        return Object.keys(errors).length ? {success:false, message: errors} : null;
    }

    next();
  };

export default validatePasswordVerification;