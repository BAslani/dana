import { carouselImgs } from './data'

export default function NewTeamSection() {
  return (
    <section id='our_team' className='bg-[#0b3157]'>
      <div className='mx-auto max-w-screen-lg py-16 px-6'>
        {/* Section title */}
        <div className='flex items-center justify-center'>
          <h1 className='mb-12 inline-block border-b border-b-white text-center text-white text-2xl md:text-3xl lg:text-4xl font-semibold'>
            Our <span className='text-blue-400'>Team</span>
          </h1>
        </div>

        {/* Team grid */}
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          {carouselImgs.map((member, idx) => (
            <div
              key={idx}
              className='flex flex-col items-center rounded-2xl bg-white/5 p-6 shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow duration-300'
            >
              {/* Avatar placeholder (optional) */}
              <div className='mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-blue-400 text-[#0b3157] text-2xl font-bold shadow-md'>
                {member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>

              {/* Name + Role */}
              <h3 className='text-lg font-semibold text-white text-center'>
                {member.name}
              </h3>
              <p className='mt-1 text-sm text-gray-300 text-center'>
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
