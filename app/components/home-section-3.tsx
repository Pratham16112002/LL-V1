const HomeSectionThree = () => {
  return (
    <div
      className="w-full flex h-screen  aspect-video justify-center py-10 bg-cover"
      
    >
      <div className="w-[80%] rounded-3xl my-3  aspect-video bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: 'url(/home/home_about_us.png)' }}
      >
        {/* overlay */}
        <div
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE / old Edge
          }}
          className="absolute inset-0  flex flex-col items-center justify-start
             py-10 px-6 overflow-y-scroll space-y-9 md:space-y-60 no-scrollbar-webkit"
        >
          <div className="flex flex-[0.90] justify-center">
            <h3 className="text-4xl md:text-6xl font-bold text-foreground">
              About us
            </h3>
          </div>
          <div className="w-full flex items-start">
          <p className=" md:max-w-2xl text-left text-foreground mx-2 md:mx-12 text-md md:text-lg leading-relaxed flex flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quos
            eos, eligendi dicta ratione officia totam, deleniti, animi natus
            quasi neque provident dolore molestiae facere adipisci Lorem, ipsum
            dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, necessitatibus libero porro, quo sequi aut illo recusandae, at tenetur ipsum repellat veniam molestiae eum debitis voluptatibus. Dolores in quod fuga?
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSectionThree
