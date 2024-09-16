import validator from "validator";
import CPFValidator from "cpf-cnpj-validator";

//validar se os campos estão vazios
const validateEmptyFields = ({
  name,
  email,
  password,
  cpf,
}) => {
  const errors = {};

  const trim = (value) => (value || "").trim();

  if (!trim(name)) errors.name = "Nome é obrigatório.";
  if (!trim(email)) errors.email = "Email é obrigatório.";
  if (!trim(password)) errors.password = "Senha é obrigatória.";
  if (!trim(cpf)) errors.cpf = "CPF é obrigatório.";

  return Object.keys(errors).length ? errors : null;
};

// Função para validar o CPF
const validateCpf = (cpf) => {
  const errors = {};
  if (!CPFValidator.cpf.isValid(cpf)) errors.cpf = "CPF inválido.";
  return Object.keys(errors).length ? errors : null;
};

const validateEmail = (email) => {
  const errors = {};
  if (!validator.isEmail(email)) errors.email = "Email inválido.";
  return Object.keys(errors).length ? errors : null;
};

// Função para validar a senha
const validatePassword = (password) => {
  const errors = {};
  if (password.length < 8)
    errors.password = "Senha deve ter pelo menos 8 caracteres.";
  return Object.keys(errors).length ? errors : null;
};

// Função principal de validação
const validations = async (req, res, next) => {
  const { name, email, password, cpf } =req.body;

  try {
    // Validações básicas
    const errors = {
      ...(validateEmptyFields({ name, email, password, cpf }) || {}),
      ...(validateCpf(cpf) || {}),
      ...(validateEmail(email) || {}),
      ...(validatePassword(password) || {}),
    };

    if (Object.keys(errors).length > 0) {
      return res.status(200).json({ success: false, message: errors });
    }

    // Se não houver conflitos, continua com a requisição
    next();
  } catch (error) {
    console.error("Erro ao validar campos:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro interno do servidor" });
  }
};

export default validations;
