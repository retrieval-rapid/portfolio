import { DiPostgresql, DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-8">
      <div className="my-20 text-center text-4xl">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className='text-7xl text-white'/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl text-green-500'/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiRedis className='text-7xl text-red-700'/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className='text-7xl text-green-500'/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiPostgresql className='text-7xl text-sky-700'/>
          </div>
        </div>
      </div>
    </div>
  );
}
