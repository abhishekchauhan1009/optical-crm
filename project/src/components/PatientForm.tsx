import React, { useState } from 'react';
import { Save, User, MapPin, Phone, Eye } from 'lucide-react';
import { Patient } from '../types';

interface PatientFormProps {
  onSave: (patient: Omit<Patient, 'id'>) => void;
}

export default function PatientForm({ onSave }: PatientFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    leftEyeNumber: '',
    rightEyeNumber: '',
    axis: '',
    cylindricalNumber: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate saving
    setTimeout(() => {
      const patient: Omit<Patient, 'id'> = {
        ...formData,
        visitDate: new Date().toISOString().split('T')[0],
        lastVisit: new Date().toISOString().split('T')[0]
      };

      onSave(patient);
      setIsSubmitting(false);
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: '',
        address: '',
        mobile: '',
        leftEyeNumber: '',
        rightEyeNumber: '',
        axis: '',
        cylindricalNumber: ''
      });

      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Patient</h1>
        <p className="text-gray-600">Enter patient information and optical measurements</p>
      </div>

      {showSuccess && (
        <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm font-medium text-emerald-800">
                Patient information saved successfully!
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <User className="w-5 h-5 text-sky-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  placeholder="Enter patient's full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="+1-555-0123"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Enter complete address"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Optical Measurements */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <Eye className="w-5 h-5 text-sky-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Optical Measurements</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="leftEyeNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Left Eye Power *
                  </label>
                  <input
                    type="text"
                    id="leftEyeNumber"
                    name="leftEyeNumber"
                    value={formData.leftEyeNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="-2.25"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="rightEyeNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Right Eye Power *
                  </label>
                  <input
                    type="text"
                    id="rightEyeNumber"
                    name="rightEyeNumber"
                    value={formData.rightEyeNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="-1.75"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="axis" className="block text-sm font-medium text-gray-700 mb-2">
                  Axis *
                </label>
                <input
                  type="text"
                  id="axis"
                  name="axis"
                  value={formData.axis}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  placeholder="90°"
                  required
                />
              </div>

              <div>
                <label htmlFor="cylindricalNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Cylindrical Power *
                </label>
                <input
                  type="text"
                  id="cylindricalNumber"
                  name="cylindricalNumber"
                  value={formData.cylindricalNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  placeholder="-0.50"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5 mr-2" />
                  Save Patient
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}