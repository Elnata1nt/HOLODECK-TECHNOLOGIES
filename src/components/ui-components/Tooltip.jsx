// src/components/Tooltip.jsx
//Tooltip (Dica de Ferramenta): Uma dica de ferramenta para mostrar informações adicionais ao passar o mouse ou focar no elemento.

const Tooltip = ({ text, children }) => {
    return (
      <div className="relative group">
        {children}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
          {text}
        </div>
      </div>
    );
  };
  
  export default Tooltip;
  