import React, {ChangeEvent, useState} from "react";

import {UserType} from "./HW3";
import {Greeting} from "./Greeting";

type GreetingContainerPropsType = {
    users: Array<UserType>;
    addUserCallback: (name: string) => void;
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                            users,
                                                                            addUserCallback,
                                                                        }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {

        if (error !== null) {
            setError(null);
        }

        setName(e.currentTarget.value)

    };

    const addUser = () => {
        if (name.trim() === "") {
            setError("Field is required")
            return
        }

        console.log(name)

        addUserCallback(name);

        alert(`Hello ${name}!`);

        setName("");
    };

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
};
