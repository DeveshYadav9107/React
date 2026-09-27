import { memo, useEffect, useState } from "react";

function ColorFul() {
    const [color, setColor] = useState("black");

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
                <h1>Color is: {color}</h1>
                <button onClick={() => setColor("red")}>Red</button>
                <button onClick={() => setColor("green")}>Green</button>
                <button onClick={() => setColor("blue")}>Blue</button>
            </div>
        </>
    );
}

export default memo(ColorFul);