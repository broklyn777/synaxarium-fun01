/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/no-unknown-property */
import React from "react";

const Form02 = () => {
  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
        Prenumerera på nyhetsbrevet2
      </div>
      <script src="https://f.convertkit.com/ckjs/ck.5.js" />
      <div>
        <form
          className="flex flex-col sm:flex-row"
          action="https://app.convertkit.com/forms/3344817/subscriptions"
          method="post"
          data-sv-form="3344817"
          data-uid="a6b548ef5b"
          data-format="inline"
          data-version="5"
          data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
          // min-width="400 500 600 700 800"
        >
          <div>
            {/* <div data-style="full"> */}
            <div data-element="column" className="">
              {/* <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            ></ul> */}
              <div
                data-element="fields"
                className="flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3"
              >
                <div>
                  <input
                    autoComplete="email"
                    className="px-4 rounded-md  w-full dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600"
                    name="email_address"
                    aria-label="Email Address"
                    placeholder="E-post"
                    required=""
                    type="email"
                  />
                </div>

                <div className="flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3">
                  <button
                    data-element="submit"
                    className="py-2 sm:py-0 w-full bg-primary-500 px-4 rounded-md font-medium text-white hover:bg-primary-700 dark:hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black"
                  >
                    <span className="">Börja prenumerera</span>
                  </button>
                </div>
              </div>
              {/* <div className="formkit-disclaimer" data-element="disclaimer">
                <p>Vi värnar om din integritet.Avregistrera när som helst.</p>
              </div> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form02;
