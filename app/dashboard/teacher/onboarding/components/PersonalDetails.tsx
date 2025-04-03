interface PersonalDetailsProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export function PersonalDetails({ formData, handleChange }: PersonalDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Personal Information */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="department"
            required
            value={formData.department}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Designation <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="designation"
            required
            value={formData.designation}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Employee ID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="employeeId"
            required
            value={formData.employeeId}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Last Promotion
          </label>
          <input
            type="date"
            name="dateOfLastPromotion"
            value={formData.dateOfLastPromotion}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Grade Pay
          </label>
          <input
            type="text"
            name="gradePay"
            value={formData.gradePay}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Address <span className="text-red-500">*</span>
          </label>
          <textarea
            name="currentAddress"
            required
            rows={3}
            value={formData.currentAddress}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Permanent Address
          </label>
          <textarea
            name="permanentAddress"
            rows={3}
            value={formData.permanentAddress}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Academic Qualifications */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Academic Qualifications</h3>
          <button
            type="button"
            onClick={() => {
              const newQualifications = [...formData.qualifications, {
                degree: "",
                specialization: "",
                university: "",
                yearOfPassing: "",
                percentage: ""
              }];
              handleChange({
                target: { name: 'qualifications', value: newQualifications }
              } as any);
            }}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            + Add Qualification
          </button>
        </div>

        {formData.qualifications.map((qual: any, index: number) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Degree <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={qual.degree}
                  onChange={(e) => {
                    const newQualifications = [...formData.qualifications];
                    newQualifications[index].degree = e.target.value;
                    handleChange({
                      target: { name: 'qualifications', value: newQualifications }
                    } as any);
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={qual.specialization}
                  onChange={(e) => {
                    const newQualifications = [...formData.qualifications];
                    newQualifications[index].specialization = e.target.value;
                    handleChange({
                      target: { name: 'qualifications', value: newQualifications }
                    } as any);
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  University <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={qual.university}
                  onChange={(e) => {
                    const newQualifications = [...formData.qualifications];
                    newQualifications[index].university = e.target.value;
                    handleChange({
                      target: { name: 'qualifications', value: newQualifications }
                    } as any);
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year of Passing <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  min="1900"
                  max={new Date().getFullYear()}
                  value={qual.yearOfPassing}
                  onChange={(e) => {
                    const newQualifications = [...formData.qualifications];
                    newQualifications[index].yearOfPassing = e.target.value;
                    handleChange({
                      target: { name: 'qualifications', value: newQualifications }
                    } as any);
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Percentage/CGPA <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  step="0.01"
                  min="0"
                  max="100"
                  value={qual.percentage}
                  onChange={(e) => {
                    const newQualifications = [...formData.qualifications];
                    newQualifications[index].percentage = e.target.value;
                    handleChange({
                      target: { name: 'qualifications', value: newQualifications }
                    } as any);
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {index > 0 && (
              <button
                type="button"
                onClick={() => {
                  const newQualifications = formData.qualifications.filter((_: any, i: number) => i !== index);
                  handleChange({
                    target: { name: 'qualifications', value: newQualifications }
                  } as any);
                }}
                className="mt-4 text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Remove Qualification
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Languages Known
          </label>
          <input
            type="text"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            placeholder="e.g., English, Hindi, Marathi"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Administrative Roles
          </label>
          <input
            type="text"
            name="currentAdministrativeRoles"
            value={formData.currentAdministrativeRoles}
            onChange={handleChange}
            placeholder="e.g., HOD, Dean, Committee Member"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
} 