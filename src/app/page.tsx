import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'



const perks = [
  {
    name: "Instant Download",
    description: "Download your purchased assets instantly after payment.",
    icon: ArrowDownToLine,
  },
  {
    name: "Guaranteed Quality",
    description:
      "Worried about the quality of a product? We offer a 30 day money back guarantee.",
    icon: CheckCircle,
  },
  {
    name: "Climate Friendly",
    description: "We have pledged 5% of our profits to climate change related charities.",
    icon: Leaf,
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl'>
            Your marketplace for high quality{" "}
            <span className='text-blue-500'>digital assets</span>.
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Welcome to Dylan Market. Every asset on our platform is verified by
            our team to ensure our minimum quality standard.
          </p>
          <div className='flex flex-col sm:flex-row mt-6 gap-4'>
            <Link className={buttonVariants()} href='/products'>
              {" "}
              Browse Trending
            </Link>
            <Button>Our quality promise &rarr;</Button>
          </div>
        </div>
        {/* TODO: List products */}
      </MaxWidthWrapper>
      <section className='border-t border-slate-200 bg-slate-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
              >
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    <perk.icon className='w-1/3 h-1/3 text-blue-500' />
                  </div>
                </div>
                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6  '>
                  <h3 className='text-slate-900 text-base font-medium'>
                    {perk.name}
                  </h3>
                </div>
                <p className='mt-3 text-sm text-center text-muted-foreground'>
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
