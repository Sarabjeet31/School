"use client";

export default function Section1() {
  return(
    <div>
      <div className="parallax flex items-center justify-center text-white h-96">
        <h2 className="text-4xl font-bold">Welcome to PM Shri GSSS Batheri</h2>
      </div>
      <style jsx>{`
        .parallax {
          background-image: url('/images/image.png');
          background-attachment: fixed;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
      `}</style>
    </div>
  )
}