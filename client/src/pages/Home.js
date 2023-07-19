import React from 'react';

const Home = () => {
  return (
      <main className="bg-white">
        <div className="container">
          <div className="mt-4">
            <div className="card bg-white text-black mb-4">
              <div className="card-body">
                <h2 className="card-title">About</h2>
                <p className="card-text">
                  Camarco Consulting LLC is a trusted provider of consulting and advisory services for businesses across diverse industries. Our team of seasoned consultants specializes in optimizing operations, streamlining processes, and developing effective strategies to help clients achieve their goals. In addition to our core services in business process optimization, strategic planning, business analysis, technology consulting, and web development expertise, we offer comprehensive solutions to empower clients in enhancing their online presence and leveraging the power of digital platforms to drive growth.
                </p>
                <p className="card-text">
                  We understand that each business is unique, and we tailor our solutions to meet specific needs. We are committed to delivering top-notch solutions that drive efficiency, productivity, and success. 
                </p>
              </div>
            </div>
          </div>

        {/* <div className="row">
          <div className="col">
            <div className="card bg-white text-black mb-4">
              <div className="card-body">
                <h2 className="card-title">Our Expertise</h2>
                <p className="card-text">
                  Our expertise is enhanced by our CEO, Mickey Camarco, who brings valuable insights from their experience as a valued customer and employee of Nintex. This firsthand experience allows us to offer comprehensive consulting and advisory services tailored to the specific needs of businesses. We understand how to effectively leverage Nintex's offerings to optimize processes, automate workflows, and drive operational efficiency.
                </p>
                <p className="card-text">
                  By staying up-to-date with the latest industry trends and best practices, we ensure that our clients receive the most relevant and effective solutions. Our team's diverse skill set enables us to address complex business challenges and deliver measurable results.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col">
            <div className="card bg-white text-black mb-4">
              <div className="card-body">
                <h2 className="card-title">Approach</h2>
                <p className="card-text">
                  At Camarco Consulting LLC, we follow a comprehensive approach to provide value-added solutions to our clients. Our approach includes:
                </p>
                <ul>
                  <li>Thorough assessment: We conduct a detailed analysis of your business processes, operations, and challenges to identify areas for improvement.</li>
                  <li>Collaborative planning: We work closely with your team to develop customized strategies and action plans that align with your business objectives.</li>
                  <li>Implementation and support: We assist in implementing the recommended solutions and provide ongoing support to ensure successful execution and long-term sustainability.</li>
                  <li>Continuous improvement: We continuously monitor and evaluate the effectiveness of our solutions, making adjustments as needed to drive continuous improvement.</li>
                </ul>
                <p className="card-text">
                  Our client-centric approach, combined with our expertise and commitment to excellence, sets us apart as a trusted consulting partner for businesses looking to achieve sustainable growth and success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card bg-white text-black mb-4">
              <div className="card-body">
                <h2 className="card-title">Partnerships</h2>
                <p className="card-text">
                  As part of our commitment to providing cutting-edge solutions, we have partnered with Nintex, a leading provider of process automation and management solutions. This partnership allows us to offer our clients access to Nintex's advanced tools and technologies, which can significantly enhance operational efficiency, productivity, and business growth.
                </p>
                <p className="card-text">
                  Nintex offers a range of solutions, including process automation, workflow management, document generation, and more. Through our partnership, we leverage Nintex's expertise to streamline and optimize your business processes, driving cost savings and improving overall performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
