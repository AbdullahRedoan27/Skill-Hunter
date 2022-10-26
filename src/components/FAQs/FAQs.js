import React from "react";

const FAQs = () => {
  return (
    <div>
      <div className="border-2 rounded-lg lg:w-1/4 mx-auto bg-gray-900 text-white">
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            1. How long this course will run?
          </div>
          <div className="collapse-content">
            <p>
              This course will take place for 6 months only. In this time span,
              you will learn MERNStack.
            </p>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg lg:w-1/4 mx-auto bg-gray-900 text-white">
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            2. What will you learn from this course?
          </div>
          <div className="collapse-content">
            <p>
              Basically this course is Frontend oriented. We will focus on
              Frontend Developing manily. Here you will learn HTML, CSS,
              Javascript, React, React-Router, MongoDB, FireBase, NodeJs etc.
            </p>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg lg:w-1/4 mx-auto bg-gray-900 text-white">
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            3. What about support?
          </div>
          <div className="collapse-content">
            <p>
              We have a dedicated team to help and give support to our students. Our support team is there for you 24/7. So don't get tensed about support.
            </p>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg lg:w-1/4 mx-auto bg-gray-900 text-white">
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            4. What will be my benefit after completing this course?
          </div>
          <div className="collapse-content">
            <p>
              We all know that this is the era of technology. And you can never think internet without websites. So, it is very important for us to have a little knowledge about websites. By completing this course, you will learn how to create a website, maintain it and fulfill the necessity of people. Besides you can try for job in any kind of IT farm or company or big giant companies like Google, Meta etc.
            </p>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg lg:w-1/4 mx-auto bg-gray-900 text-white">
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            5. Is it guaranteed that I will get a job after finishing this course?
          </div>
          <div className="collapse-content">
            <p>
              None in this world can guarantee you anything. Whether you will get a job or not, it completly depends on you. It depends on how you give effort, how much you work hard etc. So, we can't assure you about job, but it is proved that whoever works hard, his sacrifice always pays off. So work hard and work hard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
