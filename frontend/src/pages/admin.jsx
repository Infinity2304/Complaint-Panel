import React from 'react'
import { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import useOperations from '../hooks/useOperations';

const Admin = () => {
    const [complaint, setComplaint] = useState([]);
    const { remove, update, loading } = useOperations();

    const allFetch = async () => {
        try {
            const response = await fetch('/api/complaint/');
            if (!response.ok) {
                throw new Error('server error');
            }
            const data = await response.json();
            console.log(data);
            setComplaint(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        console.log('delete clicked');
        console.log(id);
        
        try {
            // Delete the complaint
            await remove(id);
            console.log("complaint deleted")

        } catch (error) {
            console.error("Error deleting complaint:", error);
        }

        allFetch();
    }

    useEffect(() => {
        allFetch();
    }, []);

    return (
        <>
            <h1 className="table-title">Complaints</h1>
            {complaint.length > 0 ? (
                <div className="table-container">
                    <table className="complaint-table">
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Course</th>
                                <th>Roll</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {complaint.map((complaint, index) => (
                                <tr key={complaint.id}>
                                    <td>{index + 1}</td>
                                    <td>{complaint.name}</td>
                                    <td>{complaint.description}</td>
                                    <td>{complaint.course}</td>
                                    <td>{complaint.roll}</td>
                                    <td>{complaint.status ? "open" : "close"}</td>
                                    <td onClick={()=> handleDelete(complaint.id)}><MdDelete /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="no-complaints-message">No complaints to show</p>
            )}
        </>
    )
}

export default Admin
