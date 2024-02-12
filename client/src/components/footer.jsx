import { Link } from "react-router-dom";

const LINKS = [
  "Contact Us",
  "Locations",
  "Disclosures",
  "Browser Support",
  "Mobile Site",
  "Routing # 321180379",
];

const Footer = () => {
  return (
    <div className="_footer bg-[#efefef] shadow-[0_-2px_3px_rgba(0,0,0,.4)] py-5 px-4">
      <div className="text-[#4d4d4d] relative w-full max-w-[1005px] text-[12px] mx-auto my-[10px]">
        <div className="flex w-full gap-x-4 gap-y-2 items-center mb-[22px] flex-wrap">
          {LINKS.map((link, i) => (
            <Link
              key={i}
              className="hover:underline"
              to="#"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="text-[#4d4d4d] flex text-[13px] absolute right-0 top-0 w-[130px] max-sm:hidden">
          <img
            src="/images/equalHousing.png"
            alt="Equal Housing Opportunity."
            className="object-cover mr-2"
            width={32}
            height={32}
          />
          <span>Equal Housing Opportunity.</span>
        </div>
        <p>
          This credit union is federally insured by the National Credit Union
          Administration.
        </p>
        <p className="mt-2">
          Copyright © {new Date().getFullYear()}{" "}
          <strong>First Tech Federal Credit Union.</strong> All rights reserved.
        </p>
        <p className="mt-5">
          If you have questions for First Tech Federal Credit Union or are
          having problems with this website, please call 855.855.8805 for
          assistance.
        </p>
        <p>
          <Link
            className="text-[#0267c1]"
            to="#"
          >
            Privacy Notice
          </Link>{" "}
          |{" "}
          <Link
            className="text-[#0267c1]"
            to="#"
          >
            BrokerCheck®
          </Link>
          <br />
          <br />
          Registered address: 1011 Sunset Blvd, Rocklin, CA 95765
          <br />
          <br />
          If you have questions for Addison Avenue Investment Services, please
          call 855.744.8585 for assistance.
        </p>
        <br />
        <p>
          Financial Advisors offer securities through{" "}
          <strong>Raymond James Financial Services, Inc</strong> Member{" "}
          <Link
            className="text-[#0267c1]"
            to="#"
          >
            FINRA/SIPC
          </Link>{" "}
          and securities are not insured by credit union insurance, the NCUA or
          any other government agency, are not deposits or obligations of the
          credit union, are not guaranteed by the credit union, and are subject
          to risks, including the possible loss of principal. First Tech Federal
          Credit Union and Addison Avenue Investment Services are not registered
          broker/dealers and are independent of Raymond James Financial
          Services. Investment advisory services offered through Raymond James
          Financial Services Advisors, Inc.
          <br />
          <br />
          Raymond James Financial Advisors may only conduct business with
          residents of the states and/or jurisdictions for which they are
          properly registered. Therefore, a response to a request for
          information may be delayed. Please note that not all of the
          investments and services mentioned are available in every state.
          Investors outside of the United States are subject to securities and
          tax regulations within their applicable jurisdictions that are not
          addressed on this site. Contact your local Raymond James office for
          information and availability.
          <br />
          <br />
          Links are being provided for information purposes only. Raymond James
          is not affiliated with and does not endorse, authorize or sponsor any
          of the listed websites or their respective sponsors. Raymond James is
          not responsible for the content of any website or the collection or
          use of information regarding any website's users and/or members.
        </p>
      </div>
    </div>
  );
};

export default Footer;
