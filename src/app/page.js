// import Image from "next/image";

// const Homepage = () => {
//   return (

//     <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
//       {/* image container */}
//       <div className="h-1/2 relative lg:w-1/2 lg:h-full">
//         <Image src="/hero.png" alt="" fill className="object-contain" ></Image>
//       </div>
//       {/* text container */}
//       <div className="w-1/2 lg:w-1/2 lg:h-full flex flex-col gap-8 items-center
//           justify-center">
//         <h1 className="text-4xl md:text-5xl font-bold">Explore the world, learn new things, embrace change, and cherish every moment life offers with gratitude.</h1>
//         <p className="md:text-xl">Explore the world, learn new things, embrace change, and cherish every moment life offers with gratitude.cherish every moment life offerscherish every moment life offers</p>
//         <div className="flex gap-4">
//           <button className="btn bg-slate-600">kkkk</button>
//           <button className="btn bg-slate-500">kkkk</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Homepage;



import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* image container */}
      <div className="h-1/2 lg:w-1/2 lg:h-full relative">
        {/* Set a fixed height for the Image component */}
        <div className="w-full h-full">
          <Image src="/hero.png" alt="" layout="fill" objectFit="contain" />
        </div>
      </div>
      {/* text container */}
      <div className="w-full lg:w-1/2 lg:h-full flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Explore the world, learn new things, embrace change, and cherish every moment life offers with gratitude.
        </h1>
        <p className="md:text-xl">
          Explore the world, learn new things, embrace change, and cherish every moment life offers with gratitude.cherish
          every moment life offerscherish every moment life offers
        </p>
        <div className="flex gap-4">
          <button className="btn bg-slate-600">kkkk</button>
          <button className="btn bg-slate-500">kkkk</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

