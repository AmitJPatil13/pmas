"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { ProgressSteps } from "./components/ProgressSteps";
import { PersonalDetails } from "./components/PersonalDetails";
import { TeachingProfile } from "./components/TeachingProfile";
import { ResearchProfile } from "./components/ResearchProfile";
import { CoCurricularActivities } from "./components/CoCurricularActivities";
import { AwardsAndELearning } from "./components/AwardsAndELearning";
import { useTeacher } from "@/providers/teacher-provider";
import { saveTeacher } from "@/actions/teachers";
import { toast } from "sonner";

interface Qualification {
  degree: string;
  specialization: string;
  university: string;
  yearOfPassing: string;
  percentage: string;
}

interface Course {
  name: string;
  level: string;
  teachingMode: string;
  periodsAllocated: string;
  periodsEngaged: string;
}

interface Publication {
  title: string;
  journalName: string;
  issnIsbn: string;
  impactFactor: string;
  coAuthors: string;
  proofFile: File | null;
}

interface Project {
  title: string;
  fundingAgency: string;
  grantAmount: string;
  reportFile: File | null;
}

interface Patent {
  title: string;
  status: string;
  certificateFile: File | null;
}

interface StudentCentricActivity {
  activityType: string;
  hoursSpent: string;
  evidence: File | null;
}

interface CommunityEngagement {
  activityType: string;
  duration: string;
  durationUnit: "hours" | "days";
  certificates: File | null;
}

interface CulturalSportsActivity {
  eventName: string;
  role: string;
  documents: File | null;
}

interface Award {
  title: string;
  level: string;
  proofFile: File | null;
}

interface InvitedLecture {
  title: string;
  eventDetails: string;
  level: string;
  certificateFile: File | null;
}

interface ELearningContent {
  contentType: string;
  url: string;
  platform: string;
  contentFile: File | null;
}

interface FormData {
  // Personal Details
  name: string;
  department: string;
  designation: string;
  dateOfLastPromotion: string;
  gradePay: string;
  currentAddress: string;
  permanentAddress: string;
  phoneNumber: string;
  email: string;
  employeeId: string;

  // Academic Qualifications
  qualifications: Qualification[];

  // Additional Information
  languages: string;
  currentAdministrativeRoles: string;

  // Teaching Details
  teachingExperience: string;
  areasOfSpecialization: string;
  currentTeachingLoad: string;
  courses: Course[];
  innovativeTeaching: {
    ictTools: {
      moodle: boolean;
      onlineQuizzes: boolean;
      videoLectures: boolean;
      virtualLabs: boolean;
      other: boolean;
    };
    methodologyDetails: string;
  };
  supervision: {
    hoursSpent: string;
    studentsSupervised: string;
  };

  // Research Profile
  research: {
    publications: Publication[];
    projects: Project[];
    patents: Patent[];
  };

  // Co-curricular Activities
  activities: {
    studentCentric: StudentCentricActivity[];
    communityEngagement: CommunityEngagement[];
    culturalSports: CulturalSportsActivity[];
  };

  // Awards and Recognition
  awards: {
    awardsAndFellowships: Award[];
    invitedLectures: InvitedLecture[];
  };

  // E-Learning and Digital Contributions
  eLearning: ELearningContent[];
}

const steps = [
  { id: "personal", title: "Personal Details" },
  { id: "teaching", title: "Teaching Profile" },
  { id: "research", title: "Research Profile" },
  { id: "activities", title: "Co-Curricular" },
  { id: "awards", title: "Awards & E-Learning" },
];

