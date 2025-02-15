import Avatar from '../assets/avatar.png';

const Home = () => {
  return (
    <section id="home" className='w-full flex justify-between items-center flex-wrap-reverse relative'>
        <div className="home-text w-full max-w-[500px]">
            <strong>Hello it&apos;s me</strong>
            <h1>Alvin Njenga</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi doloremque, cum ullam in, minima saepe aut quidem repellendus eveniet iusto quam dolorum quasi optio et nobis error! Optio, sint labore?</p>
            <a href="#summary" className="btn-link">Scroll For Me</a>
        </div>

        <div className="home-img">
            <div className="img-box">
                <img src={Avatar} alt="Avatar" />

                <h2 className='font-bold'>Alvin Njenga<br /><span>Fullstack Developer</span></h2>

                <div className='social'>
                    <a href='#!'>
                        <i className="fab fa-github-alt" aria-hidden="true"></i>
                    </a>
                    <a href='#!'>
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                </div>

                <a href="#!" className='hire-me'>Hire me</a>
            </div>
        </div>
    </section>
  )
}

export default Home;