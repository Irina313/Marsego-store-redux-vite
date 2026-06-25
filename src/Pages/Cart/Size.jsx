const Size = ({value, onChange}) => {

    const sizes = ["s", "m", "l"];

    return (
        <div>
            {sizes.map((size) => (
               <button  
                    key={size}
                    className={value === size ? "selectedButton" : "sizeButton"}
                    onClick={() => onChange(size)}
                    >
                        {size.toUpperCase()}
                    </button>
            ))}
    </div>
    );
};

export default Size;