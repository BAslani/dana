import JobPosition from './jobPositions'

export default function JobAccordion() {
  return (
    <section id='careers' className='relative overflow-hidden'>
      <h1 className='mb-5 text-center text-lg md:text-xl lg:text-2xl text-blue-300'>
        Job position
      </h1>
      <div className=' relative z-10 mx-auto mb-10 flex max-w-screen-lg flex-col gap-4 px-[24px] '>
        <JobPosition title='Frontend Developer'>
          <p className=' pb-5 '>we need a junior Developer in our team .</p>
          <h6 className='mb-2 '>Responsibilities</h6>
          <ul className='space-y-1 pl-8'>
            <li className='flex gap-2'>
              <span>•</span>Design, develop, and maintain innovative features
              based on business needs
            </li>
            <li className='flex gap-2'>
              <span>•</span>Bring our design system to life by implementing
              high-fidelity UI using a modern frontend framework
            </li>
            <li className='flex gap-2'>
              <span>•</span>Ensure high-quality deliverables through CI/CD
              pipelines, tests, and documentation
            </li>
            <li className='flex gap-2'>
              <span>•</span>
              Collaborate with Design, Product Management and Customer Success
              teams to continuously improve the product
            </li>
            <li className='flex gap-2'>
              <span>•</span>Support the team by actively participating in
              discussions and reviewing others’ code
            </li>
            <li className='flex gap-2'>
              <span>•</span>Improve team synergy and mentor junior engineers
            </li>
          </ul>
        </JobPosition>
        <JobPosition title='UI/UX Designer'>
          <p className=' pb-5 '>we need a junior Developer in our team .</p>
          <h6 className='mb-2 '>Responsibilities</h6>
          <ul className='space-y-1 pl-8'>
            <li className='flex gap-2'>
              <span>•</span>Design, develop, and maintain innovative features
              based on business needs
            </li>
            <li className='flex gap-2'>
              <span>•</span>Bring our design system to life by implementing
              high-fidelity UI using a modern frontend framework
            </li>
            <li className='flex gap-2'>
              <span>•</span>Ensure high-quality deliverables through CI/CD
              pipelines, tests, and documentation
            </li>
            <li className='flex gap-2'>
              <span>•</span>
              Collaborate with Design, Product Management and Customer Success
              teams to continuously improve the product
            </li>
            <li className='flex gap-2'>
              <span>•</span>Support the team by actively participating in
              discussions and reviewing others’ code
            </li>
            <li className='flex gap-2'>
              <span>•</span>Improve team synergy and mentor junior engineers
            </li>
          </ul>
        </JobPosition>
        <JobPosition title='Backend Intern'>
          <p className=' pb-5 '>we need a junior Developer in our team .</p>
          <h6 className='mb-2 '>Responsibilities</h6>
          <ul className='space-y-1 pl-8'>
            <li className='flex gap-2'>
              <span>•</span>Design, develop, and maintain innovative features
              based on business needs
            </li>
            <li className='flex gap-2'>
              <span>•</span>Bring our design system to life by implementing
              high-fidelity UI using a modern frontend framework
            </li>
            <li className='flex gap-2'>
              <span>•</span>Ensure high-quality deliverables through CI/CD
              pipelines, tests, and documentation
            </li>
            <li className='flex gap-2'>
              <span>•</span>
              Collaborate with Design, Product Management and Customer Success
              teams to continuously improve the product
            </li>
            <li className='flex gap-2'>
              <span>•</span>Support the team by actively participating in
              discussions and reviewing others’ code
            </li>
            <li className='flex gap-2'>
              <span>•</span>Improve team synergy and mentor junior engineers
            </li>
          </ul>
        </JobPosition>
      </div>
    </section>
  )
}
