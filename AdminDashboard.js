// import React, { useEffect, useState } from 'react';
// import './Admin.css';
// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/users')
//             .then(response => response.json())
//             .then(data => {
//                 setUsers(data);
//             })
//             .catch((error) => console.error('Error fetching user data:', error));
//     }, []);

//     return (
//         <div className="admin-dashboard">
//             <h2>Admin Dashboard</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user, index) => (
//                         <tr key={index}>
//                             <td>{user.email}</td>
//                             <td>
//                                 <button>Edit</button>
//                                 <button>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AdminDashboard;



// import React, { useState, useEffect } from 'react';
// import './Admin.css';

// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);
//     const [editMode, setEditMode] = useState(false);
//     const [editingUser, setEditingUser] = useState(null);

//     // Fetch users from the API (db.json)
//     useEffect(() => {
//         fetch('http://localhost:5000/users')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => setUsers(data))
//             .catch(error => console.error('Error fetching users:', error));
//     }, []);

//     // Function to delete a user
//     const deleteUser = (userId) => {
//         fetch(`http://localhost:5000/users/${userId}`, {
//             method: 'DELETE',
//         })
//             .then(() => {
//                 setUsers(users.filter(user => user.id !== userId)); // Remove user from state
//             })
//             .catch(error => console.error('Error deleting user:', error));
//     };

//     // Function to handle editing user
//     const handleEditUser = (user) => {
//         setEditMode(true);
//         setEditingUser(user);
//     };

//     // Function to save updated user
//     const saveUser = (updatedUser) => {
//         fetch(`http://localhost:5000/users/${updatedUser.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(updatedUser),
//         })
//             .then(response => response.json())
//             .then(() => {
//                 setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
//                 setEditMode(false); // Exit edit mode
//                 setEditingUser(null);
//             })
//             .catch(error => console.error('Error updating user:', error));
//     };

//     return (
//         <div className="admin-dashboard">
//             <h1>Admin Dashboard</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.email}</td>
//                             <td>
//                                 <button onClick={() => handleEditUser(user)}>Edit</button>
//                                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Edit user form */}
//             {editMode && editingUser && (
//                 <div className="edit-form">
//                     <h3>Edit User</h3>
//                     <form onSubmit={(e) => { 
//                         e.preventDefault(); 
//                         saveUser(editingUser); 
//                     }}>
//                         <label>Email:</label>
//                         <input 
//                             type="email" 
//                             value={editingUser.email} 
//                             onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} 
//                         />
//                         <button type="submit">Save</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;


// import React, { useState, useEffect } from 'react';
// import './Admin.css'; // Make sure to import the CSS file

// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);
//     const [editMode, setEditMode] = useState(false);
//     const [editingUser, setEditingUser] = useState(null);

//     // Fetch users from the API (db.json)
//     useEffect(() => {
//         fetch('http://localhost:5000/users')
//             .then(response => response.json())
//             .then(data => setUsers(data))
//             .catch(error => console.error('Error fetching users:', error));
//     }, []);

//     // Function to delete a user
//     const deleteUser = (userId) => {
//         fetch(`http://localhost:5000/users/${userId}`, {
//             method: 'DELETE',
//         })
//             .then(() => {
//                 setUsers(users.filter(user => user.id !== userId)); // Remove user from state
//             })
//             .catch(error => console.error('Error deleting user:', error));
//     };

//     // Function to handle editing user
//     const handleEditUser = (user) => {
//         setEditMode(true);
//         setEditingUser(user);
//     };

//     // Function to save updated user
//     const saveUser = (updatedUser) => {
//         fetch(`http://localhost:5000/users/${updatedUser.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(updatedUser),
//         })
//             .then(response => response.json())
//             .then(() => {
//                 setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
//                 setEditMode(false); // Exit edit mode
//                 setEditingUser(null);
//             })
//             .catch(error => console.error('Error updating user:', error));
//     };

