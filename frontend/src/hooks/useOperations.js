import React, { useState } from 'react'

const useOperations = () => {
    const [loading, setloading] = useState(false);

    const remove = async(id)=>{
        
        setloading(true);
        try {
            const res = await fetch(`/api/complaint/delete/${id}`, {
                method: "DELETE",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify()
            });

            if (!res.ok) {
                throw new Error("server error");
            }
            const data = await response.json();
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

    const update = async({id})=>{
        setloading(true);
        try {
            const res = await fetch(`/api/complaint/update/${id}`, {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify()
            });

            if (!res.ok) {
                throw new Error("server error");
            }
            const data = await response.json();
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
    return { loading, remove, update }
}

export default useOperations