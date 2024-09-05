// src/components/Button.jsx
//Button (Botão): Um componente de botão personalizável que suporta diferentes variantes.

const Button = ({ variant = 'primary', children, onClick, disabled }) => {
    const baseStyles = 'px-4 py-2 rounded text-white font-semibold focus:outline-none';
    const variants = {
      primary: 'bg-blue-500 hover:bg-blue-600',
      secondary: 'bg-gray-500 hover:bg-gray-600',
      disabled: 'bg-gray-300 cursor-not-allowed',
    };
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50' : ''}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  