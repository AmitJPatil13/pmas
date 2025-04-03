import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FileUpload } from './FileUpload';

interface AwardsAndELearningProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export const AwardsAndELearning: React.FC<AwardsAndELearningProps> = ({ formData, handleChange }) => {
  const handleAwardChange = (index: number, field: string, value: string) => {
    const newAwards = [...formData.awards.awardsAndFellowships];
    newAwards[index] = { ...newAwards[index], [field]: value };
    handleChange({
      target: {
        name: 'awards.awardsAndFellowships',
        value: newAwards
      }
    } as any);
  };

  const handleLectureChange = (index: number, field: string, value: string) => {
    const newLectures = [...formData.awards.invitedLectures];
    newLectures[index] = { ...newLectures[index], [field]: value };
    handleChange({
      target: {
        name: 'awards.invitedLectures',
        value: newLectures
      }
    } as any);
  };

  const handleELearningChange = (index: number, field: string, value: string) => {
    const newContent = [...formData.eLearning];
    newContent[index] = { ...newContent[index], [field]: value };
    handleChange({
      target: {
        name: 'eLearning',
        value: newContent
      }
    } as any);
  };

  const addAward = () => {
    handleChange({
      target: {
        name: 'awards.awardsAndFellowships',
        value: [
          ...formData.awards.awardsAndFellowships,
          { title: "", level: "", proofFile: null }
        ]
      }
    } as any);
  };

  const addLecture = () => {
    handleChange({
      target: {
        name: 'awards.invitedLectures',
        value: [
          ...formData.awards.invitedLectures,
          { title: "", eventDetails: "", level: "", certificateFile: null }
        ]
      }
    } as any);
  };

  const addELearningContent = () => {
    handleChange({
      target: {
        name: 'eLearning',
        value: [
          ...formData.eLearning,
          { contentType: "", url: "", platform: "", contentFile: null }
        ]
      }
    } as any);
  };

  return (
    <div className="space-y-12">
      {/* Awards and Fellowships Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Awards and Fellowships</h3>
          <button
            type="button"
            onClick={addAward}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            + Add Award
          </button>
        </div>

        {formData.awards.awardsAndFellowships.map((award: any, index: number) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FormInput
                  label="Award/Fellowship Title"
                  name={`awards.awardsAndFellowships.${index}.title`}
                  required
                  placeholder="Enter award or fellowship title"
                  value={award.title}
                  onChange={(e) => handleAwardChange(index, 'title', e.target.value)}
                />
              </div>

              <FormSelect
                label="Level"
                name={`awards.awardsAndFellowships.${index}.level`}
                required
                value={award.level}
                onChange={(e) => handleAwardChange(index, 'level', e.target.value)}
                options={[
                  { value: "international", label: "International" },
                  { value: "national", label: "National" },
                  { value: "state", label: "State" }
                ]}
              />

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Proof
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

      {/* Invited Lectures Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Invited Lectures</h3>
          <button
            type="button"
            onClick={addLecture}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            + Add Lecture
          </button>
        </div>

        {formData.awards.invitedLectures.map((lecture: any, index: number) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FormInput
                  label="Lecture Title"
                  name={`awards.invitedLectures.${index}.title`}
                  required
                  placeholder="Enter lecture title"
                  value={lecture.title}
                  onChange={(e) => handleLectureChange(index, 'title', e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Enter event details"
                  value={lecture.eventDetails}
                  onChange={(e) => handleLectureChange(index, 'eventDetails', e.target.value)}
                />
              </div>

              <FormSelect
                label="Level"
                name={`awards.invitedLectures.${index}.level`}
                required
                value={lecture.level}
                onChange={(e) => handleLectureChange(index, 'level', e.target.value)}
                options={[
                  { value: "international", label: "International" },
                  { value: "national", label: "National" },
                  { value: "state", label: "State" }
                ]}
              />

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Certificate/Agenda
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

      {/* E-Learning and Digital Contributions Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">E-Learning and Digital Contributions</h3>
          <button
            type="button"
            onClick={addELearningContent}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            + Add Content
          </button>
        </div>

        {formData.eLearning.map((content: any, index: number) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormSelect
                label="Content Type"
                name={`eLearning.${index}.contentType`}
                required
                value={content.contentType}
                onChange={(e) => handleELearningChange(index, 'contentType', e.target.value)}
                options={[
                  { value: "ppt", label: "PPT" },
                  { value: "video", label: "Video" },
                  { value: "quiz", label: "Quiz" },
                  { value: "study_material", label: "Study Material" }
                ]}
              />

              <FormSelect
                label="Platform Used"
                name={`eLearning.${index}.platform`}
                required
                value={content.platform}
                onChange={(e) => handleELearningChange(index, 'platform', e.target.value)}
                options={[
                  { value: "moodle", label: "Moodle" },
                  { value: "google_classroom", label: "Google Classroom" },
                  { value: "microsoft_teams", label: "Microsoft Teams" },
                  { value: "other", label: "Other" }
                ]}
              />

              <div className="sm:col-span-2">
                <FormInput
                  label="Content URL"
                  name={`eLearning.${index}.url`}
                  type="url"
                  placeholder="Enter content URL (if available)"
                  value={content.url}
                  onChange={(e) => handleELearningChange(index, 'url', e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Content
                </label>
                <FileUpload
                  accept=".pdf,.ppt,.pptx,.doc,.docx,.mp4,.zip"
                  maxSize="50MB"
                  description="PDF, PPT, DOC, MP4, or ZIP"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 