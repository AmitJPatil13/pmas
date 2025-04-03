import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FileUpload } from './FileUpload';

interface CoCurricularActivitiesProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export const CoCurricularActivities: React.FC<CoCurricularActivitiesProps> = ({ formData, handleChange }) => {
  const handleStudentActivityChange = (index: number, field: string, value: string) => {
    const newActivities = [...formData.activities.studentCentric];
    newActivities[index] = { ...newActivities[index], [field]: value };
    handleChange({
      target: {
        name: 'activities.studentCentric',
        value: newActivities
      }
    } as any);
  };

  const handleCommunityEngagementChange = (index: number, field: string, value: string) => {
    const newEngagements = [...formData.activities.communityEngagement];
    newEngagements[index] = { ...newEngagements[index], [field]: value };
    handleChange({
      target: {
        name: 'activities.communityEngagement',
        value: newEngagements
      }
    } as any);
  };

  const handleCulturalSportsChange = (index: number, field: string, value: string) => {
    const newEvents = [...formData.activities.culturalSports];
    newEvents[index] = { ...newEvents[index], [field]: value };
    handleChange({
      target: {
        name: 'activities.culturalSports',
        value: newEvents
      }
    } as any);
  };

  const addStudentActivity = () => {
    handleChange({
      target: {
        name: 'activities.studentCentric',
        value: [
          ...formData.activities.studentCentric,
          { activityType: "", hoursSpent: "", evidence: null }
        ]
      }
    } as any);
  };

  const addCommunityEngagement = () => {
    handleChange({
      target: {
        name: 'activities.communityEngagement',
        value: [
          ...formData.activities.communityEngagement,
          { activityType: "", duration: "", durationUnit: "hours", certificates: null }
        ]
      }
    } as any);
  };

  const addCulturalSports = () => {
    handleChange({
      target: {
        name: 'activities.culturalSports',
        value: [
          ...formData.activities.culturalSports,
          { eventName: "", role: "", documents: null }
        ]
      }
    } as any);
  };

  return (
    <div className="space-y-12">
      {/* Student-Centric Activities */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Student-Centric Activities</h3>
          <button
            type="button"
            onClick={addStudentActivity}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            + Add Activity
          </button>
        </div>

        {formData.activities.studentCentric.map((activity: any, index: number) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormSelect
                label="Activity Type"
                name={`activities.studentCentric.${index}.activityType`}
                required
                value={activity.activityType}
                onChange={(e) => handleStudentActivityChange(index, 'activityType', e.target.value)}
                options={[
                  { value: "remedial", label: "Remedial Classes" },
                  { value: "career", label: "Career Counseling" },
                  { value: "mentoring", label: "Student Mentoring" },
                  { value: "workshop", label: "Student Workshop" },
                  { value: "other", label: "Other" }
                ]}
              />

              <FormInput
                label="Hours Spent"
                name={`activities.studentCentric.${index}.hoursSpent`}
                type="number"
                required
              
                value={activity.hoursSpent}
                onChange={(e) => handleStudentActivityChange(index, 'hoursSpent', e.target.value)}
              />

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Evidence
                </label>
                <FileUpload
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  maxSize="10MB"
                  description="PDF, DOC, or images"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Community Engagement */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Community Engagement</h3>
          <button
            type="button"
            onClick={addCommunityEngagement}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            + Add Engagement
          </button>
        </div>

        {formData.activities.communityEngagement.map((engagement: any, index: number) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormSelect
                label="Activity Type"
                name={`activities.communityEngagement.${index}.activityType`}
                required
                value={engagement.activityType}
                onChange={(e) => handleCommunityEngagementChange(index, 'activityType', e.target.value)}
                options={[
                  { value: "tree_plantation", label: "Tree Plantation" },
                  { value: "blood_donation", label: "Blood Donation Camp" },
                  { value: "cleanliness", label: "Cleanliness Drive" },
                  { value: "awareness", label: "Awareness Campaign" },
                  { value: "other", label: "Other" }
                ]}
              />

              <div className="flex gap-4">
                <FormInput
                  label="Duration"
                  name={`activities.communityEngagement.${index}.duration`}
                  type="number"
                  required
               
                  value={engagement.duration}
                  onChange={(e) => handleCommunityEngagementChange(index, 'duration', e.target.value)}
                  className="flex-1"
                />

                <FormSelect
                  label="Unit"
                  name={`activities.communityEngagement.${index}.durationUnit`}
                  value={engagement.durationUnit}
                  onChange={(e) => handleCommunityEngagementChange(index, 'durationUnit', e.target.value)}
                  options={[
                    { value: "hours", label: "Hours" },
                    { value: "days", label: "Days" }
                  ]}
                  className="w-32"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cultural and Sports Activities */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Cultural and Sports Activities</h3>
          <button
            type="button"
            onClick={addCulturalSports}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            + Add Event
          </button>
        </div>

        {formData.activities.culturalSports.map((event: any, index: number) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormInput
                label="Event Details"
                name={`activities.culturalSports.${index}.eventName`}
                required
                placeholder="Enter event name and details"
                value={event.eventName}
                onChange={(e) => handleCulturalSportsChange(index, 'eventName', e.target.value)}
              />

              <FormSelect
                label="Role"
                name={`activities.culturalSports.${index}.role`}
                required
                value={event.role}
                onChange={(e) => handleCulturalSportsChange(index, 'role', e.target.value)}
                options={[
                  { value: "coordinator", label: "Coordinator" },
                  { value: "organizer", label: "Organizer" },
                  { value: "participant", label: "Participant" },
                  { value: "judge", label: "Judge" },
                  { value: "other", label: "Other" }
                ]}
              />

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Evidence
                </label>
                <FileUpload
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  maxSize="10MB"
                  description="PDF, DOC, or images"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 