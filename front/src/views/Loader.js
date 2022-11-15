import './Loader.css'
import {delay, motion} from "framer-motion";
import {useState} from "react";


const draw = {
    hidden: {pathLength: 0, opacity: 0},
    visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {delay, type: "spring", duration: 1.2, bounce: 0},
                opacity: {delay, duration: 0.01}
            }
        };
    }
};

export default function Loader() {

    const [replay, setReplay] = useState(true);

    const placeholderText = [
        {type: "heading1", text: "Framer Motion"},
        {
            type: "heading2",
            text: "Animating responsive text!"
        }
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    }



    setTimeout(function () {
        let element = document.getElementById("tot");
        element.classList.add("transi");
    }, 4000);

    setTimeout(function () {
        let element = document.getElementById("tot");
        element.classList.add("delete");
    }, 5000);


    return (
        <>

            <div className={"testing"}
                 id={"tot"}
            >
                <motion.svg
                    width="100vw"
                    height="80vh"
                    viewBox="0 -150 600 600"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.circle
                        cx="110"
                        cy="100"
                        r="80"
                        stroke="#28a9e0"
                        variants={draw}
                        custom={1.5}
                    />
                    <motion.circle
                        cx="295"
                        cy="100"
                        r="80"
                        stroke="#000000"
                        variants={draw}
                        custom={2}
                    />
                    <motion.circle
                        cx="480"
                        cy="100"
                        r="80"
                        stroke="#fd0000"
                        variants={draw}
                        custom={2.5}
                    />
                    <motion.circle
                        cx="200"
                        cy="200"
                        r="80"
                        stroke="#fbec20"
                        variants={draw}
                        custom={3}
                    />
                    <motion.circle
                        cx="390"
                        cy="200"
                        r="80"
                        stroke="#37b348"
                        variants={draw}
                        custom={3.5}
                    />


                </motion.svg>

            </div>
        </>
    );
}
