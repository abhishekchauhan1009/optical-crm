import { Patient } from '../types';

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'John Smith',
    address: '123 Main St, Springfield, IL',
    mobile: '+1-555-0123',
    leftEyeNumber: '-2.25',
    rightEyeNumber: '-1.75',
    axis: '90°',
    cylindricalNumber: '-0.50',
    visitDate: new Date().toISOString().split('T')[0],
    lastVisit: new Date().toISOString().split('T')[0]
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    address: '456 Oak Ave, Springfield, IL',
    mobile: '+1-555-0124',
    leftEyeNumber: '-1.50',
    rightEyeNumber: '-1.25',
    axis: '180°',
    cylindricalNumber: '-0.75',
    visitDate: new Date().toISOString().split('T')[0],
    lastVisit: new Date().toISOString().split('T')[0]
  },
  {
    id: '3',
    name: 'Michael Brown',
    address: '789 Pine Rd, Springfield, IL',
    mobile: '+1-555-0125',
    leftEyeNumber: '-3.00',
    rightEyeNumber: '-2.50',
    axis: '45°',
    cylindricalNumber: '-1.00',
    visitDate: new Date(Date.now() - 86400000).toISOString().split('T')[0], // Yesterday
    lastVisit: new Date(Date.now() - 86400000).toISOString().split('T')[0]
  },
  {
    id: '4',
    name: 'Emily Davis',
    address: '321 Elm St, Springfield, IL',
    mobile: '+1-555-0126',
    leftEyeNumber: '-0.75',
    rightEyeNumber: '-1.00',
    axis: '120°',
    cylindricalNumber: '-0.25',
    visitDate: new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0], // Last week
    lastVisit: new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0]
  },
  {
    id: '5',
    name: 'Robert Wilson',
    address: '654 Maple Dr, Springfield, IL',
    mobile: '+1-555-0127',
    leftEyeNumber: '-4.25',
    rightEyeNumber: '-3.75',
    axis: '75°',
    cylindricalNumber: '-1.50',
    visitDate: new Date(Date.now() - 30 * 86400000).toISOString().split('T')[0], // Last month
    lastVisit: new Date(Date.now() - 30 * 86400000).toISOString().split('T')[0]
  }
];