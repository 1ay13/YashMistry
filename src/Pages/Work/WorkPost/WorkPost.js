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
              <div className="flex flex-col md:w-[70%] gap-0 mx-2">
                {blog.cover[0] && (
                  <Vimeo
                    video={blog.cover[0]}
                    responsive
                    className="p-2"
                  ></Vimeo>
                )}

                <img src={blog.cover[1]} alt="" className="p-2" />
                <img src={blog.cover[2]} alt="" className="p-2" />
                <img src={blog.cover[3]} alt="" className="p-2" />
                <img src={blog.cover[4]} alt="" className="p-2" />
                <img src={blog.cover[5]} alt="" className="p-2" />
                {blog.cover[6] && (
                  <img src={blog.cover[6]} alt="" className="p-2" />
                )}
                {blog.cover[7] && (
                  <img src={blog.cover[7]} alt="" className="p-2" />
                )}
                {blog.cover[8] && (
                  <img src={blog.cover[8]} alt="" className="p-2" />
                )}
                {blog.cover[9] && (
                  <img src={blog.cover[9]} alt="" className="p-2" />
                )}
                {blog.cover[10] && (
                  <img src={blog.cover[10]} alt="" className="p-2" />
                )}
                {blog.cover[11] && (
                  <img src={blog.cover[11]} alt="" className="p-2" />
                )}
                {blog.cover[12] && (
                  <img src={blog.cover[12]} alt="" className="p-2" />
                )}
                {blog.cover[13] && (
                  <img src={blog.cover[13]} alt="" className="p-2" />
                )}
                {blog.cover[14] && (
                  <img src={blog.cover[14]} alt="" className="p-2" />
                )}
                {blog.cover[15] && (
                  <img src={blog.cover[15]} alt="" className="p-2" />
                )}
                {blog.cover[16] && (
                  <img src={blog.cover[16]} alt="" className="p-2" />
                )}
                {blog.cover[17] && (
                  <img src={blog.cover[17]} alt="" className="p-2" />
                )}
                {blog.cover[18] && (
                  <img src={blog.cover[18]} alt="" className="p-2" />
                )}
                {blog.cover[19] && (
                  <img src={blog.cover[19]} alt="" className="p-2" />
                )}
                {blog.cover[20] && (
                  <img src={blog.cover[20]} alt="" className="p-2" />
                )}
              </div>
            </div>
            <div className="navbtn flex justify-between mx-7 my-1 text-white mb-3">
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
      <div className="mx-4 md:mx-4 py-8 md:p-0">
        <WorkPage data={data} />
      </div>
    </div>
  );
};

export default WorkPost;
