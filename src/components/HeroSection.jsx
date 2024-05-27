import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtyalR Build Tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text block sm:inline">
          {' '}for Developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md mx-3'>
          Start for Free
        </a>
        <a href="#" className='py-2 px-3 border rounded-md mx-3'>
          Documentation 
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
          <source src={video1} type='video/mp4'/>
          Your Browser Does not Support The Video Tag
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
          <source src={video2} type='video/mp4'/>
          Your Browser Does not Support The Video Tag
        </video>
      </div>
    </div>
  )
}

export default HeroSection
