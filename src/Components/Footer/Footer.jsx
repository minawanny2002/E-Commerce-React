import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-100 py-6">
            <div className="w-full px-16 mx-auto">
                <h2 className="text-xl font-semibold mb-2">Get the FreshCart app</h2>
                <p className="text-gray-600 mb-4">We will send you a link, open it on your phone to download the app.</p>
                <div className="flex flex-col md:flex-row lg:flex-row w-full justify-between items-center mb-6">
                    <input
                        type="email"
                        placeholder="Email .."
                        className="w-full mb-5 md:mb-0 lg:mb-0 md:w-8/12 lg:w-10/12  p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    <button className="bg-green-600 text-white px-14 lg:px-6 md:px-6  py-3 md:py-3 lg:py-3 rounded-lg hover:bg-green-700">
                        Share App Link
                    </button>
                </div>
                <div className="border-t border-gray-300 py-4">
                    <div className="w-full flex flex-col md:flex-col lg:flex-row md:space-x-4 lg:space-x-4 justify-between items-center mb-4">
                        <div className="flex flex-col md:flex-row lg:flex-row justify-start items-center mb-4 md:space-x-4 lg:space-x-4">
                            <h2 className="text-lg w-full md:w-4/12  lg:w-4/12 font-semibold mb-2">Payment Partners</h2>
                            <svg width="85px" height="85px" viewBox="0 -9 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0.5" y="0.5" width="57" height="39" rx="3.5" fill="#f3f4f6" stroke="#f3f4f6"></rect> <path fillRule="evenodd" clipRule="evenodd" d="M32.5368 21.5397H31.5692C31.4737 21.5345 31.3985 21.4548 31.3973 21.3573V16.2735C31.4076 16.1769 31.4886 16.1045 31.5838 16.1069H32.4844C32.5664 16.1096 32.6366 16.1677 32.6562 16.2489V17.0264H32.6751C32.9467 16.3313 33.3274 16 33.9977 16C34.4325 16 34.857 16.1604 35.1311 16.5987C35.3846 17.0054 35.3846 17.6899 35.3846 18.1817V21.3801C35.3704 21.4734 35.2907 21.5416 35.1982 21.5397H34.222C34.1344 21.5358 34.062 21.4686 34.0501 21.3801V18.6199C34.0501 18.5767 34.0505 18.5319 34.0509 18.4861C34.0555 17.9426 34.0615 17.2508 33.4425 17.2508C33.1933 17.2625 32.9737 17.4215 32.8805 17.6575C32.7448 17.9678 32.7267 18.2781 32.7267 18.6217V21.3573C32.723 21.4605 32.6389 21.5416 32.5377 21.5397H32.5368ZM28.4378 16.007C29.8789 16.007 30.6583 17.2692 30.6583 18.8732C30.6583 20.4238 29.799 21.6536 28.4378 21.6536C27.0242 21.6536 26.2542 20.3914 26.2542 18.8198C26.2542 17.2482 27.0336 16.007 28.4378 16.007ZM28.4472 17.0448C27.7314 17.0448 27.6858 18.0388 27.6858 18.6594L27.6858 18.6799C27.6857 19.3087 27.6856 20.6052 28.4378 20.6052C29.1983 20.6052 29.2266 19.5359 29.2266 18.8838C29.2266 18.456 29.2086 17.9424 29.0814 17.5365C28.9723 17.1859 28.7549 17.0448 28.4472 17.0448ZM10.4983 21.5502H9.5281C9.4381 21.5454 9.36504 21.4742 9.35624 21.3827V16.2989C9.3595 16.197 9.44193 16.1164 9.54185 16.1175H10.4467C10.5394 16.1227 10.6135 16.1982 10.6186 16.2928V16.9563H10.6366C10.8721 16.3138 11.3164 16.0149 11.9145 16.0149C12.5126 16.0149 12.9019 16.3138 13.1743 16.9563C13.3561 16.4618 13.7853 16.1059 14.2969 16.025C14.8085 15.9442 15.3231 16.1511 15.6431 16.5662C15.9071 16.9322 15.8986 17.442 15.8907 17.9208V17.9209C15.8894 18.0016 15.888 18.0816 15.888 18.1597V21.3669C15.8871 21.4166 15.8669 21.4639 15.8317 21.4983C15.7965 21.5326 15.7494 21.5513 15.7007 21.5502H14.7305C14.6351 21.5451 14.5599 21.4653 14.5586 21.3678V18.6734C14.5586 18.6326 14.5593 18.58 14.5601 18.5203V18.5203C14.5632 18.2674 14.568 17.886 14.5312 17.7215C14.459 17.3796 14.2416 17.2832 13.9606 17.2832C13.703 17.2913 13.4749 17.455 13.3805 17.6996C13.2879 17.9388 13.2887 18.324 13.2893 18.6094L13.2894 18.6734V21.3669C13.2885 21.4165 13.2684 21.4636 13.2334 21.4979C13.1984 21.5323 13.1515 21.5511 13.1029 21.5502H12.1302C12.0349 21.5446 11.9599 21.4651 11.9583 21.3678V18.6734C11.9583 18.6182 11.9591 18.5605 11.96 18.5012V18.5012V18.5012V18.5012V18.5012V18.5012V18.5011V18.5011C11.9677 17.9515 11.9773 17.271 11.3568 17.271C10.6855 17.271 10.6861 18.0456 10.6865 18.6312L10.6865 18.6734V21.3669C10.6856 21.4166 10.6653 21.4639 10.6301 21.4983C10.595 21.5326 10.5478 21.5513 10.4992 21.5502H10.4983ZM7.61007 21.6124C7.68377 21.6547 7.77561 21.6452 7.83951 21.5887L7.84724 21.5905C8.04059 21.4143 8.39292 21.1022 8.59143 20.9331C8.66705 20.8673 8.6533 20.7578 8.59143 20.6701C8.57255 20.6436 8.55355 20.6176 8.53467 20.5918L8.53463 20.5917C8.37553 20.3742 8.22449 20.1676 8.22449 19.7524V18.2106C8.22449 18.1611 8.22474 18.112 8.22498 18.0631V18.063V18.0629V18.0628V18.0626V18.0625V18.0624V18.0623V18.0621C8.22792 17.4667 8.23062 16.9219 7.79482 16.5058C7.42359 16.1411 6.80659 16.0131 6.33395 16.0131C5.41017 16.0131 4.37897 16.3646 4.16327 17.5287C4.15433 17.5758 4.16471 17.6246 4.19199 17.6636C4.21927 17.7027 4.26107 17.7287 4.30764 17.7355L5.24088 17.8398C5.33202 17.8257 5.40251 17.7509 5.41275 17.6575C5.49352 17.2569 5.82351 17.0632 6.19388 17.0632C6.39497 17.0632 6.62011 17.1377 6.7387 17.32C6.86041 17.5031 6.85852 17.746 6.85682 17.9643C6.85662 17.9895 6.85643 18.0144 6.85643 18.0388V18.1668C6.76818 18.1769 6.67569 18.1866 6.58042 18.1965C6.06804 18.2498 5.47538 18.3115 5.0312 18.5104C4.42967 18.7786 4 19.3246 4 20.1284C4 21.1575 4.63591 21.672 5.45314 21.672C6.14318 21.672 6.52043 21.5063 7.05408 20.9523C7.0798 20.9906 7.10301 21.0259 7.12491 21.0592L7.12492 21.0592C7.25222 21.2529 7.33511 21.379 7.61007 21.6124ZM6.86076 19.2228L6.86073 19.1748V18.9618C6.15865 18.9618 5.41704 19.1152 5.41704 19.9584C5.41704 20.3879 5.63446 20.6771 6.00655 20.6771C6.27982 20.6771 6.52473 20.5053 6.67941 20.2266C6.86139 19.8965 6.8611 19.5873 6.86076 19.2228ZM21.3147 20.6666C21.2958 20.64 21.2768 20.614 21.2579 20.5881C21.0988 20.3706 20.9478 20.1641 20.9478 19.7498V18.2071C20.9478 18.1544 20.9481 18.102 20.9484 18.05L20.9484 18.0492C20.9518 17.4569 20.9548 16.9163 20.5181 16.5022C20.146 16.1376 19.529 16.0096 19.0573 16.0096C18.1335 16.0096 17.1023 16.3603 16.8857 17.5251C16.8765 17.5725 16.8869 17.6217 16.9144 17.661C16.9419 17.7003 16.984 17.7263 17.031 17.7329L17.9719 17.8363C18.0629 17.8219 18.1333 17.7473 18.1438 17.654C18.2254 17.2534 18.5537 17.0597 18.9241 17.0597C19.1243 17.0597 19.3537 17.1351 19.4689 17.3174C19.5914 17.4998 19.5896 17.7428 19.5879 17.9611C19.5877 17.9862 19.5875 18.011 19.5875 18.0353V18.1606C19.501 18.1705 19.4105 18.1798 19.3173 18.1894C18.8034 18.2424 18.2074 18.3038 17.7622 18.5033C17.1538 18.7716 16.7268 19.3176 16.7268 20.1223C16.7268 21.1504 17.3627 21.665 18.1799 21.665C18.8674 21.665 19.2472 21.4993 19.78 20.9453C19.8052 20.9828 19.828 21.0174 19.8494 21.05L19.8495 21.0501L19.8497 21.0504L19.8498 21.0505C19.9789 21.2467 20.0607 21.371 20.3368 21.6054C20.4105 21.6474 20.502 21.6383 20.5663 21.5826C20.7596 21.4073 21.1119 21.0943 21.3104 20.9252C21.3938 20.8647 21.38 20.7578 21.3147 20.6666ZM19.407 20.2222C19.2532 20.5001 19.0074 20.6719 18.735 20.6719C18.3629 20.6719 18.1455 20.3826 18.1455 19.954C18.1455 19.1099 18.8871 18.9574 19.5892 18.9574V19.1713L19.5892 19.2106C19.5894 19.5797 19.5896 19.8903 19.407 20.2222ZM22.1363 17.0054V16.2814C22.134 16.2318 22.1524 16.1836 22.187 16.1487C22.2216 16.1137 22.269 16.0954 22.3176 16.0982H25.5083C25.5568 16.0965 25.6039 16.1151 25.6386 16.1497C25.6733 16.1843 25.6927 16.2319 25.6922 16.2814V16.9046C25.6922 17.0089 25.6063 17.1456 25.4524 17.3612L23.7991 19.7682C24.4126 19.7533 25.0614 19.8471 25.6191 20.167C25.7221 20.223 25.7878 20.3311 25.791 20.4501V21.2285C25.791 21.3354 25.6767 21.459 25.5556 21.395C24.4972 20.8401 23.2408 20.8424 22.1844 21.4011C22.0735 21.4616 21.9575 21.3398 21.9575 21.2328V20.4922C21.9474 20.3176 21.9887 20.1439 22.0761 19.9934L23.9916 17.1886H22.321C22.2724 17.1905 22.2251 17.172 22.1901 17.1374C22.1552 17.1027 22.1358 17.055 22.1363 17.0054ZM39.0007 16.7442C39.2446 16.5248 39.5233 16.3493 39.8248 16.2253C40.1097 16.1094 40.4136 16.05 40.7202 16.05C41.0251 16.0442 41.3274 16.1064 41.6062 16.2323C41.8689 16.3551 42.099 16.5403 42.2774 16.7722C42.4715 17.0292 42.6151 17.3221 42.7001 17.6347C42.8032 18.0052 42.853 18.3891 42.848 18.7742C42.8526 19.1675 42.7993 19.5593 42.6898 19.9365C42.5982 20.2565 42.448 20.556 42.2473 20.8191C42.0609 21.0584 41.8242 21.2519 41.5547 21.3853C41.2715 21.5194 40.9619 21.5857 40.6498 21.5791C40.0664 21.5889 39.5017 21.3692 39.0729 20.9655V23.3987C39.0811 23.456 39.0623 23.5138 39.0222 23.5547C38.9821 23.5956 38.9254 23.6148 38.8692 23.6065H38.2677C38.2116 23.6148 38.1549 23.5956 38.1148 23.5547C38.0746 23.5138 38.0558 23.456 38.064 23.3987V16.412C38.0562 16.3548 38.0751 16.2972 38.1152 16.2564C38.1552 16.2156 38.2117 16.1963 38.2677 16.2042H38.7154C38.7738 16.1987 38.832 16.2177 38.8763 16.2569C38.9206 16.2962 38.9472 16.3522 38.95 16.412L39.0007 16.7442ZM40.4358 16.8792C39.9424 16.8831 39.4637 17.0508 39.072 17.3569V20.2494C39.5063 20.5825 39.954 20.7487 40.4152 20.7481C41.3513 20.7481 41.8193 20.1053 41.8193 18.8198C41.8193 17.5342 41.3582 16.887 40.4358 16.8783V16.8792ZM44.1189 17.1351L44.1954 17.1088C44.6794 16.9567 45.1825 16.877 45.6889 16.8721C46.0962 16.8727 46.3813 16.949 46.544 17.1009C46.7067 17.2528 46.788 17.5158 46.788 17.8898V18.5717C46.3689 18.462 45.9385 18.4032 45.5059 18.3964C44.9089 18.3958 44.434 18.5463 44.0811 18.8478C43.7282 19.1493 43.5518 19.5525 43.5518 20.0574C43.5529 20.5278 43.6961 20.9033 43.9814 21.1837C44.2667 21.4642 44.6534 21.6045 45.1415 21.6045C45.4433 21.6032 45.7422 21.5437 46.0223 21.4292C46.3178 21.3115 46.5913 21.1431 46.831 20.9313L46.8825 21.274C46.8851 21.331 46.9105 21.3843 46.9527 21.4216C46.995 21.4589 47.0504 21.4768 47.106 21.4712H47.5442C47.6003 21.4792 47.6567 21.4599 47.6968 21.4191C47.7368 21.3783 47.7557 21.3207 47.7479 21.2635V17.7171C47.7473 17.1491 47.5943 16.7304 47.289 16.4611C46.9836 16.1917 46.5087 16.057 45.8642 16.057C45.5435 16.057 45.2234 16.0863 44.9078 16.1446C44.6323 16.1895 44.3627 16.2663 44.1043 16.3734C44.0418 16.395 43.9858 16.4327 43.9419 16.483C43.9085 16.5447 43.8941 16.6153 43.9006 16.6854V16.9633C43.9006 17.0886 43.947 17.1509 44.033 17.1509C44.0623 17.1504 44.0913 17.1451 44.1189 17.1351ZM46.0885 20.6929C45.8638 20.7785 45.6263 20.8239 45.3864 20.827C45.1218 20.8276 44.9181 20.7569 44.7754 20.6149C44.6328 20.4729 44.5615 20.2704 44.5615 20.0075C44.5609 19.405 44.9444 19.1038 45.7121 19.1038C45.894 19.1041 46.0757 19.1164 46.2561 19.1406C46.4358 19.1637 46.6142 19.1964 46.7906 19.2387V20.2985C46.5774 20.4653 46.3407 20.5983 46.0885 20.6929ZM50.423 23.4189C50.6636 23.2109 50.8759 22.8681 51.0598 22.3907L53.2992 16.5776C53.3362 16.4989 53.3603 16.4145 53.3705 16.3278C53.3705 16.2454 53.3232 16.2034 53.2279 16.2034H52.6581C52.5799 16.1957 52.5013 16.2138 52.4338 16.2551C52.3764 16.3205 52.3348 16.3989 52.3127 16.4838L50.9377 20.5115L49.5121 16.4838C49.4899 16.3989 49.4484 16.3205 49.3909 16.2551C49.3235 16.2138 49.2449 16.1957 49.1666 16.2034H48.5557C48.4611 16.2034 48.4139 16.2454 48.4139 16.3278C48.4237 16.4145 48.4475 16.4989 48.4843 16.5776L50.4453 21.5221L50.252 22.048C50.1368 22.3805 50.0079 22.609 49.8653 22.7334C49.6935 22.8677 49.4798 22.934 49.2638 22.9201C49.1719 22.9221 49.0801 22.9151 48.9896 22.8991C48.9393 22.8881 48.8881 22.8813 48.8367 22.8789C48.7344 22.8789 48.6837 22.9447 48.6837 23.0762V23.3461C48.678 23.4205 48.6958 23.4948 48.7344 23.5582C48.7767 23.6086 48.8341 23.6434 48.8977 23.6573C49.0869 23.7082 49.282 23.7327 49.4777 23.73C49.8673 23.7306 50.1824 23.6269 50.423 23.4189Z" fill="#232F3E"></path> <path fillRule="evenodd" clipRule="evenodd" d="M23.732 24.7828C23.9529 24.2227 24.4444 22.9675 24.2107 22.6633H24.2124C23.9797 22.3585 22.6735 22.5185 22.086 22.5904L22.0847 22.5906C21.906 22.6125 21.8785 22.4539 22.0392 22.339C23.0824 21.5914 24.7916 21.8052 24.9901 22.0577C25.1886 22.3101 24.936 24.0579 23.9589 24.8923C23.8085 25.0203 23.665 24.9519 23.732 24.7828ZM16.7121 25.647C18.9842 25.647 21.6301 24.9151 23.4528 23.5434V23.546C23.7544 23.3146 23.4957 22.9745 23.1881 23.1077C21.1986 23.9637 19.063 24.4105 16.9038 24.4225C13.9081 24.4225 11.0105 23.5846 8.66619 22.1935C8.46081 22.0717 8.30784 22.2864 8.47971 22.4433C10.7366 24.5203 13.6725 25.6628 16.7121 25.647Z" fill="#FF9900"></path> </g></svg>
                            <svg width="80px" height="70px" viewBox="0 -140 780 780" enableBackground="new 0 0 780 500" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m575.61 145.11l-15.092 35.039h30.266l-15.174-35.039zm-174.15 21.713c2.845-1.422 4.52-4.515 4.52-8.356 0-3.764-1.76-6.49-4.604-7.771-2.591-1.42-6.577-1.584-10.399-1.584h-27v19.523h26.638c4.266 1e-3 7.831-0.059 10.845-1.812zm-345.97-21.713l-14.921 35.039h29.932l-15.011-35.039zm694.7 224.47h-42.344v-18.852h42.173c4.181 0 7.109-0.525 8.872-2.178 1.667-1.473 2.609-3.555 2.592-5.732 0-2.562-1.062-4.596-2.68-5.813-1.588-1.342-3.907-1.953-7.726-1.953-20.588-0.67-46.273 0.609-46.273-27.211 0-12.75 8.451-26.172 31.461-26.172h43.677v-17.492h-40.58c-12.246 0-21.144 2.81-27.443 7.181v-7.181h-60.022c-9.597 0-20.863 2.279-26.191 7.181v-7.181h-107.19v7.181c-8.529-5.897-22.925-7.181-29.565-7.181h-70.702v7.181c-6.747-6.262-21.758-7.181-30.902-7.181h-79.127l-18.104 18.775-16.959-18.775h-118.2v122.68h115.97l18.655-19.076 17.575 19.076 71.484 0.06v-28.859h7.03c9.484 0.146 20.67-0.223 30.542-4.311v33.106h58.962v-31.976h2.844c3.628 0 3.988 0.146 3.988 3.621v28.348h179.12c11.372 0 23.26-2.786 29.841-7.853v7.853h56.817c11.822 0 23.369-1.588 32.154-5.653v-22.853c-5.324 7.462-15.707 11.245-29.751 11.245zm-363.58-28.967h-27.36v29.488h-42.618l-27-29.102-28.058 29.102h-86.854v-87.914h88.19l26.976 28.818 27.89-28.818h70.064c17.401 0 36.952 4.617 36.952 28.963 0 24.422-19.016 29.463-38.182 29.463zm131.56-3.986c3.097 4.291 3.544 8.297 3.634 16.047v17.428h-22.016v-10.998c0-5.289 0.533-13.121-3.544-17.209-3.2-3.148-8.086-3.9-16.088-3.9h-23.432v32.107h-22.031v-87.914h50.62c11.105 0 19.188 0.473 26.384 4.148 6.92 4.006 11.275 9.494 11.275 19.523-2e-3 14.031-9.769 21.189-15.541 23.389 4.878 1.725 8.866 4.818 10.739 7.379zm90.575-36.258h-51.346v15.982h50.091v17.938h-50.091v17.492l51.346 0.078v18.242h-73.182v-87.914h73.182v18.182zm56.344 69.731h-42.705v-18.852h42.535c4.16 0 7.109-0.527 8.957-2.178 1.507-1.359 2.591-3.336 2.591-5.73 0-2.564-1.174-4.598-2.676-5.818-1.678-1.34-3.993-1.947-7.809-1.947-20.506-0.674-46.186 0.605-46.186-27.213 0-12.752 8.363-26.174 31.35-26.174h43.96v18.709h-40.225c-3.987 0-6.579 0.146-8.783 1.592-2.405 1.424-3.295 3.535-3.295 6.322 0 3.316 2.04 5.574 4.797 6.549 2.314 0.771 4.797 0.996 8.533 0.996l11.805 0.309c11.899 0.273 20.073 2.25 25.04 7.068 4.266 4.232 6.559 9.578 6.559 18.625-2e-3 18.913-12.335 27.742-34.448 27.742zm-170.06-68.313c-2.649-1.508-6.559-1.588-10.461-1.588h-27.001v19.744h26.64c4.265 0 7.892-0.145 10.822-1.812 2.842-1.646 4.543-4.678 4.543-8.438s-1.701-6.482-4.543-7.906zm244.99-1.59c-3.988 0-6.641 0.145-8.873 1.588-2.314 1.426-3.202 3.537-3.202 6.326 0 3.314 1.953 5.572 4.794 6.549 2.315 0.771 4.796 0.996 8.448 0.996l11.887 0.303c11.99 0.285 19.998 2.262 24.879 7.08 0.889 0.668 1.423 1.42 2.034 2.174v-25.014h-39.965l-2e-3 -2e-3zm-352.65 0h-28.59v22.391h28.336c8.424 0 13.663-4.006 13.667-11.611-4e-3 -7.688-5.497-10.78-13.413-10.78zm-190.81 0v15.984h48.136v17.938h-48.136v17.49h53.909l25.047-25.791-23.983-25.621h-54.973zm140.77 61.479v-70.482l-33.664 34.674 33.664 35.808zm-138.93-141.15v15.148h183.19l-0.085-32.046h3.545c2.483 0.083 3.205 0.302 3.205 4.229v27.818h94.748v-7.461c7.642 3.924 19.527 7.461 35.168 7.461h39.86l8.531-19.522h18.913l8.342 19.522h76.811v-18.544l11.629 18.543h61.555v-122.58h-60.915v14.477l-8.53-14.477h-62.507v14.477l-7.833-14.477h-84.434c-14.135 0-26.555 1.89-36.591 7.158v-7.158h-58.268v7.158c-6.387-5.43-15.089-7.158-24.762-7.158h-212.87l-14.282 31.662-14.668-31.662h-67.047v14.477l-7.367-14.477h-57.18l-26.553 58.284v46.621l39.264-87.894h32.579l37.29 83.217v-83.217h35.789l28.695 59.625 26.362-59.625h36.507v87.894h-22.475l-0.082-68.837-31.796 68.837h-19.252l-31.877-68.898v68.898h-44.6l-8.425-19.605h-45.654l-8.512 19.605h-23.814v17.682h37.466l8.447-19.523h18.914l8.425 19.523h73.713v-14.927l6.579 14.989h38.266l6.58-15.214zm288.67-80.176c7.085-7.015 18.188-10.25 33.298-10.25h21.227v18.833h-20.782c-7.998 0-12.521 1.14-16.871 5.208-3.74 3.7-6.304 10.696-6.304 19.908 0 9.417 1.955 16.206 6.028 20.641 3.376 3.478 9.513 4.533 15.283 4.533h9.851l30.902-69.12h32.853l37.124 83.134v-83.133h33.386l38.543 61.213v-61.213h22.46v87.891h-31.072l-41.562-65.968v65.968h-44.656l-8.532-19.605h-45.55l-8.278 19.605h-25.66c-10.657 0-24.151-2.258-31.793-9.722-7.707-7.462-11.713-17.571-11.713-33.553-4e-3 -13.037 2.389-24.953 11.818-34.37zm-45.101-10.249h22.372v87.894h-22.372v-87.894zm-100.87 0h50.432c11.203 0 19.464 0.285 26.553 4.21 6.936 3.926 11.095 9.658 11.095 19.46 0 14.015-9.763 21.254-15.448 23.429 4.796 1.75 8.896 4.841 10.849 7.401 3.096 4.372 3.629 8.277 3.629 16.126v17.267h-22.115l-0.083-11.084c0-5.29 0.528-12.896-3.461-17.122-3.203-3.09-8.088-3.763-15.983-3.763h-23.538v31.97h-21.927l-3e-3 -87.894zm-88.393 0h73.249v18.303h-51.32v15.843h50.088v18.017h-50.088v17.553h51.32v18.177h-73.249v-87.893z" fill="#2557D6"></path></g></svg>
                            <svg width="80px" height="70px" viewBox="0 -140 780 780" enableBackground="new 0 0 780 500" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m449.01 250c0 99.143-80.371 179.5-179.51 179.5s-179.5-80.361-179.5-179.5c0-99.133 80.362-179.5 179.5-179.5 99.137 0 179.51 80.371 179.51 179.5" fill="#D9222A"></path><path d="m510.49 70.496c-46.379 0-88.643 17.596-120.5 46.467-6.49 5.889-12.548 12.237-18.125 18.996h36.267c4.965 6.037 9.536 12.387 13.685 19.012h-63.635c-3.827 6.122-7.281 12.469-10.342 19.008h84.313c2.894 6.185 5.431 12.53 7.601 19.004h-99.513c-2.09 6.234-3.832 12.58-5.217 19.008h109.94c2.689 12.49 4.045 25.231 4.042 38.008 0 19.935-3.254 39.112-9.254 57.021h-99.513c2.164 6.477 4.7 12.824 7.596 19.008h84.316c-3.063 6.541-6.519 12.889-10.347 19.013h-63.625c4.147 6.62 8.719 12.966 13.685 18.996h36.259c-5.57 6.772-11.63 13.127-18.13 19.013 31.857 28.866 74.117 46.454 120.5 46.454 99.139 0 179.51-80.361 179.51-179.5 0-99.129-80.371-179.5-179.51-179.5" fill="#EE9F2D"></path><path d="m666.07 350.06c0-3.199 2.592-5.801 5.796-5.801s5.796 2.602 5.796 5.801-2.592 5.801-5.796 5.801-5.796-2.602-5.796-5.801zm5.796 4.408c2.434-1e-3 4.407-1.974 4.408-4.408 0-2.432-1.971-4.402-4.402-4.404h-6e-3c-2.429-3e-3 -4.4 1.963-4.404 4.391v0.014c-2e-3 2.433 1.968 4.406 4.4 4.408 1e-3 -1e-3 3e-3 -1e-3 4e-3 -1e-3zm-0.783-1.86h-1.187v-5.096h2.149c0.45 0 0.908 0 1.305 0.254 0.413 0.279 0.646 0.771 0.646 1.279 0 0.571-0.338 1.104-0.884 1.312l0.938 2.25h-1.315l-0.779-2.017h-0.871l-2e-3 2.018zm0-2.89h0.658c0.246 0 0.505 0.021 0.726-0.1 0.195-0.125 0.296-0.359 0.296-0.584-5e-3 -0.209-0.112-0.402-0.288-0.518-0.207-0.129-0.536-0.101-0.758-0.101h-0.634v1.303zm-443.5-80.063c-2.046-0.238-2.945-0.301-4.35-0.301-11.046 0-16.638 3.787-16.638 11.268 0 4.611 2.729 7.545 6.987 7.545 7.939 0 13.659-7.559 14.001-18.512zm14.171 32.996h-16.146l0.371-7.676c-4.926 6.065-11.496 8.949-20.426 8.949-10.563 0-17.804-8.25-17.804-20.229 0-18.024 12.596-28.541 34.217-28.541 2.208 0 5.042 0.199 7.941 0.57 0.604-2.441 0.763-3.488 0.763-4.801 0-4.908-3.396-6.737-12.5-6.737-9.533-0.108-17.396 2.271-20.625 3.333 0.204-1.229 2.7-16.659 2.7-16.659 9.712-2.846 16.116-3.917 23.325-3.917 16.732 0 25.596 7.513 25.579 21.712 0.033 3.805-0.597 8.5-1.579 14.671-1.691 10.734-5.32 33.721-5.816 39.325zm-62.158 0h-19.487l11.162-69.997-24.925 69.997h-13.279l-1.642-69.597-11.733 69.597h-18.242l15.237-91.056h28.021l1.7 50.968 17.092-50.968h31.167l-15.071 91.056m354.97-32.996c-2.037-0.238-2.941-0.301-4.342-0.301-11.041 0-16.634 3.787-16.634 11.268 0 4.611 2.726 7.545 6.983 7.545 7.94 0 13.664-7.559 13.993-18.512zm14.184 32.996h-16.146l0.366-7.676c-4.926 6.065-11.5 8.949-20.422 8.949-10.565 0-17.8-8.25-17.8-20.229 0-18.024 12.588-28.541 34.213-28.541 2.208 0 5.037 0.199 7.934 0.57 0.604-2.441 0.763-3.488 0.763-4.801 0-4.908-3.392-6.737-12.496-6.737-9.533-0.108-17.387 2.271-20.629 3.333 0.204-1.229 2.709-16.659 2.709-16.659 9.712-2.846 16.112-3.917 23.313-3.917 16.74 0 25.604 7.513 25.587 21.712 0.032 3.805-0.597 8.5-1.579 14.671-1.684 10.734-5.321 33.721-5.813 39.325zm-220.39-1.125c-5.333 1.679-9.491 2.398-14 2.398-9.962 0-15.399-5.725-15.399-16.267-0.142-3.271 1.433-11.88 2.671-19.737 1.125-6.917 8.449-50.529 8.449-50.529h19.371l-2.263 11.208h11.699l-2.642 17.796h-11.742c-2.25 14.083-5.454 31.625-5.491 33.95 0 3.816 2.037 5.483 6.671 5.483 2.221 0 3.94-0.227 5.254-0.7l-2.578 16.398m59.392-0.6c-6.654 2.034-13.075 3.017-19.879 3-21.684-0.021-32.987-11.346-32.987-33.032 0-25.313 14.38-43.947 33.899-43.947 15.971 0 26.171 10.433 26.171 26.796 0 5.429-0.7 10.729-2.388 18.212h-38.574c-1.305 10.741 5.57 15.217 16.837 15.217 6.935 0 13.188-1.429 20.142-4.663l-3.221 18.417zm-10.888-43.9c0.107-1.543 2.055-13.217-9.013-13.217-6.171 0-10.583 4.704-12.38 13.217h21.393zm-123.42-5.017c0 9.367 4.542 15.826 14.842 20.676 7.892 3.709 9.112 4.81 9.112 8.17 0 4.617-3.479 6.701-11.191 6.701-5.813 0-11.221-0.908-17.458-2.922 0 0-2.563 16.321-2.68 17.102 4.43 0.967 8.38 1.861 20.279 2.19 20.563 0 30.059-7.829 30.059-24.75 0-10.175-3.976-16.146-13.737-20.634-8.171-3.75-9.108-4.587-9.108-8.045 0-4.004 3.237-6.046 9.537-6.046 3.825 0 9.05 0.408 14 1.112l2.775-17.175c-5.046-0.8-12.696-1.442-17.15-1.442-21.801 1e-3 -29.347 11.388-29.28 25.063m229.09-23.116c5.412 0 10.458 1.421 17.412 4.921l3.188-19.763c-2.854-1.121-12.904-7.7-21.417-7.7-13.041 0-24.065 6.471-31.82 17.15-11.309-3.746-15.958 3.825-21.657 11.367l-5.063 1.179c0.383-2.483 0.729-4.95 0.612-7.446h-17.896c-2.445 22.917-6.778 46.128-10.171 69.075l-0.884 4.976h19.496c3.254-21.143 5.037-34.68 6.121-43.842l7.341-4.084c1.097-4.078 4.529-5.458 11.417-5.291-0.926 5.008-1.389 10.091-1.383 15.184 0 24.225 13.07 39.308 34.05 39.308 5.404 0 10.041-0.712 17.221-2.658l3.43-20.759c-6.458 3.181-11.759 4.677-16.559 4.677-11.329 0-18.184-8.363-18.184-22.185 0-20.051 10.196-34.109 24.746-34.109"></path><path d="m185.21 297.24h-19.491l11.171-69.988-24.926 69.988h-13.283l-1.642-69.588-11.733 69.588h-18.241l15.237-91.042h28.021l0.788 56.362 18.904-56.362h30.267l-15.072 91.042" fill="#ffffff"></path><path d="m647.52 211.6l-4.321 26.309c-5.329-7.013-11.054-12.088-18.612-12.088-9.833 0-18.783 7.455-24.642 18.425-8.158-1.692-16.597-4.563-16.597-4.563l-4e-3 0.067c0.658-6.134 0.921-9.875 0.862-11.146h-17.9c-2.438 22.917-6.771 46.128-10.157 69.075l-0.893 4.976h19.492c2.633-17.096 4.648-31.291 6.133-42.551 6.658-6.016 9.992-11.266 16.721-10.916-2.979 7.205-4.725 15.503-4.725 24.017 0 18.513 9.366 30.725 23.533 30.725 7.142 0 12.621-2.462 17.967-8.171l-0.913 6.884h18.435l14.842-91.042-19.221-1e-3zm-24.371 73.941c-6.634 0-9.983-4.908-9.983-14.596 0-14.555 6.271-24.875 15.112-24.875 6.695 0 10.32 5.104 10.32 14.509 1e-3 14.679-6.37 24.962-15.449 24.962z"></path><path d="m233.19 264.26c-2.042-0.236-2.946-0.299-4.346-0.299-11.046 0-16.634 3.787-16.634 11.266 0 4.604 2.729 7.547 6.979 7.547 7.947-1e-3 13.668-7.559 14.001-18.514zm14.178 32.984h-16.146l0.367-7.663c-4.921 6.054-11.5 8.95-20.421 8.95-10.567 0-17.805-8.25-17.805-20.229 0-18.032 12.592-28.542 34.217-28.542 2.208 0 5.042 0.2 7.938 0.571 0.604-2.441 0.763-3.487 0.763-4.808 0-4.909-3.392-6.729-12.496-6.729-9.537-0.108-17.396 2.271-20.629 3.321 0.204-1.225 2.7-16.637 2.7-16.637 9.708-2.858 16.12-3.929 23.32-3.929 16.737 0 25.604 7.517 25.588 21.704 0.029 3.821-0.604 8.513-1.584 14.675-1.687 10.724-5.319 33.724-5.812 39.316zm261.38-88.592l-3.191 19.767c-6.95-3.496-12-4.92-17.407-4.92-14.551 0-24.75 14.058-24.75 34.106 0 13.821 6.857 22.181 18.184 22.181 4.8 0 10.096-1.492 16.554-4.675l-3.421 20.75c-7.184 1.957-11.816 2.67-17.225 2.67-20.977 0-34.051-15.084-34.051-39.309 0-32.55 18.059-55.3 43.888-55.3 8.507 1e-3 18.561 3.609 21.419 4.73m31.443 55.608c-2.041-0.236-2.941-0.299-4.347-0.299-11.041 0-16.633 3.787-16.633 11.266 0 4.604 2.729 7.547 6.983 7.547 7.938-1e-3 13.663-7.559 13.997-18.514zm14.178 32.984h-16.15l0.371-7.663c-4.925 6.054-11.5 8.95-20.421 8.95-10.563 0-17.804-8.25-17.804-20.229 0-18.032 12.596-28.542 34.212-28.542 2.213 0 5.042 0.2 7.941 0.571 0.601-2.441 0.763-3.487 0.763-4.808 0-4.909-3.393-6.729-12.495-6.729-9.533-0.108-17.396 2.271-20.63 3.321 0.204-1.225 2.704-16.637 2.704-16.637 9.709-2.858 16.116-3.929 23.316-3.929 16.741 0 25.604 7.517 25.583 21.704 0.033 3.821-0.596 8.513-1.579 14.675-1.682 10.724-5.323 33.724-5.811 39.316zm-220.39-1.121c-5.338 1.679-9.496 2.408-14 2.408-9.962 0-15.399-5.726-15.399-16.268-0.138-3.279 1.438-11.88 2.675-19.736 1.12-6.926 8.445-50.534 8.445-50.534h19.368l-2.26 11.212h9.941l-2.646 17.788h-9.975c-2.25 14.092-5.463 31.62-5.496 33.95 0 3.83 2.041 5.482 6.671 5.482 2.221 0 3.938-0.216 5.254-0.691l-2.578 16.389m59.391-0.592c-6.65 2.033-13.079 3.012-19.879 3-21.685-0.021-32.987-11.346-32.987-33.033 0-25.321 14.379-43.95 33.899-43.95 15.971 0 26.171 10.429 26.171 26.8 0 5.434-0.7 10.733-2.384 18.212h-38.574c-1.306 10.741 5.569 15.222 16.837 15.222 6.93 0 13.188-1.435 20.138-4.677l-3.221 18.426zm-10.891-43.912c0.116-1.538 2.06-13.217-9.013-13.217-6.167 0-10.579 4.717-12.375 13.217h21.388zm-123.42-5.005c0 9.367 4.542 15.818 14.842 20.675 7.892 3.709 9.112 4.812 9.112 8.172 0 4.616-3.483 6.699-11.188 6.699-5.816 0-11.225-0.908-17.467-2.921 0 0-2.554 16.321-2.671 17.101 4.421 0.967 8.375 1.85 20.275 2.191 20.566 0 30.059-7.829 30.059-24.746 0-10.18-3.971-16.15-13.737-20.637-8.167-3.759-9.113-4.584-9.113-8.046 0-4 3.246-6.059 9.542-6.059 3.821 0 9.046 0.421 14.004 1.125l2.771-17.179c-5.042-0.8-12.692-1.441-17.146-1.441-21.804 0-29.346 11.379-29.283 25.066m398.45 50.63h-18.438l0.917-6.893c-5.347 5.717-10.825 8.18-17.968 8.18-14.166 0-23.528-12.213-23.528-30.726 0-24.63 14.521-45.392 31.708-45.392 7.559 0 13.279 3.087 18.604 10.096l4.325-26.308h19.221l-14.841 91.043zm-28.746-17.109c9.075 0 15.45-10.283 15.45-24.953 0-9.405-3.629-14.509-10.325-14.509-8.837 0-15.115 10.315-15.115 24.875-1e-3 9.686 3.357 14.587 9.99 14.587zm-56.842-56.929c-2.441 22.917-6.773 46.13-10.162 69.063l-0.892 4.976h19.491c6.972-45.275 8.658-54.117 19.588-53.009 1.742-9.267 4.982-17.383 7.399-21.479-8.163-1.7-12.721 2.913-18.688 11.675 0.471-3.788 1.333-7.467 1.162-11.225l-17.898-1e-3m-160.42 0c-2.446 22.917-6.779 46.13-10.167 69.063l-0.888 4.976h19.5c6.963-45.275 8.646-54.117 19.57-53.009 1.75-9.267 4.991-17.383 7.399-21.479-8.154-1.7-12.717 2.913-18.679 11.675 0.471-3.788 1.324-7.467 1.162-11.225l-17.897-1e-3m254.57 68.241c-4e-3 -3.199 2.586-5.795 5.784-5.799h0.012c3.197-4e-3 5.793 2.586 5.796 5.783v0.016c-1e-3 3.201-2.595 5.795-5.796 5.797-3.201-2e-3 -5.795-2.596-5.796-5.797zm5.796 4.405c2.431 2e-3 4.402-1.969 4.403-4.399v-4e-3c3e-3 -2.433-1.968-4.406-4.399-4.408h-4e-3c-2.435 1e-3 -4.407 1.974-4.408 4.408 2e-3 2.432 1.975 4.403 4.408 4.403zm-0.784-1.871h-1.188v-5.082h2.153c0.446 0 0.909 9e-3 1.296 0.254 0.417 0.283 0.654 0.767 0.654 1.274 0 0.575-0.337 1.112-0.888 1.317l0.941 2.236h-1.32l-0.779-2.009h-0.87l1e-3 2.01zm0-2.879h0.653c0.246 0 0.513 0.019 0.729-0.1 0.196-0.125 0.296-0.361 0.296-0.588-9e-3 -0.21-0.114-0.404-0.287-0.523-0.204-0.117-0.542-0.084-0.763-0.084h-0.629l1e-3 1.295z" fill="#ffffff"></path></g></svg>
                            <svg width="80px" height="70px" viewBox="0 -140 780 780" enableBackground="new 0 0 780 500" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m168.38 169.35c-8.399-5.774-19.359-8.668-32.88-8.668h-52.346c-4.145 0-6.435 2.073-6.87 6.215l-21.264 133.48c-0.221 1.311 0.107 2.51 0.981 3.6 0.869 1.092 1.962 1.635 3.271 1.635h24.864c4.361 0 6.758-2.068 7.198-6.215l5.888-35.986c0.215-1.744 0.982-3.162 2.291-4.254 1.308-1.09 2.944-1.803 4.907-2.129 1.963-0.324 3.814-0.488 5.562-0.488 1.743 0 3.814 0.111 6.217 0.328 2.397 0.217 3.925 0.324 4.58 0.324 18.756 0 33.478-5.285 44.167-15.867 10.684-10.576 16.032-25.242 16.032-44.004 0-12.868-4.203-22.191-12.598-27.974zm-26.989 40.08c-1.094 7.635-3.926 12.649-8.506 15.049-4.581 2.403-11.124 3.599-19.629 3.599l-10.797 0.326 5.563-35.007c0.434-2.397 1.851-3.597 4.252-3.597h6.218c8.72 0 15.049 1.257 18.975 3.761 3.924 2.51 5.233 7.801 3.924 15.869z" fill="#003087"></path><path d="m720.79 160.68h-24.207c-2.406 0-3.822 1.2-4.254 3.601l-21.266 136.1-0.328 0.654c0 1.096 0.436 2.127 1.311 3.109 0.867 0.98 1.963 1.471 3.27 1.471h21.596c4.137 0 6.428-2.068 6.871-6.215l21.264-133.81v-0.325c-1e-3 -3.055-1.423-4.581-4.257-4.581z" fill="#009CDE"></path><path d="m428.31 213.36c0-1.088-0.438-2.126-1.305-3.105-0.875-0.981-1.857-1.475-2.945-1.475h-25.191c-2.404 0-4.367 1.096-5.891 3.271l-34.678 51.039-14.395-49.074c-1.096-3.487-3.492-5.236-7.197-5.236h-24.541c-1.093 0-2.074 0.492-2.941 1.475-0.875 0.979-1.309 2.019-1.309 3.105 0 0.439 2.127 6.871 6.379 19.303 4.252 12.436 8.832 25.85 13.74 40.246 4.908 14.393 7.469 22.031 7.688 22.896-17.886 24.432-26.825 37.518-26.825 39.26 0 2.838 1.415 4.254 4.253 4.254h25.191c2.398 0 4.36-1.088 5.89-3.27l83.427-120.4c0.433-0.432 0.65-1.192 0.65-2.29z" fill="#003087"></path><path d="m662.89 208.78h-24.865c-3.057 0-4.904 3.6-5.559 10.799-5.678-8.722-16.031-13.089-31.084-13.089-15.703 0-29.064 5.89-40.076 17.668-11.016 11.778-16.521 25.632-16.521 41.552 0 12.871 3.762 23.121 11.285 30.752 7.525 7.639 17.611 11.451 30.266 11.451 6.324 0 12.758-1.311 19.301-3.926 6.543-2.617 11.664-6.105 15.379-10.469 0 0.219-0.223 1.197-0.654 2.941-0.441 1.748-0.656 3.061-0.656 3.926 0 3.494 1.414 5.234 4.254 5.234h22.576c4.139 0 6.541-2.068 7.193-6.215l13.416-85.39c0.215-1.31-0.111-2.507-0.982-3.599-0.877-1.088-1.965-1.635-3.273-1.635zm-42.694 64.454c-5.562 5.453-12.27 8.178-20.121 8.178-6.328 0-11.449-1.742-15.377-5.234-3.928-3.482-5.891-8.281-5.891-14.395 0-8.064 2.727-14.886 8.182-20.447 5.445-5.562 12.213-8.342 20.283-8.342 6.102 0 11.174 1.799 15.213 5.396 4.031 3.6 6.055 8.562 6.055 14.889-2e-3 7.851-2.783 14.505-8.344 19.955z" fill="#009CDE"></path><path d="m291.23 208.78h-24.865c-3.058 0-4.908 3.6-5.563 10.799-5.889-8.722-16.25-13.089-31.081-13.089-15.704 0-29.065 5.89-40.078 17.668-11.016 11.778-16.521 25.632-16.521 41.552 0 12.871 3.763 23.121 11.288 30.752 7.525 7.639 17.61 11.451 30.262 11.451 6.104 0 12.433-1.311 18.975-3.926 6.543-2.617 11.778-6.105 15.704-10.469-0.875 2.615-1.309 4.906-1.309 6.867 0 3.494 1.417 5.234 4.253 5.234h22.574c4.141 0 6.543-2.068 7.198-6.215l13.413-85.39c0.215-1.31-0.111-2.507-0.981-3.599-0.873-1.088-1.962-1.635-3.269-1.635zm-42.695 64.616c-5.563 5.35-12.382 8.016-20.447 8.016-6.329 0-11.4-1.742-15.214-5.234-3.819-3.482-5.726-8.281-5.726-14.395 0-8.064 2.725-14.886 8.18-20.447 5.449-5.562 12.211-8.343 20.284-8.343 6.104 0 11.175 1.8 15.214 5.397 4.032 3.6 6.052 8.562 6.052 14.889-1e-3 8.07-2.781 14.779-8.343 20.117z" fill="#003087"></path><path d="m540.04 169.35c-8.398-5.774-19.355-8.668-32.879-8.668h-52.02c-4.363 0-6.764 2.073-7.197 6.215l-21.266 133.48c-0.221 1.311 0.107 2.51 0.982 3.6 0.865 1.092 1.961 1.635 3.27 1.635h26.826c2.617 0 4.361-1.416 5.236-4.252l5.889-37.949c0.217-1.744 0.98-3.162 2.291-4.254 1.309-1.09 2.943-1.803 4.908-2.129 1.961-0.324 3.812-0.488 5.561-0.488 1.744 0 3.814 0.111 6.215 0.328 2.398 0.217 3.93 0.324 4.58 0.324 18.76 0 33.479-5.285 44.168-15.867 10.688-10.576 16.031-25.242 16.031-44.004 1e-3 -12.868-4.2-22.192-12.595-27.974zm-33.533 53.819c-4.799 3.271-11.998 4.906-21.592 4.906l-10.471 0.328 5.562-35.008c0.432-2.396 1.85-3.598 4.252-3.598h5.887c4.799 0 8.615 0.219 11.455 0.654 2.83 0.438 5.561 1.799 8.178 4.088 2.619 2.291 3.926 5.619 3.926 9.979 0 9.164-2.402 15.377-7.197 18.651z" fill="#009CDE"></path></g></svg>
                        </div>
                        <div className="flex flex-col md:flex-col lg:flex-row justify-start items-center mb-4 md:space-x-4 lg:space-x-4 ">
                            <h2 className="text-lg text-center font-semibold mb-2">Get Deliveries With FreshCart </h2>
                            <img src="public\5a902db97f96951c82922874.png" alt="App Store" className="h-10" />
                            <img src="public\5a902dbf7f96951c82922875.png" alt="Google Play" className="h-14" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