//     return (
//         <div className="admin-dashboard">
//             <h1>Admin Dashboard</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.email}</td>
//                             <td>
//                                 <button onClick={() => handleEditUser(user)}>Edit</button>
//                                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Edit user form */}
//             {editMode && editingUser && (
//                 <div className="edit-form">
//                     <h3>Edit User</h3>
//                     <form onSubmit={(e) => { 
//                         e.preventDefault(); 
//                         saveUser(editingUser); 
//                     }}>
//                         <label>Email:</label>
//                         <input 
//                             type="email" 
//                             value={editingUser.email} 
//                             onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} 
//                         />
//                         <button type="submit">Save</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;

// import React, { useState, useEffect } from 'react';
// import { Pie } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import './Admin.css'; // Make sure to import your CSS file

// // Register the required components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const AdminDashboard = () => {
//     const [feedback, setFeedback] = useState([]);
//     const [users, setUsers] = useState([]);
//     const [editMode, setEditMode] = useState(false);
//     const [editingUser, setEditingUser] = useState(null);

//     // Fetch users from the API (db.json)
//     useEffect(() => {
//         fetch('http://localhost:5000/users')
//             .then(response => response.json())
//             .then(data => setUsers(data))
//             .catch(error => console.error('Error fetching users:', error));
//     }, []);

//     // Fetch feedback from the API
//     useEffect(() => {
//         fetch('http://localhost:5000/api/feedback')
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Fetched Feedback Data:', data);
//                 setFeedback(data);
//             })
//             .catch(error => console.error('Error fetching feedback:', error));
//     }, []);

//     // Calculate pie chart data
//     const calculatePieData = () => {
//         const ratingsCount = Array(5).fill(0); // Array to hold counts for ratings 1-5

//         feedback.forEach(entry => {
//             entry.ratings.forEach((rating) => {
//                 if (rating !== null) {
//                     ratingsCount[rating - 1] += 1; // Adjusted to match index (1-5 mapped to 0-4)
//                 }
//             });
//         });

//         return {
//             labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
//             datasets: [
//                 {
//                     data: ratingsCount,
//                     backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//                     hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//                 },
//             ],
//         };
//     };

//     // Function to delete a user
//     const deleteUser = (userId) => {
//         fetch(`http://localhost:5000/users/${userId}`, {
//             method: 'DELETE',
//         })
//             .then(() => {
//                 setUsers(users.filter(user => user.id !== userId)); // Remove user from state
//             })
//             .catch(error => console.error('Error deleting user:', error));
//     };

//     // Function to handle editing user
//     const handleEditUser = (user) => {
//         setEditMode(true);
//         setEditingUser(user);
//     };

//     // Function to save updated user
//     const saveUser = (updatedUser) => {
//         fetch(`http://localhost:5000/users/${updatedUser.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(updatedUser),
//         })
//             .then(response => response.json())
//             .then(() => {
//                 setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
//                 setEditMode(false); // Exit edit mode
//                 setEditingUser(null);
//             })
//             .catch(error => console.error('Error updating user:', error));
//     };

//     return (
//         <div className="admin-dashboard">
//             <h1>Admin Dashboard</h1>

//             {/* Feedback Ratings Pie Chart */}
//             <h2>Feedback Ratings</h2>
//             {feedback.length > 0 ? (
//                 <Pie data={calculatePieData()} />
//             ) : (
//                 <p>No feedback data available to display.</p>
//             )}

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.email}</td>
//                             <td>
//                                 <button onClick={() => handleEditUser(user)}>Edit</button>
//                                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Edit user form */}
//             {editMode && editingUser && (
//                 <div className="edit-form">
//                     <h3>Edit User</h3>
//                     <form onSubmit={(e) => { 
//                         e.preventDefault(); 
//                         saveUser(editingUser); 
//                     }}>
//                         <label>Email:</label>
//                         <input 
//                             type="email" 
//                             value={editingUser.email} 
//                             onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} 
//                         />
//                         <button type="submit">Save</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// // export default AdminDashboard;
// import React, { useState, useEffect } from 'react';
// import { Pie } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import './Admin.css'; // Make sure to import your CSS file

// // Register the required components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const AdminDashboard = () => {
//     const [feedback, setFeedback] = useState([]);
//     const [users, setUsers] = useState([]);
//     const [editMode, setEditMode] = useState(false);
//     const [editingUser, setEditingUser] = useState(null);

//     // Fetch users from the API (db.json)
//     useEffect(() => {
//         fetch('http://localhost:5000/users')
//             .then(response => response.json())
//             .then(data => setUsers(data))
//             .catch(error => console.error('Error fetching users:', error));
//     }, []);

