const HomeSectionThree = () => {
  return (
    <div className="h-[600px] flex w-full  pt-7 relative">

      {/* LEFT IMAGE */}
      <div className="flex-1 relative">
        <div
          className="bg-cover bg-center size-64 ml-11 absolute"
          style={{
            backgroundImage: "url('/home/live_freely_icon1.png')",
          }}
        ></div>

        {/* Blur Overlay */}
        <div className="absolute top-0 left-0 h-1/2 w-full backdrop-blur-sm z-10"></div>
      </div>

      {/* RIGHT IMAGE (BOTTOM RIGHT) */}
      <div className="flex-1 flex items-end justify-end pb-2 pr-11 relative bg-background">
        <div
          className="bg-bottom absolute -bottom-38 -right-38 size-[600px]  "
          style={{
            backgroundImage: "url('/home/live_freely_icon1.png')",
          }}
        ></div>

        {/* Blur Overlay */}
        <div className="absolute bottom-0 right-0 h-full w-full backdrop-blur-md z-10"></div>
      </div>

      {/* TEXT ABOVE EVERYTHING */}
      <div className="absolute h-[90%] mx-10 z-50  p-6 rounded-lg border border-foreground flex justify-center items-center flex-col">
        <h3 className="text-4xl font-bold text-center mb-20">About Us</h3>
        <p className="text-foreground text-center text-xl leading-8 max-w-[90%] ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus repellat
          accusamus velit vero placeat aliquam, amet labore eos temporibus quo, odit,
          molestiae exercitationem laboriosam necessitatibus qui atque cupiditate
          excepturi error Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium, repudiandae aut inventore similique ducimus impedit id nisi odio est error, optio voluptatibus? Ad eum maxime id facilis, quaerat dolores?.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit cum odit numquam ipsa dignissimos iusto, perferendis obcaecati eligendi sed recusandae alias minus modi vel sequi repellendus? Ex, officia molestiae!
        </p>
      </div>

    </div>
  );
};

export default HomeSectionThree;
