import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LetterEditor } from './components/LetterEditor';
import { TemplateId } from './types/letter';

export function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId | null>(null);

  return (
    <div className="min-h-screen bg-slate-100 font-sans antialiased text-slate-800">
      {selectedTemplate ? (
        <LetterEditor
          templateId={selectedTemplate}
          onBack={() => setSelectedTemplate(null)}
        />
      ) : (
        <Dashboard onSelectTemplate={(id) => setSelectedTemplate(id)} />
      )}
    </div>
  );
}

export default App;
