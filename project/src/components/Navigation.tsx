import React from 'react';
import { BarChart3, UserPlus, Search, LogOut, Eye } from 'lucide-react';
import { CurrentView } from '../types';

interface NavigationProps {
  currentView: CurrentView;
  onViewChange: (view: CurrentView) => void;
  onLogout: () => void;
  userName: string;
}

export default function Navigation({ currentView, onViewChange, onLogout, userName }: NavigationProps) {
  const navItems = [
    { id: 'dashboard' as CurrentView, label: 'Dashboard', icon: BarChart3 },
    { id: 'patient-form' as CurrentView, label: 'Add Patient', icon: UserPlus },
    { id: 'search-patient' as CurrentView, label: 'Search Patient', icon: Search },
  ];

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center mr-8">
              <Eye className="w-8 h-8 text-sky-500 mr-2" />
              <span className="text-xl font-bold text-gray-900">OptiCare CRM</span>
            </div>
            
            <nav className="flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onViewChange(item.id)}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      currentView === item.id
                        ? 'bg-sky-100 text-sky-700'
                        : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700">Welcome, {userName}</span>
            <button
              onClick={onLogout}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}