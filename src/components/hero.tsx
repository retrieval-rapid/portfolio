import { Text } from './ui/text';
import Link from 'next/link';
import { Button } from './ui/button';
import { SOCIAL_LINKS } from '@/constants';

export function Hero() {
  return (
    <div className="container flex flex-col gap-8 px-4 py-2 mb-6 border-b border-b-neutral-300">
      <Text variant="h1" className='tracking-wider'>
        Full Stack <br /> Developer
      </Text>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 lg:col-span-3 xl:col-span-4">
          <Text variant="body-sr" className="font-light tracking-wider leading-loose">
            Specialized in Web Design, UX / UI, Framer, and Front End Development. <br />
            I'm helping startups and business owners to make a visual statement through spotless Web
            Design and Development so they can increase brand awareness and sell more.
          </Text>
          <Button variant="default" className="relative !bg-black text-white rounded-3xl pr-8 mt-5">
            <Text variant="body-esr" className="tracking-wider">
              Drop me line
            </Text>
            <span className="animate-pulse bg-white rounded-full size-2 absolute right-2 top-1/2 -translate-y-1/2"></span>
          </Button>
        </div>
        <div className="col-span-5 lg:col-span-2 xl:col-span-1">
          <div className="flex flex-col gap-4">
            <Text
              variant="body-sr"
              className="text-gray-500 tracking-wider underline underline-offset-8"
            >
              Let's get connected
            </Text>
            {SOCIAL_LINKS.map((link, index) => (
              <Link href={link.href} key={index}>
                <span className="text-sm tracking-wider">{link.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