//     // Fetch feedback from the API
//     useEffect(() => {
//         fetch('http://localhost:5000/api/feedback')
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Fetched Feedback Data:', data);
//                 setFeedback(data);
//             })
//             .catch(error => console.error('Error fetching feedback:', error));
//     }, []);

//     // Calculate pie chart data based on survey feedback ratings
//     const calculatePieData = () => {
//         const ratingsCount = Array(5).fill(0); // Array to hold counts for ratings 1-5

//         // Iterate over each feedback entry and count the ratings
//         feedback.forEach(entry => {
//             entry.ratings.forEach((rating) => {
//                 if (rating >= 1 && rating <= 5) { // Ensure ratings are between 1 and 5
//                     ratingsCount[rating - 1] += 1; // Increment corresponding index
//                 }
//             });
//         });

//         return {
//             labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
//             datasets: [
//                 {
//                     label: 'Survey Feedback Ratings',
//                     data: ratingsCount,
//                     backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//                     hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//                 },
//             ],
//         };
//     };

//     // Function to delete a user
//     const deleteUser = (userId) => {
//         fetch(`http://localhost:5000/users/${userId}`, {
//             method: 'DELETE',
//         })
//             .then(() => {
//                 setUsers(users.filter(user => user.id !== userId)); // Remove user from state
//             })
//             .catch(error => console.error('Error deleting user:', error));
//     };

//     // Function to handle editing user
//     const handleEditUser = (user) => {
//         setEditMode(true);
//         setEditingUser(user);
//     };

//     // Function to save updated user
//     const saveUser = (updatedUser) => {
//         fetch(`http://localhost:5000/users/${updatedUser.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(updatedUser),
//         })
//             .then(response => response.json())
//             .then(() => {
//                 setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
//                 setEditMode(false); // Exit edit mode
//                 setEditingUser(null);
//             })
//             .catch(error => console.error('Error updating user:', error));
//     };

//     return (
//         <div className="admin-dashboard">
//             <h1>Admin Dashboard</h1>

//             {/* Feedback Ratings Pie Chart */}
//             <h2>Feedback Ratings</h2>
//             {feedback.length > 0 ? (
//                 <Pie data={calculatePieData()} />
//             ) : (
//                 <p>No feedback data available to display.</p>
//             )}

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.email}</td>
//                             <td>
//                                 <button onClick={() => handleEditUser(user)}>Edit</button>
//                                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Edit user form */}
//             {editMode && editingUser && (
//                 <div className="edit-form">
//                     <h3>Edit User</h3>
//                     <form onSubmit={(e) => { 
//                         e.preventDefault(); 
//                         saveUser(editingUser); 
//                     }}>
//                         <label>Email:</label>
//                         <input 
//                             type="email" 
//                             value={editingUser.email} 
//                             onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} 
//                         />
//                         <button type="submit">Save</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;


// import React, { useState, useEffect } from 'react';
// import { Pie } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import './Admin.css'; // Make sure to import your CSS file

// // Register the required components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const AdminDashboard = () => {
//     const [feedback, setFeedback] = useState([]);
//     const [users, setUsers] = useState([]);
//     const [editMode, setEditMode] = useState(false);
//     const [editingUser, setEditingUser] = useState(null);

//     // Fetch users from the API (db.json)
//     useEffect(() => {
//         fetch('http://localhost:5000/users')
//             .then(response => response.json())
//             .then(data => setUsers(data))
//             .catch(error => console.error('Error fetching users:', error));
//     }, []);

//     // Fetch feedback from the API
//     useEffect(() => {
//         fetch('http://localhost:5000/api/feedback')
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Fetched Feedback Data:', data);
//                 setFeedback(data);
//             })
//             .catch(error => console.error('Error fetching feedback:', error));
//     }, []);

//     // Calculate pie chart data
//     const calculatePieData = () => {
//         const ratingsCount = Array(5).fill(0); // Array to hold counts for ratings 1-5

//         feedback.forEach(entry => {
//             entry.ratings.forEach((rating) => {
//                 if (rating >= 1 && rating <= 5) { // Ensure ratings are valid (1-5)
//                     ratingsCount[rating - 1] += 1; // Increment corresponding index (1-5 mapped to 0-4)
//                 }
//             });
//         });

