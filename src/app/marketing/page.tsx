import Hero from './_components/Hero'
import Marketing from './_components/Marketing'
import MarketingLead from './_components/MarketingLead'
import MarketingCompanies from './_components/MarketingCompanies'
import MarketingWhyChooseUs from './_components/MarketingWhyChooseUs'

export default function MarketingPage() {
    return (
        <div className="bg-wrenixBg min-h-screen">
            <Hero />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                <p className="text-xl md:text-2xl text-wrenixDarkBlue leading-relaxed mb-8">
                    We provide complete digital marketing solutions to take your business to the next level. 
                    Our expert team specializes in delivering measurable results through data-driven 
                    strategies and modern marketing tools. 
                </p>
            </div>
            <Marketing />
            <MarketingLead />
            {/* <MarketingCompanies /> */}
            <MarketingWhyChooseUs />
        </div>
    )
}
