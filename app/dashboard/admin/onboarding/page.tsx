"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminOnboarding() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    employeeId: "",
    department: "",
    contactNumber: "",
    officeLocation: "",
    responsibilities: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save data to backend
    console.log(formData);
    router.push("/dashboard/admin");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-8">
              Complete Administrator Profile
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
                    Administrative Role
                  </label>
                  <select
                    id="designation"
                    name="designation"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={formData.designation}
                    onChange={handleChange}
                  >
                    <option value="">Select Role</option>
                    <option value="dean">Dean</option>
                    <option value="hod">Head of Department</option>
                    <option value="admin">System Administrator</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">
                    Employee ID
                  </label>
                  <input
                    type="text"
                    name="employeeId"
                    id="employeeId"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={formData.employeeId}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                    Department/Division
                  </label>
                  <input
                    type="text"
                    name="department"
                    id="department"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={formData.department}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    id="contactNumber"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="officeLocation" className="block text-sm font-medium text-gray-700">
                    Office Location
                  </label>
                  <input
                    type="text"
                    name="officeLocation"
                    id="officeLocation"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={formData.officeLocation}
                    onChange={handleChange}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-700">
                    Key Responsibilities
                  </label>
                  <textarea
                    name="responsibilities"
                    id="responsibilities"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={formData.responsibilities}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Complete Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 