//         return {
//             labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
//             datasets: [
//                 {
//                     label: 'Survey Feedback Ratings',
//                     data: ratingsCount,
//                     backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//                     hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//                 },
//             ],
//         };
//     };

//     // Function to delete a user
//     const deleteUser = (userId) => {
//         fetch(`http://localhost:5000/users/${userId}`, {
//             method: 'DELETE',
//         })
//             .then(() => {
//                 setUsers(users.filter(user => user.id !== userId)); // Remove user from state
//             })
//             .catch(error => console.error('Error deleting user:', error));
//     };

//     // Function to handle editing user
//     const handleEditUser = (user) => {
//         setEditMode(true);
//         setEditingUser(user);
//     };

//     // Function to save updated user
//     const saveUser = (updatedUser) => {
//         fetch(`http://localhost:5000/users/${updatedUser.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(updatedUser),
//         })
//             .then(response => response.json())
//             .then(() => {
//                 setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
//                 setEditMode(false); // Exit edit mode
//                 setEditingUser(null);
//             })
//             .catch(error => console.error('Error updating user:', error));
//     };

//     return (
//         <div className="admin-dashboard">
//             <h1>Admin Dashboard</h1>

//             {/* Feedback Ratings Pie Chart */}
//             <h2>Feedback Ratings</h2>
//             {feedback.length > 0 ? (
//                 <Pie data={calculatePieData()} />
//             ) : (
//                 <p>No feedback data available to display.</p>
//             )}

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.email}</td>
//                             <td>
//                                 <button onClick={() => handleEditUser(user)}>Edit</button>
//                                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Edit user form */}
//             {editMode && editingUser && (
//                 <div className="edit-form">
//                     <h3>Edit User</h3>
//                     <form onSubmit={(e) => { 
//                         e.preventDefault(); 
//                         saveUser(editingUser); 
//                     }}>
//                         <label>Email:</label>
//                         <input 
//                             type="email" 
//                             value={editingUser.email} 
//                             onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} 
//                         />
//                         <button type="submit">Save</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;


// import React, { useState, useEffect } from 'react';
// import { Pie } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import './Admin.css';

// // Register required components for the chart
// ChartJS.register(ArcElement, Tooltip, Legend);

// const AdminDashboard = () => {
//     const [feedback, setFeedback] = useState([]);
//     const [users, setUsers] = useState([]);
//     const [editMode, setEditMode] = useState(false);
//     const [editingUser, setEditingUser] = useState(null);

//     // Fetch users from the API (db.json)
//     useEffect(() => {
//         fetch('http://localhost:5000/users')
//             .then(response => response.json())
//             .then(data => setUsers(data))
//             .catch(error => console.error('Error fetching users:', error));
//     }, []);

//     // Fetch feedback from the API
//     useEffect(() => {
//         fetch('http://localhost:5000/api/feedback')
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Fetched Feedback Data:', data);
//                 setFeedback(data);
//             })
//             .catch(error => console.error('Error fetching feedback:', error));
//     }, []);

//     // Calculate pie chart data for feedback ratings
//     const calculatePieData = () => {
//         const ratingsCount = Array(5).fill(0); // Initialize array to count ratings 1-5

//         feedback.forEach(entry => {
//             entry.ratings.forEach((rating) => {
//                 if (rating >= 1 && rating <= 5) {
//                     ratingsCount[rating - 1] += 1; // Increment the count for each rating
//                 }
//             });
//         });

//         return {
//             labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
//             datasets: [
//                 {
//                     label: 'Survey Feedback Ratings',
//                     data: ratingsCount,
//                     backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//                     hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//                 },
//             ],
//         };
//     };

//     // Delete a user
//     const deleteUser = (userId) => {
//         fetch(`http://localhost:5000/users/${userId}`, {
//             method: 'DELETE',
//         })
//             .then(() => {
//                 setUsers(users.filter(user => user.id !== userId)); // Remove the deleted user from the state
//             })
//             .catch(error => console.error('Error deleting user:', error));
//     };

