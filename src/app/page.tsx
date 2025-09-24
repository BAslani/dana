import AboutUsInfo from '@/components/aboutUs/AboutUsInfo'
import AboutUsIntro from '@/components/aboutUs/AboutUsIntro'
import DanaServices from '@/components/danaServices'
import Footer from '@/components/footer/Index'
import DataCenterBanner from '@/components/motion/Banner'
import Navbar from '@/components/navbar'
import NewTeamSection from '@/components/ourTeam/NewTeamSection'

export default async function page() {
  return (
    // <div className='bg-gradient-to-b from-0% to-20% from-black to-[#0b3157]'>
    <div className='bg-[#0b3157]'>
      <Navbar />
      <DataCenterBanner />
      <AboutUsInfo />
      <AboutUsIntro />
      <DanaServices hasDiagonal={false} />
      {/* <div id='experiences' className='my-20 flex flex-col gap-10'>
        <Clients DefaultStudio={'experiences'} />
        <Clients DefaultStudio={'accreditors'} />
        <Clients DefaultStudio={'partnerships'} />
      </div> */}
      {/* <OtherBrands /> */}
      {/* <TimeLine /> */}
      {/* <OurTeam /> */}
      {/* <JobAccordion /> */}
      <NewTeamSection />
      <Footer />
    </div>
  )
}
