import { Text } from './text';
import { SKILLS } from '@/data/skills';

export function Skills() {
  return (
    <div className="flex flex-col gap-8 px-4">
      <Text variant="body-sr" className="text-2xl tracking-wider">
        I can help you with ...
      </Text>
      <div className="flex justify-between flex-wrap gap-4">
        {SKILLS.map((skill, index) => (
          <div key={index} className="w-72 border-l-2 px-4 py-2">
            <div className='flex flex-col gap-4'>
              <Text variant="h4" className="tracking-wide text-gray-500/60">
                {String(index + 1).padStart(2, '0')}
              </Text>
              <div className="flex flex-col gap-2">
                <Text variant="body-sr" className="text-xl tracking-wide">
                  {skill.title}
                </Text>
                <Text variant="body-esr" className="text-justify leading-4 tracking-tight">
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
