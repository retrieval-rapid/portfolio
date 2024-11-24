import { SOCIAL_LINKS } from '@/data/links';
import { Text } from './ui/text';
import Link from 'next/link';
import { Button } from './ui/button';
export function Footer() {
  return (
    <div className="px-4 py-2">
      <div className="grid grid-cols-5 mb-6">
        <div className="col-span-5 md:col-span-4">
          <Text variant="h4" className="text-3xl tracking-wider leading-loose text-justify">
            Let’s talk about a <br /> project, <br /> collaboration or an <br /> idea you may have
          </Text>
        </div>
        <div className="col-span-5 md:col-span-1 flex">
          <div className="self-end mx-auto">
            <Button
              variant="default"
              className="relative !bg-black text-white rounded-3xl pr-8 mt-5"
            >
              <Text variant="body-esr" className="tracking-wider">
                Drop me line
              </Text>
              <span className="animate-pulse bg-white rounded-full size-2 absolute right-2 top-1/2 -translate-y-1/2"></span>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <Text variant="body-esr" className="tracking-wider text-center">
          &copy;
          <span className="px-1 text-lg bg-gradient-to-r from-slate-400 to-gray-900 bg-clip-text text-transparent">
            {new Date().getFullYear()}
          </span>
          | All Rights Reserved &reg;
        </Text>

        <div className="flex flex-wrap justify-between items-center gap-16">
          {SOCIAL_LINKS.map((link, index) => (
            <Link key={index} href={link.href}>
              <Text variant="body-esr" className="tracking-wider">
                {link.text}
              </Text>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
