import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Blogs = (props) => {
  const router = useRouter();
  const isUserProfile = router.pathname.includes("/userprofile");

  const linkText = isUserProfile
    ? "Back to all blogs"
    : "See all from this user";
  const linkPath = isUserProfile ? "/" : "/userprofile/profile";

  return (
    <div className="bg-white home-blogs mb-4">
      <div className="flex flex-col gap-4">
        <div className="author-info flex gap-3">
          <img
            src={props.imgURL}
            alt="Elon Musk"
            className="blog-author-image"
          />
          <div className="author-info flex flex-col gap-2 justify-end">
            <h4 className="blog-title">{props.blogTitle}</h4>
            <h2 className="author-name">{props.author}</h2>
          </div>
        </div>
        <p className="blog-para text-base font-normal text-gray-600">
          {props.blogContent}
        </p>
        <Link
          className="text-base font-normal blog-user-btn"
          href={linkPath}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
