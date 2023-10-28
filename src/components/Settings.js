// Settings.js

import React, { useState } from 'react';

const Settings = () => {
    const [settingsData, setSettingsData] = useState({
        notifications: true,
        privacy: 'public',
        language: 'English'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettingsData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const saveSettings = () => {
        // Logic to save the updated settings
        // This could involve an API call, updating local state, etc.
        console.log('Settings saved:', settingsData);
    };

    return (
        <div className="settings-screen">

            <h2>User Settings</h2>

            {/* Notifications Setting */}
            <div className="setting-item">
                <label>
                    Notifications:
                    <input 
                        type="checkbox" 
                        name="notifications" 
                        checked={settingsData.notifications}
                        onChange={e => setSettingsData({ ...settingsData, notifications: e.target.checked })}
                    />
                </label>
            </div>

            {/* Privacy Setting */}
            <div className="setting-item">
                <label>
                    Privacy:
                    <select 
                        name="privacy"
                        value={settingsData.privacy} 
                        onChange={handleChange}
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                        <option value="friends-only">Friends Only</option>
                    </select>
                </label>
            </div>

            {/* Language Setting */}
            <div className="setting-item">
                <label>
                    Language:
                    <select 
                        name="language"
                        value={settingsData.language} 
                        onChange={handleChange}
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        // Add other languages as needed
                    </select>
                </label>
            </div>

            {/* Save Button */}
            <button onClick={saveSettings}>Save Changes</button>

            {/* Help and Support */}
            <div className="help-support">
                <h3>Help and Support</h3>
                <p><a href="#FAQ">FAQs</a></p>
                <p><a href="#contact-support">Contact Support</a></p>
                // Add other help resources as needed
            </div>

        </div>
    );
}

export default Settings;
