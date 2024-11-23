import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex justify-start items-center gap-2">
      <Image src="/assets/solid-star.png" alt="solid-star" width={100} height={100} 
      className='size-8'/>
      <h4 className='text-lg  capitalize tracking-wider font-semibold'>
        HY
      </h4>
    </div>
  );
};

export default Logo;
