import React from "react";
import BentoBox from "../bentoBox";

export const MailBox = () => {
  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-1 hover:shadow-lg hover:scale-[1.02] cursor-pointer transition-all duration-300 ease-out">
      <div className="flex justify-center items-center">
        <a href="mailto:elena.lacroixferreira@gmail.com">
          <svg viewBox="0 0 25 24" fill="none" className="size-20 fill-icon-color hover:fill-icon-hover cursor-pointer duration-400 transition-all">
            <path d="M16.681 20.8504H7.81702C7.14171 20.8601 6.47129 20.734 5.84565 20.4796C5.22001 20.2252 4.65189 19.8476 4.17499 19.3694C3.62706 18.8029 3.19688 18.1334 2.90937 17.3996C2.62186 16.6658 2.48274 15.8823 2.50001 15.0944V8.91339C2.45606 8.18124 2.56067 7.44777 2.80756 6.7571C3.05445 6.06643 3.43853 5.43284 3.93665 4.89445C4.43477 4.35607 5.03662 3.92401 5.70606 3.62428C6.3755 3.32456 7.09862 3.16337 7.83198 3.15039H16.668C17.4014 3.16337 18.1245 3.32456 18.794 3.62428C19.4634 3.92401 20.0652 4.35607 20.5634 4.89445C21.0615 5.43284 21.4456 6.06643 21.6924 6.7571C21.9393 7.44777 22.044 8.18124 22 8.91339V15.0904C22.0173 15.8783 21.8782 16.6618 21.5906 17.3956C21.3031 18.1294 20.873 18.7989 20.325 19.3654C19.8482 19.8446 19.2799 20.2229 18.6539 20.478C18.0279 20.7332 17.357 20.8598 16.681 20.8504V20.8504ZM7.83002 19.3504H16.679C17.1581 19.3586 17.6339 19.2705 18.0783 19.0914C18.5227 18.9122 18.9266 18.6456 19.266 18.3074C19.6736 17.8798 19.9924 17.3757 20.2042 16.8243C20.416 16.2728 20.5166 15.6849 20.5 15.0944V8.91339C20.5 6.44339 18.889 4.65039 16.668 4.65039H7.83198C5.61098 4.65039 4.00001 6.44339 4.00001 8.91339V15.0904C3.98345 15.6809 4.08399 16.2688 4.29578 16.8203C4.50758 17.3717 4.82644 17.8758 5.23401 18.3034C5.57308 18.6415 5.97661 18.908 6.42066 19.0872C6.86471 19.2664 7.34021 19.3545 7.81898 19.3464L7.83002 19.3504Z"></path>
            <path d="M12.2656 13.3627C11.6297 13.3624 11.0127 13.1463 10.5156 12.7497L6.47761 9.49368C6.39964 9.43233 6.33463 9.35611 6.28632 9.26945C6.23802 9.18279 6.20736 9.08741 6.19618 8.98883C6.18499 8.89025 6.19353 8.79042 6.2212 8.69514C6.24887 8.59987 6.29512 8.51102 6.35737 8.43376C6.41961 8.3565 6.4966 8.29236 6.58381 8.24506C6.67102 8.19775 6.76672 8.16821 6.86543 8.15816C6.96413 8.1481 7.06387 8.15774 7.15882 8.18649C7.25378 8.21525 7.34205 8.26256 7.41859 8.32568L11.4516 11.5777C11.6841 11.7632 11.9727 11.8643 12.2701 11.8643C12.5675 11.8643 12.8562 11.7632 13.0886 11.5777L17.0796 8.33168C17.156 8.2695 17.244 8.22299 17.3384 8.19479C17.4328 8.16659 17.5318 8.15725 17.6298 8.16733C17.7278 8.1774 17.8229 8.20669 17.9096 8.25351C17.9963 8.30032 18.0729 8.36376 18.1351 8.44018C18.1973 8.51661 18.2438 8.60454 18.272 8.69894C18.3002 8.79335 18.3095 8.89239 18.2994 8.9904C18.2894 9.08841 18.2601 9.18349 18.2133 9.27019C18.1664 9.35688 18.103 9.4335 18.0266 9.49568L14.0266 12.7477C13.5261 13.1459 12.9053 13.3627 12.2656 13.3627Z"></path>
            <path d="M17.5556 15.8416C17.451 15.8419 17.3475 15.8201 17.2519 15.7777C17.1563 15.7353 17.0706 15.6733 17.0006 15.5956L13.7696 12.0476C13.7029 11.9749 13.6513 11.8897 13.6176 11.7969C13.5839 11.7042 13.5689 11.6057 13.5734 11.5071C13.5778 11.4085 13.6017 11.3118 13.6436 11.2225C13.6855 11.1331 13.7447 11.053 13.8176 10.9865C13.8906 10.9201 13.9759 10.8687 14.0687 10.8353C14.1616 10.8019 14.2601 10.7871 14.3587 10.7919C14.4573 10.7966 14.5539 10.8208 14.6431 10.863C14.7323 10.9051 14.8124 10.9645 14.8786 11.0376L18.1096 14.5866C18.2074 14.6941 18.2719 14.8276 18.2953 14.971C18.3187 15.1145 18.2999 15.2616 18.2412 15.3945C18.1825 15.5275 18.0865 15.6405 17.9648 15.7198C17.8431 15.7992 17.7009 15.8415 17.5556 15.8416V15.8416ZM6.94458 15.8416C6.79895 15.8415 6.65647 15.7989 6.53461 15.7192C6.41275 15.6394 6.31679 15.5259 6.25836 15.3925C6.19993 15.2591 6.18155 15.1116 6.20557 14.968C6.22958 14.8243 6.29491 14.6908 6.39356 14.5836L9.66059 11.0356C9.7984 10.903 9.98169 10.828 10.173 10.826C10.3643 10.824 10.5491 10.8952 10.6896 11.025C10.8301 11.1548 10.9158 11.3334 10.929 11.5242C10.9422 11.7151 10.8819 11.9037 10.7606 12.0516L7.49256 15.5986C7.42358 15.6742 7.33978 15.7347 7.24634 15.7763C7.1529 15.8179 7.05188 15.8399 6.94959 15.8406L6.94458 15.8416Z"></path>
          </svg>
        </a>
      </div>
    </BentoBox>
  );
};
