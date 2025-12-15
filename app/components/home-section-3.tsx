


const HomeSectionThree = () => {
  return (
    <div className="w-full flex h-[100vh] justify-center py-10 bg-center ">
      <div
        className="w-[90%] md:w-[70%] my-13  aspect-auto bg-cover bg-center border border-foreground rounded-md relative"
        style={{ backgroundImage: 'url(/home/home_about_us.png)' }}
      > 
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-start py-10 px-6 overflow-y-scroll space-y-9 md:space-y-60  " >

          <h3 className="text-4xl md:text-6xl font-bold text-center text-foreground">
            About Us
          </h3>
          <p className="text-center text-white mx-2  md:mx-12  text-sm md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quos eos, eligendi
            dicta ratione officia totam, deleniti, animi natus quasi neque provident dolore
            molestiae facere adipisci Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores mollitia quam odio, autem animi neque excepturi eum laudantium, porro totam repellendus nobis aut nisi repudiandae ducimus. Omnis natus sit pariatur!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed provident dicta. Voluptatum odio recusandae iusto aperiam qui quidem? Quod veniam reiciendis maxime a magni excepturi dolore, sit iusto fugiat?
          </p>

        </div>
      </div>
    </div>
  );
};

export default HomeSectionThree;
