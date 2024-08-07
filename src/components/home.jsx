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
            Dr. Hirak Mazumdar is a Biomedical Researcher and accomplished
            Algorithm Developer specializing in Computer Vision, Image
            Processing, and Complex Machine Learning Algorithms. He has
            completed his PhD degree from Sogang University, South Korea jointly
            with Samsung Mechatronics R&D, Suwon, Korea. After completing his
            Doctorate he joined Cheongju National University, South Korea as a
            Post-Doctoral fellow with the Ministry of Semiconductor
            Design-funded project for building Software for Wafer testing during
            the fabrication process using Machine Learning. Next, he moved to
            the University of Houston, Texas, USA as a Post-Doctoral Scientist
            Position where he worked with the Department of Energy (DOE) funded
            Project for Groundwater Contamination Detection Using Machine
            Learning. He is recognized as an academician, leader, and mentor in
            his field. His current research interest includes developing
            industrial big data analysis, intelligent medical sensor devices,
            intelligent sensor manufacturing systems, and intelligent quality
            assurance using complex Machine learning Algorithms.<br/><br/>In addition, he
            has work experience with two top-tier companies (Samsung and
            Hyundai) where he works with machine learning and data fault
            analysis. Currently, his research interests include Nanotechnology,
            Nano Biosensor Simulation, and Computational Biology with numerical
            Simulation. He was also experienced with biomedical image analysis
            and various cell cultures using Image Processing techniques.
          </p>
        </div>
        <div className="flex flex-col gap-2 py-6 border-b-2">
            <p className="font-bold text-[#9900ff]">Professional Membership: </p>
            <p className="font-semibold text-amber-800">1. IEEE Senior Member</p>
        </div>
        <div className="flex flex-col gap-2 py-6 border-b-2">
            <p className="font-bold text-[#9900ff]">Journal Editor: </p>
            <p className="font-semibold text-amber-800">1. Review Editor: Frontiers in Artificial Intelligence (Pattern Recognition)</p>
        </div>
        <div className="flex flex-col gap-2 py-6 border-b-2">
            <p className="font-bold text-[#9900ff]">Awards: </p>
            <div>
            <p className="font-semibold text-amber-800">1. Samsung Dream Scholarship</p>
            <p className="font-semibold text-amber-800">2. Fulbright Fellow</p>
            <p className="font-semibold text-amber-800">3. STEM Ambassador, UHV, Texas, USA</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
