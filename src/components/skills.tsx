import { SKILLS } from '@/constants';
import { Text } from './ui/text';

export function Skills() {
  return (
    <div className="flex flex-col gap-8 px-4 py-2 mb-6 border-b border-b-neutral-300">
      <Text variant="h6" className="text-2xl tracking-wider font-semibold">
        I can help you with ...
      </Text>
      <div className="flex justify-between flex-wrap gap-4 mb-4">
        {SKILLS.map((skill, index) => (
          <div key={index} className="w-72 border-l-2 px-4 py-2">
            <div className='flex flex-col gap-4'>
              <Text variant="h4" className="tracking-wide text-gray-500/60">
                {String(index + 1).padStart(2, '0')}
              </Text>
              <div className="flex flex-col gap-2">
                <Text variant="body-sr" className="text-xl tracking-wider">
                  {skill.title}
                </Text>
                <Text variant="body-esr" className="text-justify leading-4 tracking-wider">
                  {skill.description}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
