import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components here. These are placeholders.
import HomeScreen from './components/HomeScreen';
import JobSeekerDash from './components/JobSeekerDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import JobDetails from './components/JobDetails';
import MessagingScreen from './components/MessagingScreen';
import ProfileEditingScreen from './components/ProfileEditingScreen';
import Settings from './components/Settings';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/job-seeker-dashboard" component={JobSeekerDashboard} />
                <Route path="/employer-dashboard" component={EmployerDashboard} />
                <Route path="/job-details/:jobId" component={JobDetails} />
                <Route path="/messaging" component={MessagingScreen} />
                <Route path="/profile-edit" component={ProfileEditingScreen} />
                <Route path="/settings" component={Settings} />
            </Switch>
        </Router>
    );
}

export default App;
