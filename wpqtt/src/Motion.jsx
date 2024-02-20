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
                        <h1>WPQTT</h1>
                    </motion.div>
                )}
            </AnimatePresence>
            {showHomePage && <Home />}
        </div>
    );
};

export default Motion;
