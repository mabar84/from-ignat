import React, {useState} from "react";

import {v1} from "uuid";
import {GreetingContainer} from "./GreetingContainer";

// types
export type UserType = {
    _id: string;
    name: string;
};

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {
        const newUser = {_id: v1(), name};

        users.push(newUser);
        setUsers(users)
        console.log(users);
    };

    return (
        <div>
            <hr/>
            homeworks 3{/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
