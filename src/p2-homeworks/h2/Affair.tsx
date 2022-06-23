import React from 'react'
// import {log} from "util";
import s from "./Affairs.module.css";
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.affair}>
            <p>
                {props.affair.name}
            </p>
            <p>
                [{props.affair.priority}]
            </p>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
