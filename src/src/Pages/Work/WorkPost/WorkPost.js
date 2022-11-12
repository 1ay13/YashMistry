import Vimeo from "@u-wave/react-vimeo";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import WorkPage from "../../../Components/WorkPage/WorkPage";
import { data } from "../../../Data/Data";

const WorkPost = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  useEffect(() => {
    let blog = data.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <div className="md:px-36 lg:px-52 xl:px-72 bg-black">
      <div className="font-altone flex justify-center">
        {blog ? (
          <div className="flex flex-col">
            <div className="md:flex md:flex-row-reverse mx-0 space-y-4">
              <div className="p-4 mx-4 md:mx-auto md:mr-5 bg-zinc-900 mt-6 h-max md:w-[30%]">
                <h1 className="text-white text-xl mb-5 font-bristone tracking-wider	">
                  {blog.title}
                </h1>
                <p className="text-white font-altone">{blog.description}</p>
              </div>
              <div className="flex flex-col md:w-[70%] gap-1 mx-2">
                <Vimeo video={blog.cover[0]} responsive></Vimeo>
                <img src={blog.cover[0]} alt="" className="p-2" />
                <img src={blog.cover[1]} alt="" className="p-2" />
                <img src={blog.cover[2]} alt="" className="p-2" />
              </div>
            </div>
            <div className="navbtn flex justify-between mx-7 text-white">
              <div className="back">
                <Link to="/work" className="back-1">
                  Back to Work
                </Link>
              </div>
              <div className="btn ">
                <Link
                  className="btn-1"
                  to={`/work/${
                    Number(id) > 1
                      ? Number(id) - 1
                      : Number(id) + (data.length - 1)
                  }`}
                >
                  Prev
                </Link>
                <Link
                  className="btn-2"
                  to={`/work/${
                    Number(id) < data.length
                      ? Number(id) + 1
                      : Number(id) - (data.length - 1)
                  }`}
                >
                  / Next
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="mx-4 md:mx-4 py-8  md:p-0">
        <WorkPage data={data} />
      </div>
    </div>
  );
};

export default WorkPost;
