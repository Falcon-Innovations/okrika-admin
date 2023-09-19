import {ChevronRight} from 'lucide-react';
import {CustomButton} from '@/shared/CustomButton';
import {Accordion} from './accordion';


const FAQs = [
    {
        title: 'What is camsol?',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam quasi reprehenderit eos, dolorem animi et totam provident! Exercitationem a omnis quasi incidunt numquam vitae, porro architecto! Deserunt, laudantium nihil.'
    },
    {
        title: 'Why do we use it?',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam quasi reprehenderit eos, dolorem animi et totam provident! Exercitationem a omnis quasi incidunt numquam vitae, porro architecto! Deserunt, laudantium nihil.'
    },
    {
        title: 'Cover abroad range of intent?',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam quasi reprehenderit eos, dolorem animi et totam provident! Exercitationem a omnis quasi incidunt numquam vitae, porro architecto! Deserunt, laudantium nihil.'
    },
    {
        title: 'How can I join the platform?',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam quasi reprehenderit eos, dolorem animi et totam provident! Exercitationem a omnis quasi incidunt numquam vitae, porro architecto! Deserunt, laudantium nihil.'
    },
    {
        title: 'How do you earn points?',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam quasi reprehenderit eos, dolorem animi et totam provident! Exercitationem a omnis quasi incidunt numquam vitae, porro architecto! Deserunt, laudantium nihil.'
    }
]


const SubscribeNewsLetter = () => {
    return (
        <div className="px-4 sm:px-24">
            <section className='px-4 py-6 sm:px-8 sm:py-12 text-white flex flex-col bg-deluge-900 sm:flex-row items-center w-full mx-auto rounded-2xl -mt-16 shadow-2xl'>
                <div className='w-full sm:w-1/2'>
                    <h3 className="text-[20px] sm:text-2xl font-bold capitalize mb-6 sm:mb-2">
                        Join our
                        <br className='block sm:hidden' />
                        <span className="text-deluge-200">{" "}Slack</span>
                    </h3>
                    <p className='text-neutral-200 hidden sm:block'>
                        Stay updated, with the latest rewards, workshops, events, challenges and much more
                    </p>
                </div>
                <div className='w-full rounded-2xl flex items-center justify-center py-1.5 px-2 sm:py-3 sm:px-[14px] bg-white sm:w-1/2'>
                    <div className='flex items-baseline justify-between w-full space-x-4'>
                        <input
                            type="email"
                            placeholder='Enter your email address'
                            className='focus:ring-transparent p-2 text-sm focus:border-none rounded-md border-none w-full outline-none block bg-transparent text-black'
                        />
                        <div className=''>
                            <CustomButton
                                label='Join'
                                iconAfter={<ChevronRight color="white" size={20} />}
                                classNames='bg-deluge-900 rounded-2xl py-3'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export const Faq = () => {
    return (
        <div>
            <section className='bg-black px-4 sm:px-24 pt-16 pb-24 mt-6 text-white'>
                <h3 className="font-bold text-center text-3xl capitalize mb-16">frequently asked {" "}
                    <span className="text-deluge-600 capitalize">questions</span>
                </h3>
                <div className="flex flex-col w-full space-y-8 mb-2">
                    {
                        FAQs?.map((faq, index) => (
                            <Accordion
                                key={faq.title}
                                {...faq}
                            />
                        ))
                    }
                </div>
            </section>
            <SubscribeNewsLetter />
        </div>
    )
}
