import { languages } from '@/constant';
import Title from './Title';

export default function LanguageSection() {
  return (
    <section>
      <Title>Language</Title>
      <div className="space-y-3">
        {languages.map(language => (
          <div key={language.id} className="*:text-gray-600 *:text-xs print:text-[10px]">
            <h4 className="font-bold !text-gray-900 text-sm mb-2">{language.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
