
import React, { useCallback, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { toast } from 'sonner';

const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.type === "text/csv") {
        toast.success(`File "${file.name}" selected successfully`);
      } else {
        toast.error("Please upload a CSV file");
      }
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "text/csv") {
        toast.success(`File "${file.name}" selected successfully`);
      } else {
        toast.error("Please upload a CSV file");
      }
    }
  };

  return (
    <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600">Meeting Memory Agent</h1>
      <p className="text-gray-600 text-lg">
        Upload your meeting transcript CSV file to automatically extract decisions, action items, and follow-ups.
      </p>
      
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          flex flex-col items-center justify-center p-12
          border-2 border-dashed rounded-lg
          ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
          transition-colors duration-200
        `}
      >
        <Upload className="h-12 w-12 text-blue-600 mb-4" />
        <p className="text-lg text-gray-700 mb-2">Drag and drop your file here, or click to browse</p>
        <p className="text-sm text-gray-500">Supports CSV files with timestamp, speaker, and text columns</p>
        
        <Input
          type="file"
          onChange={handleFileUpload}
          accept=".csv"
          className="hidden"
          id="file-upload"
        />
        <label 
          htmlFor="file-upload"
          className="mt-4 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
        >
          Process Transcript
        </label>
      </div>
    </div>
  );
};

export default FileUpload;

