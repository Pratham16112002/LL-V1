


const HomeSectionThree = () => {
  return (
    <div className="w-full flex h-screen  aspect-video justify-center py-10 bg-cover"
    
      style={{ backgroundImage: 'url(/home/home_about_us.png)' }}
    >
      <div
        className="w-[90%] md:w-[40%] my-3  aspect-video bg-cover bg-center border-4 border-background rounded-3xl relative overflow-hidden"
        
      > 
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-start py-10 px-6 overflow-y-scroll space-y-9 md:space-y-60  " >

          <div className=" flex flex-[0.90] justify-center ">
          <h3 className="text-4xl md:text-5xl font-bold  text-background">
            About us
          </h3>
          </div>
          <p className="text-center text-white mx-2  md:mx-12  text-sm md:text-md leading-relaxed flex flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quos eos, eligendi
            dicta ratione officia totam, deleniti, animi natus quasi neque provident dolore
            molestiae facere adipisci Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores mollitia quam odio, autem animi neque excepturi eum laudantium, porro totam repellendus nobis aut nisi repudiandae ducimus. Omnis natus sit pariatur!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed provident dicta.
          </p>

        </div>
      </div>
    </div>
  );
};

export default HomeSectionThree;
