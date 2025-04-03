interface TeachingProfileProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export function TeachingProfile({ formData, handleChange }: TeachingProfileProps) {
  return (
    <div className="space-y-12">
      {/* Basic Teaching Information */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teaching Experience (in years) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="teachingExperience"
            required
            min="0"
            step="0.5"
            value={formData.teachingExperience}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Areas of Specialization <span className="text-red-500">*</span>
          </label>
          <textarea
            name="areasOfSpecialization"
            required
            rows={3}
            value={formData.areasOfSpecialization}
            onChange={handleChange}
            placeholder="List your areas of specialization"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Teaching Load (hours/week) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="currentTeachingLoad"
            required
            min="0"
            value={formData.currentTeachingLoad}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Courses Taught */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Courses Taught</h3>
          <button
            type="button"
            onClick={() => {
              const newCourses = [...formData.courses, {
                name: "",
                level: "",
                teachingMode: "",
                periodsAllocated: "",
                periodsEngaged: ""
              }];
              handleChange({
                target: { name: 'courses', value: newCourses }
              } as any);
            }}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            + Add Course
          </button>
        </div>

        {formData.courses.map((course: any, index: number) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={course.name}
                  onChange={(e) => {
                    const newCourses = [...formData.courses];
                    newCourses[index].name = e.target.value;
                    handleChange({
                      target: { name: 'courses', value: newCourses }
                    } as any);
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Level <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={course.level}
                  onChange={(e) => {
                    const newCourses = [...formData.courses];
                    newCourses[index].level = e.target.value;
                    handleChange({
                      target: { name: 'courses', value: newCourses }
                    } as any);
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select Level</option>
                  <option value="ug">Undergraduate</option>
                  <option value="pg">Postgraduate</option>
                  <option value="phd">PhD</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teaching Mode <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={course.teachingMode}
                  onChange={(e) => {
                    const newCourses = [...formData.courses];
                    newCourses[index].teachingMode = e.target.value;
                    handleChange({
                      target: { name: 'courses', value: newCourses }
                    } as any);
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select Mode</option>
                  <option value="offline">Offline</option>
                  <option value="online">Online</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Periods Allocated <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={course.periodsAllocated}
                  onChange={(e) => {
                    const newCourses = [...formData.courses];
                    newCourses[index].periodsAllocated = e.target.value;
                    handleChange({
                      target: { name: 'courses', value: newCourses }
                    } as any);
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Periods Engaged <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={course.periodsEngaged}
                  onChange={(e) => {
                    const newCourses = [...formData.courses];
                    newCourses[index].periodsEngaged = e.target.value;
                    handleChange({
                      target: { name: 'courses', value: newCourses }
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
                  const newCourses = formData.courses.filter((_: any, i: number) => i !== index);
                  handleChange({
                    target: { name: 'courses', value: newCourses }
                  } as any);
                }}
                className="mt-4 text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Remove Course
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Innovative Teaching */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-6">Innovative Teaching Methods</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              ICT Tools Used
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.innovativeTeaching.ictTools.moodle}
                  onChange={(e) => {
                    handleChange({
                      target: {
                        name: 'innovativeTeaching.ictTools.moodle',
                        value: e.target.checked
                      }
                    } as any);
                  }}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Moodle</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.innovativeTeaching.ictTools.onlineQuizzes}
                  onChange={(e) => {
                    handleChange({
                      target: {
                        name: 'innovativeTeaching.ictTools.onlineQuizzes',
                        value: e.target.checked
                      }
                    } as any);
                  }}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Online Quizzes</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.innovativeTeaching.ictTools.videoLectures}
                  onChange={(e) => {
                    handleChange({
                      target: {
                        name: 'innovativeTeaching.ictTools.videoLectures',
                        value: e.target.checked
                      }
                    } as any);
                  }}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Video Lectures</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.innovativeTeaching.ictTools.virtualLabs}
                  onChange={(e) => {
                    handleChange({
                      target: {
                        name: 'innovativeTeaching.ictTools.virtualLabs',
                        value: e.target.checked
                      }
                    } as any);
                  }}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Virtual Labs</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Methodology Details
            </label>
            <textarea
              name="innovativeTeaching.methodologyDetails"
              rows={4}
              value={formData.innovativeTeaching.methodologyDetails}
              onChange={handleChange}
              placeholder="Describe your innovative teaching methodologies"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Practical Supervision */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-6">Practical Supervision</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hours Spent on Supervision (per week)
            </label>
            <input
              type="number"
              name="supervision.hoursSpent"
              min="0"
              value={formData.supervision.hoursSpent}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Students Supervised
            </label>
            <input
              type="number"
              name="supervision.studentsSupervised"
              min="0"
              value={formData.supervision.studentsSupervised}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 