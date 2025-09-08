import AboutUsInfo from '@/components/aboutUs/AboutUsInfo'
import AboutUsIntro from '@/components/aboutUs/AboutUsIntro'
import AboutUsHero from '@/components/aboutUsHero'
import Clients from '@/components/Clients'
import DanaServices from '@/components/danaServices'
import Footer from '@/components/footer/Index'
import GetInTouch from '@/components/getInTouch'
import JobAccordion from '@/components/jobAccorion'
import DataCenterBanner from '@/components/motion/Banner'
import Navbar from '@/components/navbar'
import OtherBrands from '@/components/otherBrands/Index'
import OurTeam from '@/components/ourTeam'
import TimeLine from '@/components/timeline'

export default async function page() {
  return (
    <div className='bg-black'>
      <Navbar />
      <DataCenterBanner />
      {/* <AboutUsHero /> */}
      <AboutUsInfo />
      <AboutUsIntro />
      <DanaServices hasDiagonal={false} />
      <div className='my-20 flex flex-col gap-10'>
        <Clients DefaultStudio={'venture'} />
        <Clients DefaultStudio={'tech'} />
        <Clients DefaultStudio={'media'} />
      </div>
      <OtherBrands />
      <TimeLine />
      <OurTeam />
      <GetInTouch />
      <JobAccordion />
      {/* <Footer /> */}
    </div>
  )
}
