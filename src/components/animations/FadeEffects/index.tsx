
import { motion } from "framer-motion"
import { ReactElement } from "react";

const variants = (direction: string) => {
    const directions = {
        leftToRight: { axis: "x", dis: -60 },
        rightToLeft: { axis: "x", dis: +60 },
        topToBottom: { axis: "y", dis: -60 },
        bottomToTop: { axis: "y", dis: +60 }
    }
    const { axis, dis } = directions[direction as keyof typeof directions]
    const animate = {
        initial: {
            opacity: 0,
            [axis]: [dis],
        },
        animate: {
            opacity: 1,
            [axis]: 0,
            transition: {
                duration: 0.8,
            },
        },
    }
    return animate
}


function FadeEffects({ children, direction }: { children: ReactElement, direction: string }) {
    return (
        <motion.div
            initial="initial"      
            animate="animate"
            variants={variants(direction)}
        >
            {children}
        </motion.div>
    )
}

export default FadeEffects