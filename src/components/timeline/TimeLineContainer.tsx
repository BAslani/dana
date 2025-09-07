import classNames from 'classnames'
import { motion } from 'framer-motion'

type Props = {
  year: number
  currentYear: number
}

const timlineProjects = [
  {
    year: 2021,
    projects: [
      'Blockchainable',
      'Hypogenic',
      'Iran zamin Bank',
      'Circle of Hope',
      'Mintii',
      'Asbran',
      'Alibaba',
    ],
  },
  {
    year: 2022,
    projects: [
      'Tehran Listing',
      'Noobspay',
      'Behkooshan',
      'Golestani Watch',
      'Chaharchoob',
      'Digikala MAG',
    ],
  },
  {
    year: 2023,
    projects: [
      'Innovationtour',
      'Danaai',
      'Pillpal',
      'Bagit',
      'Atrbaran',
      'Mimas',
    ],
  },
  {
    year: 2024,
    projects: [
      'FC Motivate',
      'Mama Mindset',
      'Dubai Listing',
      'Sharax Group',
      'Choopan',
      'Amirzadegan',
      'Tangie Production',
      'Adaptor',
    ],
  },
]

export default function TimeLineContainer({ year, currentYear }: Props) {
  return (
    <div
      key={currentYear}
      className={classNames(
        'flex items-center justify-center gap-3 duration-1000 transition-all',
        +currentYear === year ? 'opacity-100' : 'opacity-0'
      )}
    >
      <motion.div
        key={year}
        initial={{ opacity: 0, transform: 'translatex(-80%)' }}
        animate={{ opacity: 1, transform: 'translatex(0)' }}
        transition={{ duration: 2.4 }}
      >
        <p className='w-10 text-yellow-500 sm:w-14 md:w-28'>{currentYear}</p>
      </motion.div>
      <div className='grow  rounded-3xl border border-gray-600 bg-gray-950 '>
        {/* desktop */}
        <div className='hidden grid-cols-3 grid-rows-3 justify-items-start gap-2  p-[24px] sm:grid md:pl-[40px]'>
          {timlineProjects
            .find((yearProjects) => yearProjects.year === year)
            ?.projects.map((project, idx) => (
              <div key={idx} className='flex items-center gap-2'>
                <motion.div
                  key={year}
                  initial={{
                    opacity: 0,
                    transform: 'translatex(-110%) scale(1.9) skew(10deg)',
                  }}
                  animate={{ opacity: 1, transform: 'translatex(0) scale(1)' }}
                  transition={{ duration: 3.2 }}
                >
                  <span className='text-blue-500'>&#x2B22;</span>
                </motion.div>
                <p className='font-railway text-body-M-2 md:text-body-L-2 lg:text-body-XL-2'>
                  {project}
                </p>
              </div>
            ))}
        </div>
        {/* mobile */}
        <div className='grid grid-cols-1 grid-rows-6 gap-4 justify-self-start py-[24px] pl-[31px] sm:hidden'>
          {timlineProjects
            .find((yearProjects) => yearProjects.year === year)
            ?.projects.map((project, idx) => (
              <div key={idx} className='flex items-center gap-2 '>
                <span className='text-blue-500'>&#x2B22;</span>
                <p className='font-railway text-body-S-2'>{project}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
