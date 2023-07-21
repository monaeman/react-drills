import React from 'react'

function object() {

    const zuko = {
        firstName: 'zuko',
        age: 3,
        email: 'abc@123.com'
    }

    const {firstName, age, email} = zuko;
    /*
    const firstNmae = zuko.firstName;
    const age = zuko.age;
    const email = zuko.email;
    */

    return Object.keys(zuko).map((key, index)=>{
        return (
            <h2>
                {key} : {zuko[key]}
            </h2>
        )
    })

}

export default object