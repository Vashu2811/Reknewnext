import ReKnewModal from '../model/ReKnewModal';
import HomepageVarticalSlider from './pages/HomepageVarticalSlider';
import Ourservices from './pages/SeirvesSlider';
import SuccessstorySliderSection from './pages/SuccessstorySliderSection';
import FoundersExperience from './pages/FoundersExperience';
import Consultation from './pages/Consultation';

export const metadata = {
    title: 'Home | ReKnew',
    description: 'ReKnew - Empowering your business with innovative solutions. Discover our services, success stories, and expert consultation.',
    keywords: 'ReKnew, business, services, consultation, success stories, founders, innovation',
    openGraph: {
        title: 'Home | ReKnew',
        description: 'Empowering your business with innovative solutions. Discover our services, success stories, and expert consultation.',
        url: 'https://reknew.com/',
        siteName: 'ReKnew',
        images: [
            {
                url: 'https://reknew.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'ReKnew Home Page',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Home | ReKnew',
        description: 'Empowering your business with innovative solutions. Discover our services, success stories, and expert consultation.',
        images: ['https://reknew.com/og-image.jpg'],
    },
};

// Convert to an async server component
const Home = async () => {
    // No useEffect, no client hooks

    return (
        <>
            {/* SSR fallback for meta tags */}
            <head>
                <title>Home | ReKnew</title>
                <meta name="description" content="ReKnew - Empowering your business with innovative solutions. Discover our services, success stories, and expert consultation." />
            </head>
            {/* If you want to show the modal by default, set isOpen to true or false as needed */}
            {/* <ReKnewModal isOpen={false} onClose={() => {}} /> */}
            <div className="text-gray-800 dark:text-gray-100 font-sans w-full min-h-screen overflow-x-hidden">
                {/* Remove Progress Bar (framer-motion is client-only) */}

                <HomepageVarticalSlider />

                {/* Founders Experience Section - Added directly after the slider */}
                <FoundersExperience />

                {/* Main Content */}
                <div className="dark:text-gray-100 flex flex-col overflow-x-hidden">
                    <Ourservices />

                    <SuccessstorySliderSection />

                    <div className="relative overflow-y-hidden overflow-x-hidden">
                        <div className=" flex justify-center items-center relative">
                            <div className="py-[100px]">
                                {/* Remove Suspense (not needed for server components) */}
                                <Consultation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
