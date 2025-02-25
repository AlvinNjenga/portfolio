import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <section id="hero" className='flex font-dm-mono-regular !py-0'>
            <div className="relative">
                <h1 className='text-primaryColor text-lg'>Hi, my name is</h1>
                <h2 className="text-[#ccd6f6] text-[clamp(40px,8vw,80px)] font-extrabold font-sans leading-16 md:my-8 my-4">Alvin Njenga.</h2>
                <div className="text-white text-[clamp(20px,4vw,36px)] flex font-semibold flex-wrap">I&apos;m a&nbsp;
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
                <div className="text-textColor leading-5 font-sans font-medium my-8">
                    I&apos;m a passiontate software developer specializing in crafting efficient and scalable solutions, deliver top notch
                    web and mobile applications and offering freelance services that exceed client expectations. Let&apos;s connect and creating something amazing!
                </div>
                <div
                    className="hover-button justify-self-start !mt-3.5 px-5 py-4 rounded-md font-light border-1 border-primaryColor text-primaryColor font-dm-mono-regular text-[1rem]"
                >
                    Check Out My Resume
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}

export default Hero;