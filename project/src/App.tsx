import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import PatientForm from './components/PatientForm';
import SearchPatient from './components/SearchPatient';
import { AuthState, CurrentView, Patient } from './types';
import { mockPatients } from './data/mockData';

function App() {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    user: null
  });
  
  const [currentView, setCurrentView] = useState<CurrentView>('dashboard');
  const [patients, setPatients] = useState<Patient[]>(mockPatients);

  const handleLogin = (username: string, password: string) => {
    // Simple authentication (in real app, this would be server-side)
    if (username && password) {
      setAuth({
        isAuthenticated: true,
        user: {
          name: username === 'admin' ? 'Dr. Admin' : username,
          role: 'Doctor'
        }
      });
    }
  };

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      user: null
    });
    setCurrentView('dashboard');
  };

  const handleSavePatient = (patientData: Omit<Patient, 'id'>) => {
    const newPatient: Patient = {
      ...patientData,
      id: (patients.length + 1).toString()
    };
    setPatients([newPatient, ...patients]);
  };

  if (!auth.isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard patients={patients} />;
      case 'patient-form':
        return <PatientForm onSave={handleSavePatient} />;
      case 'search-patient':
        return <SearchPatient patients={patients} />;
      default:
        return <Dashboard patients={patients} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentView={currentView}
        onViewChange={setCurrentView}
        onLogout={handleLogout}
        userName={auth.user?.name || 'User'}
      />
      {renderCurrentView()}
    </div>
  );
}

export default App;