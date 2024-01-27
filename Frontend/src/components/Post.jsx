import React from "react";
import img from "../assets/react.svg";
import char from "../assets/char.jpg";
import { blogData } from "../Blog";

function Post() {
  return (
    <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row my-10">
      <div className="h-full w-full md:h-[200px] md:w-[300px]">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Laptop"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {blogData[0].title}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="ml-2 h-4 w-4"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {blogData[0].description}
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              {blogData[0].date}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              {blogData[0].author}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              Know More
            </span>
          </div>
        </div>
      </div>
    </div>
    // <div className="w-full lg:w-4/6 mt-16 font-poppi">
    //   <div className="top flex gap-2">
    //     <div className="profile border h-6 w-6 rounded-full border-brown-200">
    //       <p>
    //         <img src={img} alt="" />
    //       </p>
    //     </div>

    //     <div className="user font-sans font-bold">
    //       <p>Yubraj Khatri</p>
    //     </div>
    //     <div className="Date opacity-50">
    //       <p>jan 9</p>
    //     </div>
    //   </div>

    //   <div className="middle mt-2 flex gap-2">
    //     <div className="left mr-16">
    //       <div className="title font-[inherit]">
    //         <h1>
    //           The More You Love Yourself, the Less You Will Need Others To.
    //         </h1>
    //       </div>
    //       <div className="discription  hidden lg:block font-serif">
    //         <p>
    //           There was a guy I knew in university. He was always in good
    //           spirits and made the most of any situation thrown at him. In all
    //           the time I spent around him, I never once caught sight of him
    //           complaining about anything. He was so laid back and easy to get
    //           along with.
    //         </p>
    //       </div>
    //       <div className="last flex  justify-between mt-2">
    //         <div className="left flex gap-2">
    //           <div className="category bg-slate-200  border rounded-full p-1">
    //             self love
    //           </div>
    //           <div className="min read">5 min read</div>
    //         </div>
    //         <div className="right flex gap-2 ">
    //           <div className="save ">
    //             <p className="text-2xl">
    //               <ion-icon name="bookmark-outline"></ion-icon>
    //             </p>
    //           </div>
    //           <div className="ignore">
    //             <p className="text-2xl">
    //               <ion-icon name="remove-circle-outline"></ion-icon>
    //             </p>
    //           </div>
    //           <div className="more">
    //             <p className="text-2xl">
    //               <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="right  w-60">
    //       <img
    //         src={char}
    //         alt=""
    //         style={{ width: "100%", height: "100%", objectFit: "cover" }}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Post;
