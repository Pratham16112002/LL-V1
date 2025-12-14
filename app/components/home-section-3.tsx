const HomeSectionThree = () => {
  return (
    <div className="h-[1080px] flex w-full  items-center justify-center pt-7 bg-center ">
      <div className="h-[70%] w-[80%]  flex  bg-cover justify-start  border border-foreground rounded-md"
        style={{
          backgroundImage: 'url(/home/home_about_us.png)'
        }}
      >
        <div className="flex flex-1 flex-col items-center gap-12 bg-black/50">

        <div className="flex-1 flex items-end md:items-center">
        <h3 className="text-center flex-1 text-foreground text-4xl md:text-6xl font-bold mb-5">About Us</h3>
        </div>
        <div className="flex-1 flex mx-5 md:mx-8 text-ellipsis mb-5 md:mb-0 ">
        <span className="text-center  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quos eos, eligendi dicta ratione officia totam, deleniti, animi natus quasi neque provident dolore molestiae facere adipisci. Iste consequuntur ut numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias voluptas nulla repudiandae magnam veritatis quas aspernatur fugit ex modi velit laudantium, porro molestiae asperiores tempora commodi? Unde, explicabo non.</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionThree;
