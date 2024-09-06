import Link from 'next/link'

export default function RecentProjects() {
  const projects = [
    { id: 1, title: 'Project 1 (Coming Soon)', description: 'Description for Project 1' },
    { id: 2, title: 'Project 2 (Coming Soon)', description: 'Description for Project 2' }
  ]

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent projects</h2>
        <div>
          {projects.map(project => (
            <div key={project.id} className='mb-6'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        <Link
          href='/projects'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  )
}
