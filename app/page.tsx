import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import ContactForm from '@/components/contact-form'

export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentPosts />
        <RecentProjects />

        {/* Removed NewsletterForm */}
        {/* ContactForm is now at the bottom */}
        <ContactForm /> 
      </div>
    </section>
  )
}
