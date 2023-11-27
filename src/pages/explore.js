import InputBox from "../components/Input";

const Explore = () => {
  return (
    <>
      <div className="sm:w-8/12 w-screen sm:mx-auto mb-8 ">
        <div className="sm:w-full w-11/12  flex justify-around" >
           <div className="sm:w-7/12 w-full ml-8 lg:w-5/12">
           <InputBox type="search" lable="false" placeholder="Search..."/>
           </div>
            
            
        
        </div>
      
        {/* posts */}
        <div className="px-px md:px-3">
          {/* user following for mobile only */}
          <ul
            className="flex md:hidden justify-around space-x-8 border-t 
          text-center p-2 text-gray-600 leading-snug text-sm"
          >
            <li>
              <span className="text-gray-800 block ">136</span>
              posts
            </li>
            <li>
              <span className="font-semibold text-gray-800 block ">40.5k</span>
              followers
            </li>
            <li>
              <span className="font-semibold text-gray-800 block">302</span>
              following
            </li>
          </ul>
          {/* insta freatures */}
          <ul
            className="flex items-center justify-around md:justify-center space-x-12  
              uppercase tracking-widest font-semibold text-xs text-gray-600
              border-t"
          >
            {/* posts tab is active */}
            <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
              <a className="inline-block p-3" href="#">
                <i className="fas fa-th-large text-xl md:text-xs" />
                <span className="hidden md:inline text-black font-bold">
                travelers
                </span>
              </a>
            </li>
            <li>
              <a className="inline-block p-3" href="#">
                <i className="far fa-square text-xl md:text-xs" />
                <span className="hidden md:inline text-black font-bold">
                  places
                </span>
              </a>
            </li>
            <li>
              <a className="inline-block p-3" href="#">
                <span className="hidden md:inline text-black font-bold">
                  following
                </span>
              </a>
            </li>
          </ul>
          {/* flexbox grid */}
          <div className="flex flex-wrap -mx-px md:-mx-3">
            {/* column */}
            <div className="w-1/3 p-px md:px-3">
              {/* post 1*/}
              <a href="#">
                <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                  {/* post image*/}
                  <img
                    className="w-full h-full absolute left-0 top-0 object-cover"
                    src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="image"
                  />
                  <i className="fas fa-square absolute right-0 top-0 m-1" />
                  {/* overlay*/}
                  <div
                    className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                          left-0 top-0 hidden"
                  >
                    <div
                      className="flex justify-center items-center 
                              space-x-4 h-full"
                    >
                      <span className="p-2">
                        <i className="fas fa-heart" />
                        412K
                      </span>
                      <span className="p-2">
                        <i className="fas fa-comment" />
                        2,909
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
            <div className="w-1/3 p-px md:px-3">
              <a href="#">
                {/* post 2 */}
                <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                  <img
                    className="w-full h-full absolute left-0 top-0 object-cover"
                    src="https://images.unsplash.com/photo-1498409570040-05bf6d3dd5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="image"
                  />
                  {/* overlay*/}
                  <div
                    className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                          left-0 top-0 hidden"
                  >
                    <div
                      className="flex justify-center items-center 
                              space-x-4 h-full"
                    >
                      <span className="p-2">
                        <i className="fas fa-heart" />
                        412K
                      </span>
                      <span className="p-2">
                        <i className="fas fa-comment" />
                        1,993
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
            <div className="w-1/3 p-px md:px-3">
              <a href="#">
                <article className="post bg-gray-100 text-white relative pb-full  md:mb-6">
                  <img
                    className="w-full h-full absolute left-0 top-0 object-cover"
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="image"
                  />
                  {/* overlay*/}
                  <div
                    className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                          left-0 top-0 hidden"
                  >
                    <div
                      className="flex justify-center items-center 
                              space-x-4 h-full"
                    >
                      <span className="p-2">
                        <i className="fas fa-heart" />
                        112K
                      </span>
                      <span className="p-2">
                        <i className="fas fa-comment" />
                        2,090
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
            <div className="w-1/3 p-px md:px-3">
              <a href="#">
                <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                  <img
                    className="w-full h-full absolute left-0 top-0 object-cover"
                    src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="image"
                  />
                  <i className="fas fa-video absolute right-0 top-0 m-1" />
                  {/* overlay*/}
                  <div
                    className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                          left-0 top-0 hidden"
                  >
                    <div
                      className="flex justify-center items-center 
                              space-x-4 h-full"
                    >
                      <span className="p-2">
                        <i className="fas fa-heart" />
                        841K
                      </span>
                      <span className="p-2">
                        <i className="fas fa-comment" />
                        909
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
            <div className="w-1/3 p-px md:px-3">
              <a href="#">
                <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                  <img
                    className="w-full h-full absolute left-0 top-0 object-cover"
                    src="https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                    alt="image"
                  />
                  {/* overlay*/}
                  <div
                    className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                          left-0 top-0 hidden"
                  >
                    <div
                      className="flex justify-center items-center 
                              space-x-4 h-full"
                    >
                      <span className="p-2">
                        <i className="fas fa-heart" />
                        120K
                      </span>
                      <span className="p-2">
                        <i className="fas fa-comment" />
                        3,909
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Explore;
