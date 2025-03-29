import { useState, useEffect } from 'react';
import '../App.css';

function Complaints() {
    const [complaint, setComplaint] = useState([]);

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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                    ) : (
                    <p className="no-complaints-message">No complaints to show</p>
                )}
        </>
    );
}

export default Complaints;