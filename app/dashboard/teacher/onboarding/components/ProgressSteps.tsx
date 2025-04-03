import { CheckIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

interface Step {
  id: string;
  title: string;
}

interface ProgressStepsProps {
  steps: Step[];
  currentStep: number;
}

export function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  return (
    <div className="mb-12 pt-10">
      {/* Progress Bar */}
      <div className="relative">
        {/* Background and Progress Lines */}
        <div className="absolute left-0 top-5 h-1 w-full -translate-y-1/2">
          <div className="absolute inset-0 bg-gray-200 rounded-full" />
          <div
            className="absolute inset-0 bg-indigo-600 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            
            return (
              <div
                key={step.id}
                className="flex flex-col items-center relative"
              >
                <motion.div
                  initial={false}
                  animate={{
                    scale: isCurrent ? 1.2 : 1,
                    backgroundColor: isCompleted || isCurrent ? '#4F46E5' : '#E5E7EB'
                  }}
                  className={`relative flex h-10 w-10 items-center justify-center rounded-full
                    shadow-md transition-all duration-200 z-10
                    ${isCompleted || isCurrent ? 'ring-4 ring-indigo-100' : ''}`}
                >
                  {isCompleted ? (
                    <CheckIcon className="h-6 w-6 text-white" />
                  ) : (
                    <span className={`text-sm font-semibold ${isCurrent ? 'text-white' : 'text-gray-600'}`}>
                      {index + 1}
                    </span>
                  )}
                  
                  {/* Hover Card */}
                  <div className="absolute bottom-full left-1/2 mb-3 -translate-x-1/2">
                    <div
                      className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium
                        transition-all duration-200
                        ${isCurrent 
                          ? 'bg-indigo-600 text-white shadow-lg'
                          : 'bg-white text-gray-600 opacity-0 group-hover:opacity-100'}`}
                    >
                      {step.title}
                    </div>
                    {isCurrent && (
                      <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-indigo-600" />
                    )}
                  </div>
                </motion.div>
                
                <motion.span
                  initial={false}
                  animate={{
                    color: isCompleted || isCurrent ? '#4F46E5' : '#6B7280'
                  }}
                  className={`mt-4 text-sm font-medium transition-colors duration-200
                    ${isCompleted || isCurrent ? 'text-indigo-600' : 'text-gray-500'}`}
                >
                  {step.title}
                </motion.span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Step Description */}
      <div className="text-center mt-8">
        <motion.p
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-gray-600"
        >
          Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
        </motion.p>
      </div>
    </div>
  );
} 