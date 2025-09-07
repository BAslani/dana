// 'use client'

// import classNames from 'classnames'
// import { AnimatePresence, motion } from 'framer-motion'
// import Image from 'next/image'
// import { useState } from 'react'

// import Condition from '@/utils/Condition'
// import TimeLineContainer from './TimeLineContainer'

// export default function TimeLine() {
//   const [activeYear, setActiveYear] = useState(2024)
//   return (
//     <section className='relative bg-black'>
//       <Image
//         alt='cube'
//         src={'/png/big-colorful-cube.png'}
//         width={91}
//         height={83}
//         className='absolute right-64 top-1/2 size-auto blur-sm'
//       />
//       <Image
//         alt='cube'
//         src={'/png/big-cube-timeline.png'}
//         width={190}
//         height={120}
//         className='absolute top-1/2 hidden sm:top-[68%] sm:block sm:w-[80px] md:w-[110px] lg:w-[140px]'
//       />
//       <div className='mx-auto max-w-screen-lg py-20'>
//         <h1 className='pb-2 text-center font-goldman text-gray-50 sm:text-heading-M-2 md:text-heading-L-2 lg:text-heading-XL-2'>
//           {/* title section */}
//           <div className='mb-12 flex items-center justify-center gap-0 sm:mb-20 md:gap-3'>
//             <p className='text-heading-S-2 md:text-heading-M-1'>
//               <span className='text-blue-500'>Vizhen</span> Timeline
//             </p>
//           </div>
//           {/* flaoting cubes */}
//           <hr className='blur-[1.9px]' />
//           <div className='px-[24px] sm:px-[80px] md:px-[227px] lg:px-[360px]'>
//             <div className='flex h-32 translate-y-[-40%] items-center justify-between overflow-hidden'>
//               {[2021, 2022, 2023, 2024].map((year) => (
//                 <button
//                   onClick={() => {
//                     setActiveYear(() => year)
//                   }}
//                   key={year}
//                   className='flex flex-col'
//                 >
//                   <span
//                     className={classNames(
//                       'transition-all duration-colors-1000 duration-500',
//                       activeYear === year
//                         ? 'text-[80px] relative bottom-[4px] text-blue-500 rotate-180'
//                         : 'text-[50px]'
//                     )}
//                   >
//                     &#x2B22;
//                   </span>
//                   <span className='text-heading-S-5 leading-5 sm:text-heading-M-5 md:text-heading-L-5 lg:text-heading-XL-5'>
//                     {year}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>
//           {/* projects container */}
//           <div className='px-[24px] sm:px-[80px] md:px-[227px] lg:px-[360px]'>
//             <div className=''>
//               {[2021, 2022, 2023, 2024].map((year) => (
//                 <div key={year}>
//                   <Condition>
//                     <Condition.When isTrue={year === activeYear}>
//                       <AnimatePresence>
//                         <motion.div
//                           key={year}
//                           initial={{
//                             opacity: 0,
//                             transform: 'translatex(-20%)',
//                           }}
//                           animate={{ opacity: 1, transform: 'translatex(0)' }}
//                           exit={{ opacity: 0 }}
//                           transition={{ duration: 0.8 }}
//                         >
//                           <TimeLineContainer
//                             year={year}
//                             currentYear={activeYear}
//                           />
//                         </motion.div>
//                       </AnimatePresence>
//                     </Condition.When>
//                   </Condition>
//                 </div>
//               ))}
//             </div>
//             <div></div>
//           </div>
//         </h1>
//       </div>
//     </section>
//   )
// }
