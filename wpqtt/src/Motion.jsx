import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Home'; 

const Motion = () => {
    const [showHomePage, setShowHomePage] = useState(false);

    const logoAnimationVariants = {
        initial: { scale: 1 },
        animate: { scale: 10, transition: { duration: 1.5 } }
    };

    return (
        <div>
            <AnimatePresence>
                {!showHomePage && (
                    <motion.div 
                        initial="initial"
                        animate="animate"
                        variants={logoAnimationVariants}
                        onAnimationComplete={() => setShowHomePage(true)}
                    >
                        {/* <img src="your_logo_path" alt="Company Logo" /> */}
                        <div class="flex items-center justify-center h-screen ">
                        <h1 className='text-center text-5xl bold align-middle text-white md:text-3xl'>WPQTT</h1>
                        </div>
                       
                    </motion.div>
                )}
            </AnimatePresence>
            {showHomePage && <Home />}
        </div>
    );
};

export default Motion;
