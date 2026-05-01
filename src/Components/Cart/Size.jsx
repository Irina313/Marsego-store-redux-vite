const Size = ({selected, setSelected, selectedM, setSelectedM, selectedL, setSelectedL}) => {

    return (<div>

<button className={selected ? "selectedButton" : "sizeButton"} onClick={() =>setSelected(!selected)}>S</button>
<button className={selectedM ? "selectedButton" : "sizeButton"} onClick={() =>setSelectedM(!selectedM)}>M</button>
<button className={selectedL ? "selectedButton" : "sizeButton"} onClick={() =>setSelectedL(!selectedL)}>L</button>

    </div>)
}

export default Size;