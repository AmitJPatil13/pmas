import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FileUpload } from './FileUpload';

interface ResearchProfileProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export const ResearchProfile: React.FC<ResearchProfileProps> = ({ formData, handleChange }) => {
  const handlePublicationChange = (index: number, field: string, value: string) => {
    const newPubs = [...formData.research.publications];
    newPubs[index] = { ...newPubs[index], [field]: value };
    handleChange({
      target: {
        name: 'research.publications',
        value: newPubs
      }
    } as any);
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    const newProjects = [...formData.research.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    handleChange({
      target: {
        name: 'research.projects',
        value: newProjects
      }
    } as any);
  };

  const handlePatentChange = (index: number, field: string, value: string) => {
    const newPatents = [...formData.research.patents];
    newPatents[index] = { ...newPatents[index], [field]: value };
    handleChange({
      target: {
        name: 'research.patents',
        value: newPatents
      }
    } as any);
  };

  const addPublication = () => {
    handleChange({
      target: {
        name: 'research.publications',
        value: [
          ...formData.research.publications,
          {
            title: "",
            journalName: "",
            issnIsbn: "",
            impactFactor: "",
            coAuthors: "",
            proofFile: null
          }
        ]
      }
    } as any);
  };

  const addProject = () => {
    handleChange({
      target: {
        name: 'research.projects',
        value: [
          ...formData.research.projects,
          {
            title: "",
            fundingAgency: "",
            grantAmount: "",
            reportFile: null
          }
        ]
      }
    } as any);
  };

  const addPatent = () => {
    handleChange({
      target: {
        name: 'research.patents',
        value: [
          ...formData.research.patents,
          {
            title: "",
            status: "",
            certificateFile: null
          }
        ]
      }
    } as any);
  };

  return (
    <div className="space-y-12">
      {/* Publications Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Publications</h3>
          <button
            type="button"
            onClick={addPublication}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            + Add Publication
          </button>
        </div>

        {formData.research.publications.map((pub: any, index: number) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FormInput
                  label="Paper Title"
                  name={`research.publications.${index}.title`}
                  required
                  placeholder="Enter paper title"
                  value={pub.title}
                  onChange={(e) => handlePublicationChange(index, 'title', e.target.value)}
                />
              </div>

              <FormInput
                label="Journal Name"
                name={`research.publications.${index}.journalName`}
                required
                placeholder="Enter journal name"
                value={pub.journalName}
                onChange={(e) => handlePublicationChange(index, 'journalName', e.target.value)}
              />

              <FormInput
                label="ISSN/ISBN Number"
                name={`research.publications.${index}.issnIsbn`}
                required
                placeholder="Enter ISSN/ISBN number"
                value={pub.issnIsbn}
                onChange={(e) => handlePublicationChange(index, 'issnIsbn', e.target.value)}
              />

              <FormInput
                label="Impact Factor"
                name={`research.publications.${index}.impactFactor`}
                type="number"
                placeholder="Enter impact factor"
                value={pub.impactFactor}
                onChange={(e) => handlePublicationChange(index, 'impactFactor', e.target.value)}
              />

              <FormInput
                label="Number of Co-authors"
                name={`research.publications.${index}.coAuthors`}
                type="number"
                required
                placeholder="Enter number of co-authors"
                value={pub.coAuthors}
                onChange={(e) => handlePublicationChange(index, 'coAuthors', e.target.value)}
              />

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Publication Proof
                </label>
                <FileUpload
                  accept=".pdf,.doc,.docx"
                  maxSize="10MB"
                  description="PDF or DOC"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Research Projects Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Research Projects</h3>
          <button
            type="button"
            onClick={addProject}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            + Add Project
          </button>
        </div>

        {formData.research.projects.map((project: any, index: number) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FormInput
                  label="Project Title"
                  name={`research.projects.${index}.title`}
                  required
                  placeholder="Enter project title"
                  value={project.title}
                  onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                />
              </div>

              <FormInput
                label="Funding Agency"
                name={`research.projects.${index}.fundingAgency`}
                required
                placeholder="Enter funding agency"
                value={project.fundingAgency}
                onChange={(e) => handleProjectChange(index, 'fundingAgency', e.target.value)}
              />

              <FormInput
                label="Grant Amount (₹)"
                name={`research.projects.${index}.grantAmount`}
                type="number"
                required
                placeholder="Enter grant amount"
                value={project.grantAmount}
                onChange={(e) => handleProjectChange(index, 'grantAmount', e.target.value)}
              />

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Project Report
                </label>
                <FileUpload
                  accept=".pdf,.doc,.docx"
                  maxSize="10MB"
                  description="PDF or DOC"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Patents Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Patents and Innovations</h3>
          <button
            type="button"
            onClick={addPatent}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            + Add Patent
          </button>
        </div>

        {formData.research.patents.map((patent: any, index: number) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg mb-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FormInput
                  label="Patent Title"
                  name={`research.patents.${index}.title`}
                  required
                  placeholder="Enter patent title"
                  value={patent.title}
                  onChange={(e) => handlePatentChange(index, 'title', e.target.value)}
                />
              </div>

              <FormSelect
                label="Status"
                name={`research.patents.${index}.status`}
                required
                value={patent.status}
                onChange={(e) => handlePatentChange(index, 'status', e.target.value)}
                options={[
                  { value: "filed", label: "Filed" },
                  { value: "granted", label: "Granted" }
                ]}
              />

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Patent Certificate
                </label>
                <FileUpload
                  accept=".pdf,.doc,.docx"
                  maxSize="10MB"
                  description="PDF or DOC"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 