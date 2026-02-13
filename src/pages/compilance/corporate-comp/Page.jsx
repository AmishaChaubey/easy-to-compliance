import React from 'react';
import TaxCompliancePage from '../DetailedPage';
import taxComplianceData from './data';

function App() {
  return (
    <div className="App">
      <TaxCompliancePage
        heroData={taxComplianceData.heroData}
        bannerData={taxComplianceData.bannerData}
        tableOfContents={taxComplianceData.tableOfContents}
        services={taxComplianceData.services}
        dueDates={taxComplianceData.dueDates}
        documents={taxComplianceData.documents}
        penalties={taxComplianceData.penalties}
        filingSteps={taxComplianceData.filingSteps}
        faqs={taxComplianceData.faqs}
      />
    </div>
  );
}

export default App;