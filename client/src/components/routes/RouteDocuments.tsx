import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export type RouteDocument = {
  name: string;
  description: string;
  fileUrl: string;
};

interface RouteDocumentsProps {
  documents: RouteDocument[];
  routeName: string;
}

const RouteDocuments = ({ documents, routeName }: RouteDocumentsProps) => {
  if (!documents || documents.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 p-4 bg-[#1A1A1A] rounded-lg border border-gray-800">
      <h3 className="text-lg font-semibold mb-4">Route Documents</h3>
      <p className="text-sm text-[#9CA3AF] mb-4">
        Download these documents for more information about the {routeName} route:
      </p>
      <div className="space-y-3">
        {documents.map((doc, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-[#121212] rounded-lg hover:bg-[#252525] transition-colors duration-200">
            <div>
              <h4 className="text-sm font-medium">{doc.name}</h4>
              <p className="text-xs text-[#9CA3AF]">{doc.description}</p>
            </div>
            <a 
              href={doc.fileUrl} 
              download 
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <Button variant="ghost" size="sm" className="gap-1">
                <FileDown size={16} />
                <span className="text-xs">Download</span>
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteDocuments;