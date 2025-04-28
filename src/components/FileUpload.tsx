
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { toast } from 'sonner';

const FileUpload = () => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real application, you would handle the file upload here
      toast.success(`File "${file.name}" selected successfully`);
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium">Upload Meeting Files</h3>
      <p className="text-sm text-gray-500">
        Upload meeting transcripts, recordings, or related documents
      </p>
      <div className="flex items-center gap-4">
        <Input
          type="file"
          onChange={handleFileUpload}
          accept=".txt,.doc,.docx,.pdf,.mp3,.mp4"
          className="flex-1"
        />
        <Button variant="outline" size="icon">
          <Upload className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
