import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subscribe</h2>
      <p className="text-sm text-gray-600 mb-6">
        <span className="text-red-500">*</span> indicates required
      </p>
      <form
        action="https://tritekconsulting.us19.list-manage.com/subscribe/post?u=f360faa8abb24e70155ff2112&amp;id=d9370538ff&amp;f_id=002c4ce4f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        className="space-y-4"
      >
        {/* SMS Phone Number */}
        <div>
          <label htmlFor="mce-SMSPHONE" className="block text-gray-700 mb-1">
            SMS Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <span className="p-2 bg-gray-100">
              <img
                src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/forms-landing-pages/smsphone/flag-uk.svg"
                alt="Country Code"
                className="w-6 h-6"
              />
            </span>
            <input
              type="text"
              name="SMSPHONE"
              id="mce-SMSPHONE"
              className="flex-1 px-4 py-2 border-none focus:ring-0 focus:outline-none"
              required
            />
          </div>
          <div className="flex items-start mt-2 space-x-2">
            <input
              type="checkbox"
              name="mc-SMSPHONE-ack"
              id="mc-SMSPHONE-ack"
              value="true"
              className="mt-1"
            />
            <p className="text-sm text-gray-600">
              By providing your phone number and checking the box, you agree to
              receive promotional and marketing messages, notifications, and
              customer service communications. Message and data rates may
              apply. Text HELP for help. Text STOP to cancel. See{" "}
              <a
                href="http://eepurl.com/iR3bjk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Terms
              </a>
              .
            </p>
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="mce-EMAIL" className="block text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* First Name */}
        <div>
          <label htmlFor="mce-FNAME" className="block text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            name="FNAME"
            id="mce-FNAME"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="mce-LNAME" className="block text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="LNAME"
            id="mce-LNAME"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="mce-ADDRESS-addr1" className="block text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            name="ADDRESS[addr1]"
            id="mce-ADDRESS-addr1"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
