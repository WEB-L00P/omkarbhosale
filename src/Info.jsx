import React from "react";

const Info = () => {
  return (
    <>
      <div>
        <h1 class="text-lg text-center py-2 font-extrabold">Omkar Bhosale</h1>
        <p class="text-center font-medium text-sm">
          Full-Stack Developer | Content Creator
        </p>

        <div class="text-center mt-6">
          <a href="mailto:techomkarbusiness@gmail.com">
            <i class="transition-all duration-500 fa-solid fa-envelope mx-2 text-3xl hover:text-red-400"></i>
          </a>

          <a href="https://www.linkedin.com/in/omkar-bhosale-70795a24b">
            <i class="transition-all duration-500 fa-brands fa-linkedin mx-2 text-3xl hover:text-blue-600"></i>
          </a>

          <a href="https://www.youtube.com/channel/UCbwENYkmgW0eWcnDB28lgnQ">
            <i class="transition-all duration-500 fa-brands fa-youtube mx-2 text-3xl hover:text-red-600"></i>
          </a>

          <a href="https://www.instagram.com/techomkar/">
            <i class="transition-all duration-500 fa-brands fa-instagram mx-2 text-3xl hover:text-red-300"></i>
          </a>

          <a href="https://twitter.com/TechOmkar">
            <i class="transition-all duration-500 fa-brands fa-twitter mx-2 text-3xl hover:text-blue-300"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Info;
