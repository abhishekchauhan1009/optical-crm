import React, { useState } from 'react';
import { Save, User, MapPin, Phone, Eye } from 'lucide-react';

export default function PatientForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    lensType: '',
    framePrice: '',
    lensPrice: '',
    tax: '',
    rightEye: {
      DV: { sph: '', cyl: '', axis: '', pd: '', va: '' },
      NV: { sph: '', cyl: '', axis: '', pd: '', va: '' },
      ADD: { sph: '', cyl: '', axis: '', pd: '', va: '' }
    },
    leftEye: {
      DV: { sph: '', cyl: '', axis: '', pd: '', va: '' },
      NV: { sph: '', cyl: '', axis: '', pd: '', va: '' },
      ADD: { sph: '', cyl: '', axis: '', pd: '', va: '' }
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (section: 'rightEye' | 'leftEye', row: 'DV' | 'NV' | 'ADD', field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [row]: {
          ...prev[section][row],
          [field]: value
        }
      }
    }));
  };

  const handleBillingChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateTotalPrice = () => {
    const frame = parseFloat(formData.framePrice) || 0;
    const lens = parseFloat(formData.lensPrice) || 0;
    const tax = parseFloat(formData.tax) || 0;
    return (frame + lens + tax).toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Add backend submission logic here
    console.log('Submitting:', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Patient details saved successfully!');
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Patient</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
        {/* Personal Info */}
        <div>
          <label className="block font-medium text-sm mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-medium text-sm mb-1">Mobile Number</label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-medium text-sm mb-1">Address</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </div>

        {/* Optical Measurements */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Optical Measurements</h2>
          <div className="grid grid-cols-6 gap-2 mb-2 font-medium text-sm text-gray-700">
            <div></div>
            <div>SPH</div>
            <div>CYL</div>
            <div>AXIS</div>
            <div>PD</div>
            <div>VA</div>
          </div>

          {/* Right Eye */}
          <h3 className="font-semibold text-gray-800 mb-1">Right Eye (OD)</h3>
          {['DV', 'NV', 'ADD'].map((row) => (
            <div key={`right-${row}`} className="grid grid-cols-6 gap-2 mb-2">
              <div className="text-sm font-medium">{row === 'DV' ? 'Distance Vision' : row === 'NV' ? 'Near Vision' : 'Addition'}</div>
              {['sph', 'cyl', 'axis', 'pd', 'va'].map((field) => (
                <input
                  key={`right-${row}-${field}`}
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                  value={formData.rightEye[row][field]}
                  onChange={(e) => handleChange('rightEye', row as 'DV' | 'NV' | 'ADD', field, e.target.value)}
                />
              ))}
            </div>
          ))}

          {/* Left Eye */}
          <h3 className="font-semibold text-gray-800 mt-4 mb-1">Left Eye (OS)</h3>
          {['DV', 'NV', 'ADD'].map((row) => (
            <div key={`left-${row}`} className="grid grid-cols-6 gap-2 mb-2">
              <div className="text-sm font-medium">{row === 'DV' ? 'Distance Vision' : row === 'NV' ? 'Near Vision' : 'Addition'}</div>
              {['sph', 'cyl', 'axis', 'pd', 'va'].map((field) => (
                <input
                  key={`left-${row}-${field}`}
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                  value={formData.leftEye[row][field]}
                  onChange={(e) => handleChange('leftEye', row as 'DV' | 'NV' | 'ADD', field, e.target.value)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Billing Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lens Type</label>
              <input
                type="text"
                name="lensType"
                value={formData.lensType}
                onChange={(e) => handleBillingChange('lensType', e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Single Vision / Bifocal / Progressive"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Frame Price</label>
              <input
                type="number"
                name="framePrice"
                value={formData.framePrice}
                onChange={(e) => handleBillingChange('framePrice', e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lens Price</label>
              <input
                type="number"
                name="lensPrice"
                value={formData.lensPrice}
                onChange={(e) => handleBillingChange('lensPrice', e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tax</label>
              <input
                type="number"
                name="tax"
                value={formData.tax}
                onChange={(e) => handleBillingChange('tax', e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="0"
              />
            </div>
          </div>
          <div className="mt-4 text-right">
            <span className="text-lg font-semibold">Total Price: ₹{calculateTotalPrice()}</span>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : 'Save Patient Details'}
          </button>
        </div>
      </form>
    </div>
  );
}


