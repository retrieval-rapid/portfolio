import { Text } from '@/components/ui/text';
import { FAQ_LIST } from '@/constants';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export function FAQS() {
  return (
    <div className="flex flex-wrap justify-between items-start px-4 py-2 mb-6 border-b border-b-neutral-300">
      <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center px-4 py-2">
        <Text variant="h6" className="tracking-wider leading-relaxed">
          My way of getting things <br />
          done
        </Text>
        <Text variant="body-sr" className="tracking-wider text-justify">
          Fast and transparent, the path to owning a website that will represent your brand in the
          best of light is only 4 weeks away. Standing by the Waterfall methodology, I assure a step
          by step completion of the whole process.
        </Text>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center px-4 py-2">
        {FAQ_LIST?.map((faq, index) => (
          <Disclosure key={index}>
            <DisclosureButton className="group flex items-center gap-2">
              <Text variant="body-ls" className='text-left'>{faq.query}</Text>
              <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel>
              <Text variant="body-sr" className="tracking-wider text-justify">
                {faq.response}
              </Text>
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
