import React from 'react';
import { Users, Calendar, TrendingUp, Activity } from 'lucide-react';
import { Patient, PatientStats } from '../types';

interface DashboardProps {
  patients: Patient[];
}

export default function Dashboard({ patients }: DashboardProps) {
  const getPatientStats = (): PatientStats => {
    const today = new Date().toISOString().split('T')[0];
    const thisMonth = new Date().getMonth();
    const lastMonth = thisMonth === 0 ? 11 : thisMonth - 1;
    const currentYear = new Date().getFullYear();

    return {
      today: patients.filter(p => p.visitDate === today).length,
      thisMonth: patients.filter(p => {
        const visitMonth = new Date(p.visitDate).getMonth();
        const visitYear = new Date(p.visitDate).getFullYear();
        return visitMonth === thisMonth && visitYear === currentYear;
      }).length,
      lastMonth: patients.filter(p => {
        const visitMonth = new Date(p.visitDate).getMonth();
        const visitYear = new Date(p.visitDate).getFullYear();
        return visitMonth === lastMonth && (visitYear === currentYear || (lastMonth === 11 && visitYear === currentYear - 1));
      }).length,
      total: patients.length
    };
  };

  const stats = getPatientStats();
  const todayPatients = patients.filter(p => p.visitDate === new Date().toISOString().split('T')[0]);

  const statCards = [
    {
      title: 'Today\'s Visits',
      value: stats.today,
      icon: Activity,
      color: 'bg-emerald-500',
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'This Month',
      value: stats.thisMonth,
      icon: Calendar,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Last Month',
      value: stats.lastMonth,
      icon: TrendingUp,
      color: 'bg-amber-500',
      bgColor: 'bg-amber-50'
    },
    {
      title: 'Total Patients',
      value: stats.total,
      icon: Users,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Overview of your optical clinic</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`${stat.bgColor} rounded-xl p-6 border border-gray-100`}>
              <div className="flex items-center">
                <div className={`${stat.color} rounded-lg p-3 mr-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Today's Patients */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Today's Patients</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {todayPatients.length > 0 ? (
            todayPatients.map((patient) => (
              <div key={patient.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{patient.name}</h3>
                    <p className="text-sm text-gray-600">{patient.mobile}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      L: {patient.leftEyeNumber} | R: {patient.rightEyeNumber}
                    </p>
                    <p className="text-sm text-gray-600">
                      Axis: {patient.axis} | Cyl: {patient.cylindricalNumber}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-8 text-center">
              <p className="text-gray-500">No patients visited today</p>
            </div>
          )}
        </div>
      </div>

      {/* Recent Patients */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recent Patients</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {patients.slice(0, 5).map((patient) => (
            <div key={patient.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{patient.name}</h3>
                  <p className="text-sm text-gray-600">{patient.address}</p>
                  <p className="text-sm text-gray-600">{patient.mobile}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    L: {patient.leftEyeNumber} | R: {patient.rightEyeNumber}
                  </p>
                  <p className="text-sm text-gray-600">
                    Axis: {patient.axis} | Cyl: {patient.cylindricalNumber}
                  </p>
                  <p className="text-xs text-gray-500">
                    Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}