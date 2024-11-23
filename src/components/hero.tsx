import { HERO_CONTENT } from '@/constants';
import profilePic from '../../public/assets/kevinRushProfile.jpg';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl capitalize">
              rejan bajracharya
            </h1>
            <span className="bg-gradient-to-r from-purple-500 via-slate-500 to-pink-500 text-4xl tracking-tight pb-6 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
            <p className="max-w-lg px-6 py-4 font-light tracking-tighter">{HERO_CONTENT}</p>
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center">
                <Image src={profilePic} alt="profile-pic" />
              </div>
            </div>
          </div>
        </div>{' '}
      </div>
    </div>
  );
}