//     // Handle edit user
//     const handleEditUser = (user) => {
//         setEditMode(true);
//         setEditingUser(user);
//     };

//     // Save updated user information
//     const saveUser = (updatedUser) => {
//         fetch(`http://localhost:5000/users/${updatedUser.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(updatedUser),
//         })
//             .then(response => response.json())
//             .then(() => {
//                 setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
//                 setEditMode(false); // Exit edit mode after saving
//                 setEditingUser(null);
//             })
//             .catch(error => console.error('Error updating user:', error));
//     };

//     return (
//         <div className="admin-dashboard">
//             <h1>Admin Dashboard</h1>

//             {/* Feedback Ratings Pie Chart */}
//             <h2>Feedback Ratings</h2>
//             {feedback.length > 0 ? (
//                 <Pie data={calculatePieData()} />
//             ) : (
//                 <p>No feedback data available to display.</p>
//             )}

//             {/* Users Table */}
//             <h2>Users</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.email}</td>
//                             <td>
//                                 <button onClick={() => handleEditUser(user)}>Edit</button>
//                                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Edit User Form */}
//             {editMode && editingUser && (
//                 <div className="edit-form">
//                     <h3>Edit User</h3>
//                     <form onSubmit={(e) => { 
//                         e.preventDefault(); 
//                         saveUser(editingUser); 
//                     }}>
//                         <label>Email:</label>
//                         <input 
//                             type="email" 
//                             value={editingUser.email} 
//                             onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} 
//                         />
//                         <button type="submit">Save</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;


// import React, { useState, useEffect } from 'react';
// import { Pie } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import './Admin.css';

// // Register required components for the chart
// ChartJS.register(ArcElement, Tooltip, Legend);

// const AdminDashboard = () => {
//     const [feedback, setFeedback] = useState([]);
//     const [users, setUsers] = useState([]);
//     const [editMode, setEditMode] = useState(false);
//     const [editingUser, setEditingUser] = useState(null);

//     // Fetch users from the API (db.json)
//     useEffect(() => {
//         fetch('http://localhost:5000/users')
//             .then(response => response.json())
//             .then(data => setUsers(data))
//             .catch(error => console.error('Error fetching users:', error));
//     }, []);

//     // Fetch feedback from the API
//     useEffect(() => {
//         fetch('http://localhost:5000/api/feedback')
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Fetched Feedback Data:', data); // Log feedback data
//                 setFeedback(data); // Set feedback state with the fetched data
//             })
//             .catch(error => console.error('Error fetching feedback:', error));
//     }, []);

//     // Calculate pie chart data for feedback ratings
//     const calculatePieData = () => {
//         const ratingsCount = Array(5).fill(0); // Initialize array to count ratings 1-5

//         if (!feedback || feedback.length === 0) {
//             console.log('No feedback available or feedback structure is incorrect.');
//             return null;
//         }

//         feedback.forEach(entry => {
//             if (Array.isArray(entry.ratings)) {
//                 entry.ratings.forEach((rating) => {
//                     if (rating >= 1 && rating <= 5) {
//                         ratingsCount[rating - 1] += 1; // Increment the count for each rating
//                     }
//                 });
//             } else {
//                 console.log('Invalid feedback structure. Entry:', entry);
//             }
//         });

//         return {
//             labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
//             datasets: [
//                 {
//                     label: 'Survey Feedback Ratings',
//                     data: ratingsCount,
//                     backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//                     hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//                 },
//             ],
//         };
//     };

//     // Delete a user
//     const deleteUser = (userId) => {
//         fetch(`http://localhost:5000/users/${userId}`, {
//             method: 'DELETE',
//         })
//             .then(() => {
//                 setUsers(users.filter(user => user.id !== userId)); // Remove the deleted user from the state
//             })
//             .catch(error => console.error('Error deleting user:', error));
//     };

//     // Handle edit user
//     const handleEditUser = (user) => {
//         setEditMode(true);
//         setEditingUser(user);
//     };

//     // Save updated user information
//     const saveUser = (updatedUser) => {
//         fetch(`http://localhost:5000/users/${updatedUser.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(updatedUser),
//         })
//             .then(response => response.json())
//             .then(() => {
//                 setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
//                 setEditMode(false); // Exit edit mode after saving
//                 setEditingUser(null);
//             })
//             .catch(error => console.error('Error updating user:', error));
//     };

