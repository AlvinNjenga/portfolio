// TODO: Copy the button on the panel to the left. 

const Contact = () => {
  return (
    <section id="contact" className="!max-w-[600px] flex justify-center items-center text-center flex-col">
        <p className="text-primaryColor text-lg font-dm-mono-regular my-2.5">04. What&apos;s Next?</p>
        <h2 className="text-[clamp(40px,5vw,60px)] font-semibold text-[#ccd6f6] mt-0 mb-5 leading-[1]">Get In Touch</h2>
        <p className="text-textColor text-lg">I&apos;m always on the lookout for new opportunities to grow, challenge myself and provide value so my inbox is always open. Whether you want to work together or just want to say hi, I can&apos;t wait for hear from you!</p>
        <a
            href="mailto:alvinnjenga@gmail.com"
            referrerPolicy="noopener noreferrer"
            target="_blank"
            className="hover-button mt-10 px-7 py-5 rounded-md font-light border-3 border-primaryColor text-primaryColor font-dm-mono-regular text-[1rem]"
        >
            Say Hello!
        </a>
    </section>
  )
}

export default Contact