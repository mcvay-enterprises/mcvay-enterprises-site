'use client';
import { useState } from 'react';

interface FiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  categories: string[];
  pricing: string[];
  compliance: string[];
  searchQuery: string;
}

const CATEGORIES = [
  'Compliance',
  'Audit',
  'Policy Management',
  'Data Privacy',
  'Risk Management',
  'Training',
  'Vendor Management',
  'Incident Response',
  'Access Control',
  'Contract Management',
  'Encryption',
  'Regulatory Intelligence',
  'Backup',
  'Privacy',
  'Platform',
];

const PRICING_OPTIONS = [
  'Free tier available',
  '$49-299/month',
  '$300-699/month',
  'Enterprise',
];

const COMPLIANCE_TAGS = [
  'SOC 2',
  'GDPR',
  'HIPAA',
  'ISO 27001',
  'PCI DSS',
  'CCPA',
  'NIST',
  'FIPS 140-2',
];

export default function Filters({ onFilterChange }: FiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    pricing: [],
    compliance: [],
    searchQuery: '',
  });

  const [showCategoryFilters, setShowCategoryFilters] = useState(true);
  const [showPricingFilters, setShowPricingFilters] = useState(true);
  const [showComplianceFilters, setShowComplianceFilters] = useState(true);

  const handleCheckboxChange = (
    filterType: 'categories' | 'pricing' | 'compliance',
    value: string
  ) => {
    const newFilters = { ...filters };
    const currentValues = newFilters[filterType];

    if (currentValues.includes(value)) {
      newFilters[filterType] = currentValues.filter((v) => v !== value);
    } else {
      newFilters[filterType] = [...currentValues, value];
    }

    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSearchChange = (query: string) => {
    const newFilters = { ...filters, searchQuery: query };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters: FilterState = {
      categories: [],
      pricing: [],
      compliance: [],
      searchQuery: '',
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.pricing.length > 0 ||
    filters.compliance.length > 0 ||
    filters.searchQuery.length > 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Search */}
      <div className="mb-6">
        <label
          className="block text-sm font-semibold text-gray-700 mb-2"
          htmlFor="search"
        >
          Search
        </label>
        <input
          type="text"
          id="search"
          value={filters.searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search tools..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Categories */}
      <div className="mb-6 border-t pt-4">
        <button
          onClick={() => setShowCategoryFilters(!showCategoryFilters)}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <span className="text-sm font-semibold text-gray-700">Category</span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform ${
              showCategoryFilters ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {showCategoryFilters && (
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {CATEGORIES.map((category) => (
              <label
                key={category}
                className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded"
              >
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCheckboxChange('categories', category)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Pricing */}
      <div className="mb-6 border-t pt-4">
        <button
          onClick={() => setShowPricingFilters(!showPricingFilters)}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <span className="text-sm font-semibold text-gray-700">Pricing</span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform ${
              showPricingFilters ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {showPricingFilters && (
          <div className="space-y-2">
            {PRICING_OPTIONS.map((option) => (
              <label
                key={option}
                className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded"
              >
                <input
                  type="checkbox"
                  checked={filters.pricing.includes(option)}
                  onChange={() => handleCheckboxChange('pricing', option)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Compliance Tags */}
      <div className="mb-4 border-t pt-4">
        <button
          onClick={() => setShowComplianceFilters(!showComplianceFilters)}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <span className="text-sm font-semibold text-gray-700">Compliance</span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform ${
              showComplianceFilters ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {showComplianceFilters && (
          <div className="space-y-2">
            {COMPLIANCE_TAGS.map((tag) => (
              <label
                key={tag}
                className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded"
              >
                <input
                  type="checkbox"
                  checked={filters.compliance.includes(tag)}
                  onChange={() => handleCheckboxChange('compliance', tag)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{tag}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
