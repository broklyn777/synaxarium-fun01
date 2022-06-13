/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/no-unknown-property */
import React from "react";

const Form03 = () => {
  return (
    <div className="">
      <div className="pb-1 text-lg font-semibold text-gray-800 justify-center items-center dark:text-gray-100">
        Håll dig uppdaterad, få nyhetsbrevet direkt i din mejlbox
      </div>
      <script src="https://f.convertkit.com/ckjs/ck.5.js" />
      <form
        className=" "
        action="https://app.convertkit.com/forms/3344817/subscriptions"
        method="post"
        data-sv-form="3344817"
        data-uid="a6b548ef5b"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        // min-width="400 500 600 700 800"
      >
        <div className="">
          <input
            autoComplete="email"
            className="px-4 rounded-md  w-full  dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600"
            name="email_address"
            aria-label="Email Address"
            placeholder="E-post"
            required=""
            type="email"
          />
        </div>
        <div className=" w-full mt-2 rounded-md shadow-sm  ">
          <button
            data-element="submit"
            className="py-2 w-full bg-primary-500 px-4 rounded-md font-medium text-white hover:bg-primary-600 dark:hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black"
          >
            <span className="">Börja prenumerera</span>
          </button>
        </div>
      </form>

      {/* <div className="pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400"></div> */}
    </div>
  );
};

export default Form03;
