import Image from "next/image";
import GoogleMap from "./server-component/google-map";

export default function Home() {
  return (

      <div className="hero min-h-screen bg-base-200 content-center">
        
        <div className="hero-content text-center">
        <div >
          <h1 className="text-3xl pb-4 font-semibold">Chinse food near me</h1>
        
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="min-w-[700px]"><GoogleMap /></figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

     
  );
}
