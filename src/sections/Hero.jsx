import { Button } from "@mantine/core";
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <section id="hero" className='flex overflow-hidden font-dm-mono-regular'>
            <div>
                <h1 className='text-primaryColor text-lg'>Hi, my name is</h1>
                <h2 className="text-[#ccd6f6] text-[4.25rem] font-extrabold font-sans leading-16 my-8">Alvin Njenga.</h2>
                <div className="text-white text-4xl flex font-semibold flex-wrap">I&apos;m a&nbsp;
                    <span className="text-primaryColor">
                        <Typewriter
                            options={{
                                strings: ["software engineer", "full stack developer", "life long student"],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </span>
                </div>
                <div className="text-textColor leading-5 font-sans font-medium my-8">
                    I&apos;m a passiontate software developer specializing in crafting efficient and scalable solutions, deliver top notch
                    web and mobile applications, and freelance services that exceed client expectations. Let&apos;s connect and creating something amazing! 
                </div>
                <Button variant="outline" styles={{ fontWeight: "300!important" }} color="#64FFDA">Check Resume</Button>
            </div>
            <div>

            </div>
        </section>
    )
}

export default Hero;