export default function TeacherOnboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    // Personal Details
    name: "",
    department: "",
    designation: "",
    dateOfLastPromotion: "",
    gradePay: "",
    currentAddress: "",
    permanentAddress: "",
    phoneNumber: "",
    email: "",
    employeeId: "",

    // Academic Qualifications
    qualifications: [
      {
        degree: "",
        specialization: "",
        university: "",
        yearOfPassing: "",
        percentage: "",
      },
    ],

    // Additional Information
    languages: "",
    currentAdministrativeRoles: "",

    // Teaching Details
    teachingExperience: "",
    areasOfSpecialization: "",
    currentTeachingLoad: "",
    courses: [
      {
        name: "",
        level: "",
        teachingMode: "",
        periodsAllocated: "",
        periodsEngaged: "",
      },
    ],
    innovativeTeaching: {
      ictTools: {
        moodle: false,
        onlineQuizzes: false,
        videoLectures: false,
        virtualLabs: false,
        other: false,
      },
      methodologyDetails: "",
    },
    supervision: {
      hoursSpent: "",
      studentsSupervised: "",
    },

    // Research Profile
    research: {
      publications: [
        {
          title: "",
          journalName: "",
          issnIsbn: "",
          impactFactor: "",
          coAuthors: "",
          proofFile: null,
        },
      ],
      projects: [
        {
          title: "",
          fundingAgency: "",
          grantAmount: "",
          reportFile: null,
        },
      ],
      patents: [
        {
          title: "",
          status: "",
          certificateFile: null,
        },
      ],
    },

    // Co-curricular Activities
    activities: {
      studentCentric: [
        {
          activityType: "",
          hoursSpent: "",
          evidence: null,
        },
      ],
      communityEngagement: [
        {
          activityType: "",
          duration: "",
          durationUnit: "hours",
          certificates: null,
        },
      ],
      culturalSports: [
        {
          eventName: "",
          role: "",
          documents: null,
        },
      ],
    },

    // Awards and Recognition
    awards: {
      awardsAndFellowships: [
        {
          title: "",
          level: "",
          proofFile: null,
        },
      ],
      invitedLectures: [
        {
          title: "",
          eventDetails: "",
          level: "",
          certificateFile: null,
        },
      ],
    },

    // E-Learning and Digital Contributions
    eLearning: [
      {
        contentType: "",
        url: "",
        platform: "",
        contentFile: null,
      },
    ],
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === steps.length - 1) {
      // TODO: Save data to backend
      try {
        console.log(formData);
        await saveTeacher(formData);
        toast.success("Profile created successfully!");
        // router.push("/dashboard/teacher");
      } catch (error) {
        console.error("Error saving profile:", error);
        toast.error("Failed to create profile. Please try again.");
      }
      router.push("/dashboard/teacher");
    } else {
      handleNext();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      // Handle nested object updates
      const keys = name.split(".");
      if (keys.length === 1) {
        return { ...prev, [name]: value };
      }

      const newFormData = { ...prev };
      let current: any = newFormData;
      let lastKey = keys.pop()!;
      let currentPath = "";

      for (const key of keys) {
        currentPath = currentPath ? `${currentPath}.${key}` : key;
        if (!(key in current)) {
          throw new Error(`Invalid path: ${currentPath}`);
        }
        current = current[key];
      }

      current[lastKey] = value;
      return newFormData;
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalDetails formData={formData} handleChange={handleChange} />
        );
      case 1:
        return (
          <TeachingProfile formData={formData} handleChange={handleChange} />
        );
      case 2:
        return (
          <ResearchProfile formData={formData} handleChange={handleChange} />
        );
      case 3:
        return (
          <CoCurricularActivities
            formData={formData}
            handleChange={handleChange}
          />
        );
      case 4:
        return (
          <AwardsAndELearning formData={formData} handleChange={handleChange} />
        );
      default:
        return null;
    }
  };

  // const { teacher, setTeacher } = useTeacher();
  // useEffect(() => {
  //   if (teacher) {
  //   }
  // }, [currentStep]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Faculty Onboarding
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Complete your profile to get started with the faculty performance
            monitoring system.
          </p>
        </div>

        {/* Progress Steps */}
        <ProgressSteps steps={steps} currentStep={currentStep} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {steps[currentStep].title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Please fill in your{" "}
                      {steps[currentStep].title.toLowerCase()} to complete your
                      profile
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-xl"
                  >
                    {renderStep()}
                  </motion.div>

                  <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className={`inline-flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-colors
                        ${
                          currentStep === 0
                            ? "invisible"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                    >
                      <svg
                        className="mr-2 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Previous Step
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg text-sm font-medium
                        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                        transition-colors"
                    >
                      {currentStep === steps.length - 1 ? (
                        <>
                          Complete Setup
                          <svg
                            className="ml-2 h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </>
                      ) : (
                        <>
                          Next Step
                          <svg
                            className="ml-2 h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Tips and Help Section */}
          <div className="lg:col-span-1 space-y-6">
            {/* Tips Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-indigo-600 px-6 py-4">
                <h3 className="text-lg font-medium text-white">Tips</h3>
              </div>
              <div className="px-6 py-4">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Provide accurate and up-to-date information
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    All fields marked with * are required
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    You can edit this information later
                  </li>
                </ul>
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Need Help?
                </h3>
              </div>
              <div className="px-6 py-4">
                <p className="text-sm text-gray-600 mb-4">
                  If you're having trouble completing the form or have
                  questions, our support team is here to help.
                </p>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg
                    className="h-5 w-5 text-gray-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
