import React from "react";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";


const Character = observer(() => {
    const { name } = useGlobalDataStore();
    return (
        <div>
            xname::{name}x
    </div>
    )
})

export default Character;