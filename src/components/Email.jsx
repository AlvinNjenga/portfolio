const Email = () => {
  return (
    <div className="flex items-center font-dm-mono-regular fixed bottom-40 -right-[7.5rem] text-textColor rotate-90 gap-6 bg-bgColor">
        <a href="mailto:alvinnjenga@gmail.com" className="text-sm hover:text-primaryColor hover:-translate-x-1 transition-transform duration-300 ">
            alvinnjenga@gmail.com
        </a>
        <hr className="border-[2px] w-40 rounded-full" />
    </div>
  )
}

export default Email;