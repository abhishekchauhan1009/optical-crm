import React, { useState } from 'react';
import { Search, User, Phone, MapPin, Eye } from 'lucide-react';
import { Patient } from '../types';

interface SearchPatientProps {
  patients: Patient[];
}

export default function SearchPatient({ patients }: SearchPatientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredPatients([]);
      return;
    }

    const filtered = patients.filter(patient =>
      patient.name.toLowerCase().includes(query.toLowerCase()) ||
      patient.mobile.includes(query) ||
      patient.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPatients(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Patients</h1>
        <p className="text-gray-600">Find patient records by name, phone, or address</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors text-lg"
            placeholder="Search by name, phone number, or address..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Search Results */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Search Results {filteredPatients.length > 0 && `(${filteredPatients.length})`}
            </h2>
          </div>
          <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
            {searchQuery === '' ? (
              <div className="px-6 py-8 text-center">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Enter a search term to find patients</p>
              </div>
            ) : filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <div
                  key={patient.id}
                  onClick={() => setSelectedPatient(patient)}
                  className={`px-6 py-4 cursor-pointer transition-colors ${
                    selectedPatient?.id === patient.id
                      ? 'bg-sky-50 border-r-4 border-sky-500'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{patient.name}</h3>
                      <p className="text-sm text-gray-600">{patient.mobile}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-8 text-center">
                <p className="text-gray-500">No patients found matching your search</p>
              </div>
            )}
          </div>
        </div>

        {/* Patient Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Patient Details</h2>
          </div>
          <div className="p-6">
            {selectedPatient ? (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <User className="w-5 h-5 text-sky-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Full Name</label>
                    <p className="text-lg text-gray-900">{selectedPatient.name}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600">Mobile Number</label>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-gray-400 mr-2" />
                      <p className="text-lg text-gray-900">{selectedPatient.mobile}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600">Address</label>
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-gray-400 mr-2 mt-1" />
                      <p className="text-lg text-gray-900">{selectedPatient.address}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center mb-4">
                    <Eye className="w-5 h-5 text-sky-500 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Optical Measurements</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="block text-sm font-medium text-gray-600 mb-1">Left Eye Power</label>
                      <p className="text-xl font-semibold text-gray-900">{selectedPatient.leftEyeNumber}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="block text-sm font-medium text-gray-600 mb-1">Right Eye Power</label>
                      <p className="text-xl font-semibold text-gray-900">{selectedPatient.rightEyeNumber}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="block text-sm font-medium text-gray-600 mb-1">Axis</label>
                      <p className="text-xl font-semibold text-gray-900">{selectedPatient.axis}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="block text-sm font-medium text-gray-600 mb-1">Cylindrical Power</label>
                      <p className="text-xl font-semibold text-gray-900">{selectedPatient.cylindricalNumber}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm text-gray-600">
                    <p>Last Visit: {new Date(selectedPatient.lastVisit).toLocaleDateString()}</p>
                    <p>Patient ID: {selectedPatient.id}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Select a patient from the search results to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}