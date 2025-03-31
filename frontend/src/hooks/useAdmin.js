import React, { useState } from 'react'

const useAdmin = () => {
    const [loading, setloading] = useState(false);

    const login = async({username, password})=>{
        
        setloading(true);
        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({username, password})
            });

            const data = await res.json({username, password});
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

    const logout = async()=>{
        
        setloading(true);
        try {
            const res = await fetch("/api/admin/logout", {
                method: "GET",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify()
            });

            const data = await res.json();
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


    return { loading, login, logout }
}

export default useAdmin