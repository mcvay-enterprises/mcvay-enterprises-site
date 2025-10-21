'use client';

import { useState, useMemo } from 'react';
import { tools } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import Filters, { FilterState } from '@/components/Filters';

export default function AIToolsPage() {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    pricing: [],
    compliance: [],
    searchQuery: '',
  });

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      // Search filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesSearch =
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.longDescription.toLowerCase().includes(query) ||
          tool.categories.some((cat) => cat.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.categories.length > 0) {
        const hasMatchingCategory = tool.categories.some((cat) =>
          filters.categories.includes(cat)
        );
        if (!hasMatchingCategory) return false;
      }

      // Pricing filter
      if (filters.pricing.length > 0) {
        const matchesPricing = filters.pricing.some((pricingOption) => {
          if (pricingOption === 'Free tier available') {
            return tool.pricing.toLowerCase().includes('free');
          } else if (pricingOption === 'Starting at $149-499/month') {
            return (
              tool.pricing.includes('$149') ||
              tool.pricing.includes('$199') ||
              tool.pricing.includes('$299') ||
              tool.pricing.includes('$399') ||
              tool.pricing.includes('$449') ||
              tool.pricing.includes('$499')
            );
          } else if (pricingOption === 'Starting at $500-999/month') {
            return (
              tool.pricing.includes('$599') ||
              tool.pricing.includes('$699') ||
              tool.pricing.includes('$799') ||
              tool.pricing.includes('$899') ||
              tool.pricing.includes('$999')
            );
          } else if (pricingOption === 'Enterprise') {
            return (
              tool.pricing.toLowerCase().includes('enterprise') ||
              tool.pricing.toLowerCase().includes('contact') ||
              tool.pricing.includes('$1,') // Catches $1,xxx
            );
          }
          return false;
        });
        if (!matchesPricing) return false;
      }

      // Compliance filter
      if (filters.compliance.length > 0) {
        const hasMatchingCompliance = filters.compliance.some((tag) =>
          tool.complianceNotes.includes(tag)
        );
        if (!hasMatchingCompliance) return false;
      }

      return true;
    });
  }, [filters]);

  const featuredTools = filteredTools.filter((tool) => tool.featured);
  const regularTools = filteredTools.filter((tool) => !tool.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Tools Directory
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover the best AI-powered compliance and automation tools. Filter by
            category, pricing, and compliance frameworks to find the perfect solution
            for your organization.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-80 flex-shrink-0">
            <Filters onFilterChange={setFilters} />
          </aside>

          {/* Tools Grid */}
          <main className="flex-1">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredTools.length}</span> of{' '}
                <span className="font-semibold">{tools.length}</span> tools
              </p>
            </div>

            {/* Featured Tools */}
            {featuredTools.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Featured Tools
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </div>
            )}

            {/* All Tools */}
            {regularTools.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {featuredTools.length > 0 ? 'All Tools' : 'Tools'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regularTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No tools found
                </h3>
                <p className="mt-2 text-gray-600">
                  Try adjusting your filters or search query.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
