/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/no-unknown-property */
import Form02 from "@/components/form02";
import Form03 from "@/components/form03";
import React from "react";

const formdemo = () => {
  return (
    <>
      <h1 className="text-6xl">HFormside</h1>

      <Form03 />

      <h2>form2</h2>
      <Form02 />
      {/* <h1 className="text-5xl text-red-600 ">formdemo</h1>
      <script src="https://f.convertkit.com/ckjs/ck.5.js" />
      <form
        action="https://app.convertkit.com/forms/3344817/subscriptions"
        className=""
        method="post"
        data-sv-form="3344817"
        data-uid="a6b548ef5b"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
      >
        <div data-style="full">
          <div data-element="column" className="formkit-background"></div>
          <div data-element="column" className="formkit-column">
            <div className="formkit-header" data-element="header">
              <h2>NYHETSBREV</h2>
            </div>
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            ></ul>
            <div data-element="fields" className="">
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="E-post Address"
                  required=""
                  type="email"
                />
              </div>
              <button
                data-element="submit"
                className="formkit-submit 
    
    
    
    formkit-submit"
              >
                <div className="formkit-spinner"></div>
                <span className="">Börja prenumerera</span>
              </button>
            </div>
            <div className="formkit-disclaimer" data-element="disclaimer">
              <p>Vi värnar om din integritet.Avregistrera när som helst.</p>
            </div>
            <div className="formkit-powered-by-convertkit-container"></div>
          </div>
        </div>
      </form> */}
    </>
  );
};

export default formdemo;
