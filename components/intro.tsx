import Image from 'next/image'
import authorImage from '../public/images/authors/lorenz.png' // Adjusted the path

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Lorenz Hoover.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a data scientist based in North Carolina, specializing in identifying valuable data sources, automating collection processes, and analyzing large amounts of structured and unstructured data. 
          I build predictive models, apply machine-learning algorithms, and combine them through ensemble modeling to deliver actionable insights. I am also proficient in using data visualization techniques to present findings and collaborate with engineering and product development teams to propose data-driven solutions to complex business challenges.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}  // Ensure you have an image file for yourself here
          alt='Lorenz Hoover'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
