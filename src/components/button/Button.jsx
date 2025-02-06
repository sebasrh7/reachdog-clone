const Button = ({ href, newpage = { target: "_blank", rel: "noreferrer" }, onClick, children, variant = "filled", className }) => {
    let variantClasses = "";

    switch (variant) {
        case "text":
            variantClasses = "px-3 py-2 rounded-full text-center border border-transparent";
            break;
        default:
            variantClasses = "text-white border border-green-400 bg-green-400 px-3 py-2 rounded-full text-center";
    }

    if (className) {
        // Remover las clases que ya existen en el variant para evitar duplicados en el className final 
        // Por ejemplo: variantClasses = "px-3 py-2" y className = "px-1 py-5"
        // El resultado final sería className = "px-1 py-5", lo que se mira es el tipo de estilo: px, py, text, bg, etc
        // Para eso se separa por '-' y se compara el primer elemento de cada clase para ver si ya existe en el variant 
        // Si ya existe no se agrega al className final
        
        const classNames = className.split(" ");
        const variant = variantClasses.split(" ");

        const filteredVariant = variant.filter((v) => {
            const v1 = v.split("-")[0]; // px, py, text, bg, etc
            return !classNames.some((c) => c.includes(v1)); // Si ya existe no lo agrega 
        });

        variantClasses = filteredVariant.join(" ");

        variantClasses = `${variantClasses} ${className}`;
    }

    if (href) {
        return (
            <a href={href}
                className={variantClasses}
                target={newpage.target}
                rel={newpage.rel}
            >
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={variantClasses} >
            {children}
        </button>
    );
};

export default Button;