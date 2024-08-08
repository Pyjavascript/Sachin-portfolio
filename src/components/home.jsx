import React from "react";

function Home() {
  return (
    <div className="lg:px-48 px-4 md:px-10">
      <div className="flex flex-col gap-4 py-7 pb-12">
        <div>
          <img
            src="https://lh4.googleusercontent.com/rOn3AfOD6CU8gzysW-QcXVm7DBYTa430Bd7cKT6jofk4AXQBTaFbY31rS12VwNrsz__AREh4FDRHCGAHeznrwXzY5kU4cAu64wWwNPjpA-ib2KEZc-5xwlI6D8knwQEUIg=w1280"
            alt="Profile"
          />
          <img
            src="https://lh6.googleusercontent.com/xIQYBQKDzp4wcbTWj-R-eQl1PTQKRPCbFikwuvRw-zu1H0hNGWrdfp84ImV4n4kgRifNyJ1SNNhOIji6zvQ5jVg=w1280"
            alt="work"
          />
        </div>
        <p className="text-center font-semibold text-base">
          <span className="text-2xl text-[#9900ff]">H</span>euristic{" "}
          <span className="text-2xl text-[#9900ff]">I</span>ntelligence{" "}
          <span className="text-2xl text-[#9900ff]">R</span>esearch{" "}
          <span className="text-2xl text-[#9900ff]">a</span>nd{" "}
          <span className="text-2xl text-[#9900ff]">K</span>nowledge{" "}
          <span className="text-2xl text-[#9900ff]">L</span>aboratory
        </p>
      </div>
      <div>
        <div className="mb-5 flex flex-col gap-12  border-t-2 border-b-2 pt-10 pb-5">
          <h1 className=" text-[#9900ff] font-bold text-2xl">Biosketch:</h1>
          <p className="text-justify">
            Dr Sachin Mishra is a distinguished researcher and scientist with a
            strong background in biosensors, nanotechnology, and materials
            science. Holding a PhD in Biosensors from Linköping University,
            Sweden, and the University of Free State, South Africa, he has held
            research positions at esteemed institutions including Kwangwoon
            University, South Korea, and the University of Rovira I Virgili,
            Spain. Dr Mishra's research expertise encompasses the development of
            electrochemical aptamer-based nano-biosensors, optical sensor
            devices, and affinity-based analytical devices for point-of-care
            applications. He boasts a strong publication record in top-tier
            journals, including ACS Sensors, Biosensors and Bioelectronics, and
            Nano Energy, and has authored several book chapters on MXenes and
            nanotechnology for sustainable applications.<br/><br/>In addition to his
            research experience, Dr Mishra has held leadership positions,
            including Group Leader at VBRI Innovations Pvt. Ltd., India, and
            Managing Editor at VBRI Press AB, Sweden, where he has successfully
            managed teams and coordinated publishing projects. A skilled
            communicator, Dr Mishra has presented his research at international
            conferences and has mentored students at Kwangwoon University and
            the University of Rovira I Virgili. Throughout his career, he has
            demonstrated a strong commitment to advancing the field of
            biosensors and nanotechnology, earning him the Goodfellow PhD
            Student Award 2017.
          </p>
        </div>
        <div className="flex flex-col gap-2 py-6 border-b-2">
          <p className="font-bold text-[#9900ff]">Professional Membership: </p>
          <p className="font-semibold text-amber-800">1. IEEE Senior Member</p>
        </div>
        <div className="flex flex-col gap-2 py-6 border-b-2">
          <p className="font-bold text-[#9900ff]">Journal Editor: </p>
          <p className="font-semibold text-amber-800">
            1. Review Editor: Frontiers in Artificial Intelligence (Pattern
            Recognition)
          </p>
        </div>
        <div className="flex flex-col gap-2 py-6 border-b-2">
          <p className="font-bold text-[#9900ff]">Awards: </p>
          <div>
            <p className="font-semibold text-amber-800">
              1. Samsung Dream Scholarship
            </p>
            <p className="font-semibold text-amber-800">2. Fulbright Fellow</p>
            <p className="font-semibold text-amber-800">
              3. STEM Ambassador, UHV, Texas, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
