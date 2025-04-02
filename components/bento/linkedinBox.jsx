import React from "react";
import BentoBox from "../bentoBox";
import { useTab } from "@/providers/tabContext";

export const LinkedinBox = () => {
  const { activeTabIndex } = useTab();
  return (
    <BentoBox
      className={`group flex flex-col justify-center p-5 md:col-span-2 row-span-2 row-start-10 hover:shadow-lg hover:scale-[1.02] cursor-pointer transition-all duration-300 ease-out 
    ${
      activeTabIndex === 1
        ? "md:col-start-1 md:row-start-4"
        : activeTabIndex === 2
        ? "opacity-40 pointer-events-none md:col-start-1 md:row-start-4"
        : "md:col-start-1 md:row-start-4"
    }
    `}
    >
      <a href="https://www.linkedin.com/in/ferreira-elena/" target="_blank">
        <div className="flex justify-center items-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-20 fill-icon-color group-hover:fill-icon-hover cursor-pointer duration-400 transition-all"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.7402 3.89737C4.72468 2.84117 6.12669 2.25 7.78216 2.25H16.2169C17.8762 2.25 19.2788 2.84084 20.2629 3.89765C21.2413 4.94841 21.75 6.39889 21.75 8.02638V15.9736C21.75 17.6011 21.2413 19.0516 20.2627 20.1024C19.2785 21.1592 17.8756 21.75 16.2159 21.75H7.78216C6.1228 21.75 4.72038 21.1591 3.73657 20.1023C2.75842 19.0515 2.25 17.601 2.25 15.9736V8.02638C2.25 6.39806 2.76117 4.94771 3.7402 3.89737ZM4.83745 4.92012C4.16024 5.64666 3.75 6.70951 3.75 8.02638V15.9736C3.75 17.2914 4.15861 18.3541 4.83451 19.0802C5.50475 19.8003 6.49341 20.25 7.78216 20.25H16.2159C17.5052 20.25 18.4944 19.8002 19.165 19.0801C19.8412 18.354 20.25 17.2913 20.25 15.9736V8.02638C20.25 6.70868 19.8412 5.64597 19.1651 4.91984C18.4946 4.19975 17.5056 3.75 16.2169 3.75H7.78216C6.49828 3.75 5.50921 4.19943 4.83745 4.92012Z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.88281 10.2422C8.29703 10.2422 8.63281 10.578 8.63281 10.9922V15.8005C8.63281 16.2147 8.29703 16.5505 7.88281 16.5505C7.4686 16.5505 7.13281 16.2147 7.13281 15.8005V10.9922C7.13281 10.578 7.4686 10.2422 7.88281 10.2422Z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.6935 10.6484C12.7097 10.6484 11.9111 11.447 11.9111 12.4308V15.801C11.9111 16.2152 11.5753 16.551 11.1611 16.551C10.7469 16.551 10.4111 16.2152 10.4111 15.801V12.4308C10.4111 10.6186 11.8813 9.14844 13.6935 9.14844C15.5071 9.14844 16.9759 10.6188 16.9759 12.4308V15.801C16.9759 16.2152 16.6402 16.551 16.2259 16.551C15.8117 16.551 15.4759 16.2152 15.4759 15.801V12.4308C15.4759 11.4468 14.6782 10.6484 13.6935 10.6484Z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.02441 8.30807C7.02441 7.83398 7.40868 7.44922 7.88324 7.44922C8.35721 7.44922 8.74214 7.83338 8.74214 8.30807C8.74214 8.78276 8.35722 9.16693 7.88324 9.16693C7.40866 9.16693 7.02441 8.78216 7.02441 8.30807Z"
            ></path>
          </svg>
        </div>
      </a>
    </BentoBox>
  );
};
