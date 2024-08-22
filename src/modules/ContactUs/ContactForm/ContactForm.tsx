const ContactForm = () => {
  return (
    <div className=" flex flex-col items-center justify-center mb-4">
      <div className=" flex flex-col items-center justify-center mb-10">
        <h3 className=" text-[24px] font-semibold text-black leading-8 mb-4">Get In touch</h3>
        <p className=" text-[18px] text-primary leading-8">Question not answered yet? We are here to help!</p>
      </div>

      <div className="grid grid-cols-3 gap-8 bg-primary-50 p-8 rounded-lg shadow-md max-w-5xl mx-auto">
        <div className="col-span-2 grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-1">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-1">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-1">
            <select className="w-full p-3 border border-gray-300 rounded-md">
              <option value="">Choose an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="col-span-2">
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div className="col-span-2">
            <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition duration-300">
              Submit
            </button>
          </div>
        </div>
        <div className="col-span-1 bg-primary text-white p-6 rounded-lg">
          <h4 className="text-xl font-bold mb-4">Contact Information</h4>
          <p className="mb-2">Toll-free: 1-800-123-4567</p>
          <p className="mb-4">Email: support@paybolt.com</p>
          <p className="text-sm">
            We're here to help! If you have any questions or concerns, please don't hesitate to reach out to us using the contact information provided.
          </p>
        </div>
      </div>
    </div>

  )
}


export default ContactForm;