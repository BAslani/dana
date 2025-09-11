import { motion } from 'framer-motion'

type Props = {
  year: number
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

export default function TimeLineContainer({ year }: Props) {
  const projects = timlineProjects.find((p) => p.year === year)?.projects ?? []

  return (
    <motion.div
      key={year}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className='flex flex-col items-center gap-6'
    >
      <p className='text-yellow-500 text-xl md:text-2xl'>{year}</p>

      <div className='w-full rounded-3xl border border-gray-600 p-6'>
        {/* desktop */}
        <div className='hidden sm:grid grid-cols-3 gap-4'>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className='flex items-center gap-2'
            >
              <span className='text-blue-500'>&#x2B22;</span>
              <p className='font-railway text-body-M-2 md:text-body-L-2 lg:text-body-XL-2'>
                {project}
              </p>
            </motion.div>
          ))}
        </div>

        {/* mobile */}
        <div className='grid sm:hidden gap-3'>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className='flex items-center gap-2'
            >
              <span className='text-blue-500'>&#x2B22;</span>
              <p className='font-railway text-body-S-2'>{project}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
