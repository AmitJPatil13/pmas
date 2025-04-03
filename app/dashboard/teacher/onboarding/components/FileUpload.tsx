import { Upload } from "lucide-react";

interface FileUploadProps {
  accept?: string;
  maxSize?: string;
  onChange?: (file: File) => void;
  label?: string;
  description?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  maxSize = "10MB",
  onChange,
  label = "Upload file",
  description = "PDF, DOC, or images"
}) => {
  return (
    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
      <div className="space-y-1 text-center">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <div className="flex text-sm text-gray-600">
          <label className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500">
            <span>{label}</span>
            <input 
              type="file" 
              className="sr-only" 
              accept={accept}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file && onChange) {
                  onChange(file);
                }
              }}
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500">{description} up to {maxSize}</p>
      </div>
    </div>
  );
}; 