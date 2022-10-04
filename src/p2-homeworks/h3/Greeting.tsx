import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string;
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
    addUser: () => void;
    error: string | null;
    totalUsers: number;
};

// презентационная компонента (для верстальщика)
export const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = error ? s.error : s.someClass;

    console.log(inputClass)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    );
};
