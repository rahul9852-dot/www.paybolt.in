const BusinessSetUp = () =>{
  return (
    <div className="pt-10">
        <div className="business-banner grid grid-cols-2 items-center justify-between px-4 py-4">
          <div className=" flex flex-col items-center justify-center px-2 py-2">
            <h1 className=" text-4xl  text-primary mb-4">Scale-up your Business</h1>
            <p className="text-2xl text-bold text-primary">with Paybolt Payment Solutions Platform</p>
          </div>
          <div className="flex justify-center">
            <button className="btn">
              <span className="font-semibold">Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
    </div>

  )
}

export default BusinessSetUp;