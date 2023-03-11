import * as React from "react";
import "./Faq.css";

function Faq() {
  React.useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var parent = this.parentElement;
        var panel = this.nextElementSibling;
        var mainPanel = document.querySelector(".main-panel");
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          // panel.style.border = "none";
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          parent.style.maxHeight =
            parseInt(parent.style.maxHeight) + panel.scrollHeight + "px";
        }
      });
    }
  }, []);
  return (
    <div id="faq" className="bg-black">
      <div className="accordion-wrapper p-9 md:p-32 md:pt-4">
        <h1 className=" text-[#1aff00] font-bold mb-6 text-[50px] text-center">
          FAQs
        </h1>

        <button className="accordion main-acc two">
          Shipping and Delivery
        </button>
        <div className="panel main-panel">
          <button className="accordion sub-acc">
            How long does shipping take?
          </button>
          <div className="panel sub-panel">
            <p>
              Shipping time will depend on the shipping method you choose and
              your location. We offer a range of shipping options, from standard
              to expedited, to suit your needs.
            </p>
          </div>
          <button className="accordion sub-acc">Can I track my order?</button>
          <div className="panel sub-panel">
            <p>
              Yes, you will receive a tracking number once your order has been
              shipped, and you can track the status of your delivery online.
            </p>
          </div>
          <button className="accordion sub-acc">
            Do you offer free shipping?
          </button>
          <div className="panel sub-panel">
            <p>
              We may offer free shipping promotions from time to time. Please
              check our shipping information page for the latest information on
              shipping and delivery.
            </p>
          </div>
          <button className="accordion sub-acc">
            Do you ship internationally?
          </button>
          <div className="panel sub-panel">
            <p>
              Yes, we ship to many countries around the world. You can check our
              shipping information page for a complete list of countries we
              currently serve.
            </p>
          </div>
        </div>

        <button className="accordion main-acc three">
          Returns and Exchanges
        </button>
        <div className="panel main-panel">
          <button className="accordion sub-acc">
            How do I return or exchange an item?
          </button>
          <div className="panel sub-panel">
            <p>
              To return or exchange an item, please contact our customer service
              team for assistance. We have a detailed return policy that you can
              find on our website.
            </p>
          </div>

          <button className="accordion sub-acc">
            What is your return policy?
          </button>
          <div className="panel sub-panel">
            <p>
              Our return policy is designed to provide a simple and convenient
              return process for our customers. We accept returns for most
              products within a certain time frame, provided the item is in its
              original condition. For more details, please see our return policy
              on our website.
            </p>
          </div>
        </div>

        <button className="accordion main-acc four">Customer Support</button>
        <div className="panel main-panel">
          <button className="accordion sub-acc">
            How do I get assistance with an order or a product?
          </button>
          <div className="panel sub-panel">
            <p>
              If you need assistance with an order or a product, please reach
              out to our customer service team. You can contact us via email at
              support@ecomstore.com or by phone at +1 (555) 555-5555. We are
              available to assist you during our business hours, which are
              Monday-Friday from 9:00am to 5:00pm EST.
            </p>
          </div>

          <button className="accordion sub-acc">
            What are your business hours for customer support?
          </button>
          <div className="panel sub-panel">
            <p>
              Our business hours for customer support are Monday-Friday from
              9:00am to 5:00pm EST.
            </p>
          </div>

          <button className="accordion sub-acc">
            How do I reach customer support if I have an issue with my order?
          </button>
          <div className="panel sub-panel">
            <p>
              If you have an issue with your order, please reach out to our
              customer service team. You can contact us via email at
              support@ecomstore.com or by phone at +1 (555) 555-5555. We are
              available to assist you during our business hours, which are
              Monday-Friday from 9:00am to 5:00pm EST.
            </p>
          </div>
        </div>

        <button className="accordion main-acc five">
          Site Security and Privacy
        </button>
        <div className="panel main-panel">
          <button className="accordion sub-acc">
            Is shopping on your site secure?
          </button>
          <div className="panel sub-panel">
            <p>
              Yes, shopping on our site is secure. We use the latest in
              encryption technology and security protocols to protect your
              personal and financial information.
            </p>
          </div>

          <button className="accordion sub-acc">
            How do I know if my personal information is protected?
          </button>
          <div className="panel sub-panel">
            <p>
              We take the protection of your personal information very
              seriously, and we have strict privacy policies in place to ensure
              your information is secure. You can find more information on our
              privacy policies on our website.
            </p>
          </div>
        </div>

        <button className="accordion main-acc six">Account Management</button>
        <div className="panel main-panel">
          <button className="accordion sub-acc">
            How do I create an account?
          </button>
          <div className="panel sub-panel">
            <p>
              To create an account, simply click the "Create Account" button on
              our website and follow the prompts to enter your information. This
              will allow you to save your information for faster checkout, view
              your order history, and more.
            </p>
          </div>

          <button className="accordion sub-acc">
            How do I update my account information?
          </button>
          <div className="panel sub-panel">
            <p>
              To update your account information, simply log in to your account
              and click the "My Account" button. From there, you can update your
              personal information, shipping and billing addresses, and more.
            </p>
          </div>

          <button className="accordion sub-acc">
            How do I reset my password?
          </button>
          <div className="panel sub-panel">
            <p>
              To reset your password, click the "Forgot Password" link on the
              log in page. Then, enter the email address associated with your
              account, and follow the prompts to reset your password.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