//     return (
//         <div className="admin-dashboard">
//             <h1>Admin Dashboard</h1>

//             {/* Feedback Ratings Pie Chart */}
//             <h2>Feedback Ratings</h2>
//             {feedback.length > 0 ? (
//                 <Pie data={calculatePieData()} />
//             ) : (
//                 <p>No feedback data available to display.</p>
//             )}

//             {/* Users Table */}
//             <h2>Users</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.email}</td>
//                             <td>
//                                 <button onClick={() => handleEditUser(user)}>Edit</button>
//                                 <button onClick={() => deleteUser(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Edit User Form */}
//             {editMode && editingUser && (
//                 <div className="edit-form">
//                     <h3>Edit User</h3>
//                     <form onSubmit={(e) => { 
//                         e.preventDefault(); 
//                         saveUser(editingUser); 
//                     }}>
//                         <label>Email:</label>
//                         <input 
//                             type="email" 
//                             value={editingUser.email} 
//                             onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} 
//                         />
//                         <button type="submit">Save</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import './Admin.css';

// Register required components for the chart
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
    const [feedback, setFeedback] = useState([]);
    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    // Fetch users from the API (db.json)
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    // Fetch feedback from the API
    useEffect(() => {
        fetch('http://localhost:5000/api/feedback')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched Feedback Data:', data); // Log feedback data
                setFeedback(data); // Set feedback state with the fetched data
            })
            .catch(error => console.error('Error fetching feedback:', error));
    }, []);

    // Calculate pie chart data for feedback ratings
    const calculatePieData = () => {
        const ratingsCount = Array(5).fill(0); // Initialize array to count ratings 1-5

        if (!feedback || feedback.length === 0) {
            console.log('No feedback available or feedback structure is incorrect.');
            return null;
        }

        feedback.forEach(entry => {
            if (Array.isArray(entry.ratings)) {
                entry.ratings.forEach((rating) => {
                    if (rating >= 1 && rating <= 5) {
                        ratingsCount[rating - 1] += 1; // Increment the count for each rating
                    }
                });
            } else {
                console.log('Invalid feedback structure. Entry:', entry);
            }
        });

        return {
            labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
            datasets: [
                {
                    label: 'Survey Feedback Ratings',
                    data: ratingsCount,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                },
            ],
        };
    };

    // Delete a user
    const deleteUser = (userId) => {
        fetch(`http://localhost:5000/users/${userId}`, {
            method: 'DELETE',
        })
            .then(() => {
                setUsers(users.filter(user => user.id !== userId)); // Remove the deleted user from the state
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    // Handle edit user
    const handleEditUser = (user) => {
        setEditMode(true);
        setEditingUser(user);
    };

    // Save updated user information
    const saveUser = (updatedUser) => {
        fetch(`http://localhost:5000/users/${updatedUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then(response => response.json())
            .then(() => {
                setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
                setEditMode(false); // Exit edit mode after saving
                setEditingUser(null);
            })
            .catch(error => console.error('Error updating user:', error));
    };

    // Handle logout (can redirect or clear session/token)
    const handleLogout = () => {
        // Here you can clear user session, token, or perform any logout logic
        console.log('Logged out');
        // For example, you can redirect to the login page
        window.location.href = '/login';
    };

    return (
        <div className="admin-dashboard">
            <header className="dashboard-header">
                <h1>Admin Dashboard</h1>
                {/* Logout button */}
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </header>

            {/* Feedback Ratings Pie Chart */}
            <h2>Feedback Ratings</h2>
            {feedback.length > 0 ? (
                <Pie data={calculatePieData()} />
            ) : (
                <p>No feedback data available to display.</p>
            )}

            {/* Users Table */}
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleEditUser(user)}>Edit</button>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit User Form */}
            {editMode && editingUser && (
                <div className="edit-form">
                    <h3>Edit User</h3>
                    <form onSubmit={(e) => { 
                        e.preventDefault(); 
                        saveUser(editingUser); 
                    }}>
                        <label>Email:</label>
                        <input 
                            type="email" 
                            value={editingUser.email} 
                            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} 
                        />
                        <button type="submit">Save</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
