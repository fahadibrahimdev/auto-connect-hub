import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Manage Your Car in Only a Few Clicks. This is your Handy Vehicle Companion',
    text: 'AutoConnect Hub is an information logging and tracking app for your vehicle, that also lets you connect with dealerships, buyers/sellers, and mechanics for your vehicle.',
}


export const brandFeaturesContent = {
    heading: 'Discover Features',
    features: [
        {
            title: 'List Information',
            description: 'Compile all of your vehicle information and history in one place.',
            icon: 'approved-list'
        },
        {
            title: 'Review History',
            description: 'Review maintenance history before buying a used vehicle.',
            icon: 'budget-file'
        },
        {
            title: 'Track Maintenance',
            description: 'Keep a record of the service history of your car.',
            icon: 'competitive-prices'
        },
        {
            title: 'Receive Alerts',
            description: 'Stay notified of scheduled maintanence runs, and DVLA fees',
            icon: 'bulb-alert'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'AutoConnect Hub aims to be the first app of its kind to have a plethora of features in one app. You not only log information about your car but can also use it to be alerted on maintenance and fees schedules, pay securely, find maintenance shops, and showcase service history of your vehicle for prospective buyers.',
        'The app is designed to be convenient and not just in the concept. Mechanics can directly upload information for their customers on the app so you do not have to worry about updating your vehicle’s profile.',
        'AutoConnect Hub gives you access to a myriad of choices when you are in the market for used cars. Not only do you have to restrict to one dealership or browse around different locations,, you can find vehicles according to your preference in one app. The best part about this is that you can buy one after reviewing a conclusive data base of service history in the profiles of prospective sellers. Once you do sell/buy a car, you can easily transfer or receive  information of the vehicle through the app.'
    ],
}

export const benefitsContent = {
    heading: 'Become Part of a Community',
    text: 'AutoConnect Hub makes it easier for people to connect with specialists for the help they may need on their vehicles. It empowers these specialists to be able to give their business the exposure it may need as well.',
    benefits: [
        {
            title: 'Find Customers',
            description: 'Repair shops can connect with a stream of customers and market the services they offer to prospective clients.',
            icon: 'find-customers'
        },
        {
            title: 'Find Repair Shops',
            description: 'Connect with mechanics and repair shops in your area.',
            icon: 'repair-shop'
        },
        {
            title: 'Pay Via App',
            description: 'Pay DVLA taxes, and any license and registration fees through the app and save yourself the hassle.',
            icon: 'online-pay'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is this app compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I sign up?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Fulfill All Your Vehicle Needs with One App',
    text: 'Sign up to download the app as soon as it launches on the app store.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-Up',
    accent: `Why ${siteName}?`,
    ctaBtn: 'Download App'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
