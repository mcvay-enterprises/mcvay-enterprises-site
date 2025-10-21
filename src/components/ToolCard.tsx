import Link from 'next/link';
import { Tool } from '@/data/tools';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 flex flex-col h-full">
      {tool.featured && (
        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-4 self-start">
          Featured
        </span>
      )}
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        <Link href={`/ai-tools/${tool.slug}`} className="hover:text-blue-600 transition-colors">
          {tool.name}
        </Link>
      </h3>
      
      <p className="text-gray-600 mb-4 flex-grow">
        {tool.description}
      </p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {tool.categories.map((category) => (
            <span
              key={category}
              className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded"
            >
              {category}
            </span>
          ))}
        </div>
        
        <div className="flex items-center text-sm text-gray-700 mb-2">
          <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-semibold">{tool.pricing}</span>
        </div>
        
        <div className="flex items-start text-sm text-gray-600">
          <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="line-clamp-2">{tool.complianceNotes}</span>
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-gray-200">
        <Link
          href={`/ai-tools/${tool.slug}`}
          className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
