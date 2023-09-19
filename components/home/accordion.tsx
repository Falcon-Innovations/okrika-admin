import {Fragment, useState} from 'react';
import {Plus, Minus} from 'lucide-react';
import {motion} from 'framer-motion'

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {type: "spring", stiffness: 300, damping: 24}
    },
    closed: {opacity: 0, y: 20}
};

export const Accordion = ({title, detail}: {
    title: string,
    detail: string
}) => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)


    return (
        <Fragment>
            <div onClick={toggleOpen} className='flex items-center justify-between w-full cursor-pointer'>
                <div className="flex items-center text-white space-x-2">
                    <span className='w-2 h-2 bg-white rounded-full block' />
                    <p className='text-lg'>{title}</p>
                </div>
                {
                    open ? (
                        <button>
                            <Minus className="text-white h-6 w-6" />
                        </button>
                    ) : (
                        <button>
                            <Plus className="text-white h-6 w-6" />
                        </button>
                    )
                }
            </div>
            {
                open ?
                    <motion.div
                        initial={itemVariants['closed']}
                        whileInView={itemVariants['open']}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                    >
                        {detail}
                    </motion.div> : null
            }
        </Fragment>
    )
}
