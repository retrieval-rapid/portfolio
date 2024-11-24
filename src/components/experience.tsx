import { EXPERIENCES } from '@/constants';

export function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((x, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{x.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {x.role} - <span className="text-sm text-purple-100">{x.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{x.description}</p>
              {x.technologies.map((y, index) => (
                <span key={index} className='mr-2 mt-4 rounded-lg bg-neutral-900 px-2 py-4 font-medium text-purple-200'>{y}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
