// ProfileEditingScreen.js

import React, { useState } from 'react';

const ProfileEditingScreen = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        skills: '',
        experience: '',
        education: '',
        otherInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // Logic to save the updated profile data
        // This could involve an API call, updating local state, etc.
        console.log('Profile data saved:', profileData);
    };

    return (
        <div className="profile-editing-screen">

            {/* Editable Fields */}
            <input 
                type="text" 
                name="name" 
                value={profileData.name} 
                onChange={handleChange} 
                placeholder="Name" 
            />
            <textarea 
                name="skills" 
                value={profileData.skills} 
                onChange={handleChange} 
                placeholder="Skills"
            ></textarea>
            <textarea 
                name="experience" 
                value={profileData.experience} 
                onChange={handleChange} 
                placeholder="Experience"
            ></textarea>
            <textarea 
                name="education" 
                value={profileData.education} 
                onChange={handleChange} 
                placeholder="Education"
            ></textarea>
            <textarea 
                name="otherInfo" 
                value={profileData.otherInfo} 
                onChange={handleChange} 
                placeholder="Other Information"
            ></textarea>

            {/* Upload Section */}
            <div className="upload-section">
                <label>
                    Upload Resume:
                    <input type="file" />
                </label>
                <label>
                    Upload Certifications:
                    <input type="file" multiple />
                </label>
            </div>

            {/* Save Button */}
            <button onClick={handleSubmit}>Save Changes</button>

        </div>
    );
}

export default ProfileEditingScreen;
