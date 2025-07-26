function UserProfile(props) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      margin: '15px 0',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: '#3498db',
        marginTop: '0',
        borderBottom: '1px solid #eee',
        paddingBottom: '10px'
      }}>{props.name}</h2>
      <p style={{ fontSize: '16px', margin: '8px 0' }}>
        Age: <span style={{ fontWeight: '600', color: '#2c3e50' }}>{props.age}</span>
      </p>
      <p style={{ 
        fontSize: '15px', 
        lineHeight: '1.5',
        color: '#555'
      }}>Bio: {props.bio}</p>
    </div>
  );
  import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;