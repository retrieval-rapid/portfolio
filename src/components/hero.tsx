import { Text } from './text';
import Link from 'next/link';
import { Button } from './button';
import { SOCIAL_LINKS } from '@/data/links';

export function Hero() {
  return (
    <div className="flex flex-col justify-center h-96 gap-6 px-4 py-8">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-4">
          <Text variant="h1" className="font-semibold tracking-wider text-lg md:text-4xl lg:text-5xl xl :text-6xl">
            Full Stack <br/> Developer
          </Text>
        </div>
        <div className="flex col-span-5 md:col-span-1 w-2/5 md:w-full">
          <Text variant="body-esr" className="text-justify tracking-normal self-end">
            Specialized in Web Design, UX / UI, Framer, and Front End Development.
          </Text>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-4">
          <Text variant="body-esr" className="tracking-wide leading-5 text-justify">
            I'm helping startups and business owners to make a visual statement through spotless Web
            Design and Development so they can increase brand awareness and sell more.
          </Text>
          <Button variant="default" className="relative bg-black text-white rounded-3xl pr-8 mt-5">
            <Text variant="body-esr">Drop me line</Text>
            <span className="animate-pulse bg-white rounded-full size-2 absolute right-2 top-1/2 -translate-y-1/2"></span>
          </Button>
        </div>
        <div className="col-span-5 md:col-span-1">
          <div className="flex flex-col gap-4">
            <Text
              variant="body-sr"
              className="text-gray-500 tracking-wide underline underline-offset-8"
            >
              Let's get connected
            </Text>
            {SOCIAL_LINKS.map((link, index) => (
              <Link href={link.href} key={index}>
                <span className="text-sm tracking-wide">{link.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
