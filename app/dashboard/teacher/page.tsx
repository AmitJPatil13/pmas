"use client";
import { useState } from 'react';
import Link from 'next/link';
import {
  AcademicCapIcon,
  BookOpenIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  TrophyIcon,
  UserCircleIcon,
  BellIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

export default function TeacherDashboard() {
  const [notifications] = useState([
    { id: 1, message: 'Your monthly performance report is ready', time: '1h ago' },
    { id: 2, message: 'New research opportunity available', time: '2h ago' },
    { id: 3, message: 'Reminder: Submit course materials', time: '3h ago' },
  ]);

  const quickStats = [
    { label: 'Teaching Hours', value: '120', change: '+12%', trend: 'up' },
    { label: 'Research Papers', value: '8', change: '+2', trend: 'up' },
    { label: 'Student Feedback', value: '4.8/5', change: '+0.3', trend: 'up' },
    { label: 'Activities', value: '15', change: '+5', trend: 'up' },
  ];

  const quickActions = [
    {
      title: 'Profile',
      icon: UserCircleIcon,
      description: 'View and edit your profile',
      href: '/dashboard/teacher/profile',
      color: 'bg-blue-500'
    },
    {
      title: 'Teaching',
      icon: AcademicCapIcon,
      description: 'Manage courses and materials',
      href: '/dashboard/teacher/teaching',
      color: 'bg-indigo-500'
    },
    {
      title: 'Research',
      icon: BookOpenIcon,
      description: 'Track research activities',
      href: '/dashboard/teacher/research',
      color: 'bg-purple-500'
    },
    {
      title: 'Performance',
      icon: ChartBarIcon,
      description: 'View performance metrics',
      href: '/dashboard/teacher/performance',
      color: 'bg-green-500'
    },
    {
      title: 'Activities',
      icon: ClipboardDocumentListIcon,
      description: 'Manage co-curricular activities',
      href: '/dashboard/teacher/activities',
      color: 'bg-yellow-500'
    },
    {
      title: 'Documents',
      icon: DocumentTextIcon,
      description: 'Access important documents',
      href: '/dashboard/teacher/documents',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <BellIcon className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-3">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                />
                <span className="text-sm font-medium text-gray-700">Dr. John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            {quickStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{stat.label}</h3>
                  <ArrowTrendingUpIcon className="h-5 w-5 text-green-500" />
                </div>
                <div className="mt-2 flex items-baseline">
                  <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="ml-2 text-sm font-medium text-green-500">{stat.change}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Notifications</h2>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
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
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                      {action.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity Timeline */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Recent Activities</h2>
          <div className="bg-white shadow rounded-lg">
            <div className="p-6 space-y-6">
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                      <TrophyIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">Research Paper Published</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Your research paper "AI in Education" has been published in the International Journal.
                    </p>
                    <p className="mt-1 text-xs text-gray-400">2 days ago</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <AcademicCapIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">Course Materials Updated</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Updated lecture materials for "Advanced Database Systems" course.
                    </p>
                    <p className="mt-1 text-xs text-gray-400">4 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 