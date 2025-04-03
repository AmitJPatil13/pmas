"use client";
import { useState } from 'react';
import Link from 'next/link';
import {
  UsersIcon,
  ChartBarIcon,
  DocumentChartBarIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  BellIcon,
  ArrowTrendingUpIcon,
  UserPlusIcon,
  DocumentMagnifyingGlassIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

export default function AdminDashboard() {
  const [notifications] = useState([
    { id: 1, type: 'approval', message: '5 new faculty registrations pending approval', time: '30m ago' },
    { id: 2, type: 'report', message: 'Monthly performance reports generated', time: '2h ago' },
    { id: 3, type: 'meeting', message: 'Department review meeting scheduled', time: '1d ago' },
    { id: 4, type: 'alert', message: 'System maintenance scheduled for tonight', time: '1d ago' },
  ]);

  const departmentStats = [
    { name: 'Computer Science', faculty: 25, performance: 85, color: 'bg-blue-500' },
    { name: 'Electronics', faculty: 20, performance: 82, color: 'bg-purple-500' },
    { name: 'Mechanical', faculty: 18, performance: 78, color: 'bg-green-500' },
    { name: 'Civil', faculty: 15, performance: 80, color: 'bg-yellow-500' },
  ];

  const quickStats = [
    { 
      label: 'Total Faculty', 
      value: '125', 
      change: '+5', 
      trend: 'up',
      details: {
        active: 112,
        onLeave: 8,
        new: 5
      }
    },
    { 
      label: 'Pending Reviews', 
      value: '23', 
      change: '-7', 
      trend: 'down',
      details: {
        urgent: 5,
        normal: 18
      }
    },
    { 
      label: 'Average Performance', 
      value: '81%', 
      change: '+2%', 
      trend: 'up',
      details: {
        teaching: '85%',
        research: '78%'
      }
    },
    { 
      label: 'Active Projects', 
      value: '45', 
      change: '+3', 
      trend: 'up',
      details: {
        research: 28,
        development: 17
      }
    },
  ];

  const quickActions = [
    {
      title: 'Faculty Management',
      icon: UsersIcon,
      description: 'Manage faculty profiles and permissions',
      href: '/dashboard/admin/faculty',
      color: 'bg-blue-500',
      badge: '5 new'
    },
    {
      title: 'Performance Review',
      icon: ChartBarIcon,
      description: 'Review and analyze faculty performance',
      href: '/dashboard/admin/performance',
      color: 'bg-green-500',
      badge: '23 pending'
    },
    {
      title: 'Department Overview',
      icon: BuildingLibraryIcon,
      description: 'View department-wise analytics',
      href: '/dashboard/admin/departments',
      color: 'bg-purple-500'
    },
    {
      title: 'Reports & Analytics',
      icon: DocumentChartBarIcon,
      description: 'Generate and view detailed reports',
      href: '/dashboard/admin/reports',
      color: 'bg-indigo-500'
    },
    {
      title: 'Approvals',
      icon: ClipboardDocumentCheckIcon,
      description: 'Review and approve requests',
      href: '/dashboard/admin/approvals',
      color: 'bg-yellow-500',
      badge: '12 pending'
    },
    {
      title: 'System Settings',
      icon: Cog6ToothIcon,
      description: 'Configure system parameters',
      href: '/dashboard/admin/settings',
      color: 'bg-gray-500'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Faculty Review Meeting',
      date: '2024-02-15',
      time: '10:00 AM',
      type: 'meeting',
      department: 'All Departments'
    },
    {
      id: 2,
      title: 'Performance Report Deadline',
      date: '2024-02-20',
      time: '11:59 PM',
      type: 'deadline',
      department: 'Computer Science'
    },
    {
      id: 3,
      title: 'New Faculty Orientation',
      date: '2024-02-25',
      time: '09:00 AM',
      type: 'event',
      department: 'All Departments'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <BellIcon className="h-6 w-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Admin</span>
                  <p className="text-xs text-gray-500">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{stat.label}</h3>
                  <ArrowTrendingUpIcon 
                    className={`h-5 w-5 ${
                      stat.trend === 'up' ? 'text-green-500' : 
                      stat.trend === 'down' ? 'text-red-500' : 
                      'text-gray-500'
                    }`} 
                  />
                </div>
                <div className="mt-2">
                  <div className="flex items-baseline">
                    <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
                    <p className={`ml-2 text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-500' : 
                      stat.trend === 'down' ? 'text-red-500' : 
                      'text-gray-500'
                    }`}>
                      {stat.change}
                    </p>
                  </div>
                  <div className="mt-3 space-y-1">
                    {Object.entries(stat.details).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-500 capitalize">{key}</span>
                        <span className="text-gray-900 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Action Cards */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="relative group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all p-6"
                  >
                    <div className="flex items-center">
                      <div className={`${action.color} rounded-lg p-3`}>
                        <action.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                            {action.title}
                          </h3>
                          {action.badge && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                              {action.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Department Performance */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-6">Department Overview</h2>
              <div className="bg-white shadow rounded-lg">
                <div className="p-6 space-y-6">
                  {departmentStats.map((dept, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-gray-900">{dept.name}</h3>
                        <span className="text-sm text-gray-500">{dept.performance}%</span>
                      </div>
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                        <div
                          style={{ width: `${dept.performance}%` }}
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${dept.color}`}
                        ></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-gray-500">
                        <span>{dept.faculty} Faculty Members</span>
                        <span>{dept.performance >= 80 ? 'Excellent' : 'Good'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Side Content */}
          <div className="space-y-8">
            {/* Notifications */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Notifications</h2>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className={`inline-block h-2 w-2 rounded-full ${
                          notification.type === 'approval' ? 'bg-blue-500' :
                          notification.type === 'report' ? 'bg-green-500' :
                          notification.type === 'meeting' ? 'bg-purple-500' :
                          'bg-yellow-500'
                        }`}></span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-600">{notification.message}</p>
                        <p className="text-xs text-gray-400">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                          <CalendarIcon className="h-6 w-6 text-indigo-600" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{event.title}</p>
                        <div className="mt-1 flex items-center text-xs text-gray-500">
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                          <span className="mx-1">•</span>
                          <span>{event.time}</span>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">{event.department}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}