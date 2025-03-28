import React, { useState } from 'react'

const useRegister = () => {
    const [loading, setloading] = useState(false);

    const register = async({name, course, roll, description})=>{
        
        setloading(true);
        try {
            const res = await fetch("/api/complaint/create/", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({name, course, roll, description})
            });

            const data = await res.json({name, course, roll, description});
            console.log(data);
            
            if(data.error){
                throw new Error(data.error);
            }

        } catch (error) {
            console.log(error.message);
        } finally{
            setloading(false);
        }

    }
    return { loading, register }
}

export default useRegister