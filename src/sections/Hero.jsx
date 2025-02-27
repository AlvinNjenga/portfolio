import Typewriter from "typewriter-effect";
import FadeInSection from "../components/FadeInSection";

const Hero = () => {
    return (
        <section id="hero" className='flex font-dm-mono-regular !pt-0'>
            <div className="relative">
                <FadeInSection delay={600}>
                    <h1 className='text-primaryColor text-lg'>Hi, my name is</h1>
                </FadeInSection>

                <FadeInSection delay={800}>
                    <h2 className="text-[#ccd6f6] text-[clamp(40px,8vw,80px)] font-extrabold font-sans leading-16 md:my-8 my-4">Alvin Njenga.</h2>
                </FadeInSection>

                <FadeInSection delay={1000}>
                    <div className="text-white text-[clamp(20px,4vw,42px)] flex font-semibold flex-wrap">I&apos;m a&nbsp;
                        <span className="text-primaryColor">
                            <Typewriter
                                options={{
                                    strings: ["software engineer", "full stack developer", "life long student"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>
                </FadeInSection>

                <FadeInSection delay={1200}>
                    <div className="text-textColor text-[clamp(14px,4vw,22px)] font-sans my-8 mb-20">
                        I&apos;m a passionate software developer specializing in crafting efficient and scalable solutions, deliver top notch
                        web and mobile applications and offering freelance services that exceed client expectations. Let&apos;s connect and creating something amazing!
                    </div>
                </FadeInSection>

                <FadeInSection delay={1400}>
                    <div
                        className="hover-button justify-self-start !mt-6.5 px-5 py-4 rounded-md font-light border-1 border-primaryColor text-primaryColor font-dm-mono-regular text-[1rem]"
                    >
                        Check Out My Resume
                    </div>
                </FadeInSection>
            </div>
            <div>

            </div>
        </section>
    )
}

export default Hero;