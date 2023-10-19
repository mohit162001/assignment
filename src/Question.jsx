import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <section>
              <div className="que-heading">
                <h4>Frequent Questions</h4>
                <h1>Do you have any questions</h1>
              </div>
              <div className="list-items">
                <ul class="list-unstyled">
                  <li>
                    <i class="fa-solid fa-circle-plus"></i>How to contact with
                    riders emergency?
                  </li>
                  <li>
                    <i class="fa-solid fa-circle-plus"></i>App installation
                    failed, how to update system information?
                  </li>
                  <li>
                    <i class="fa-solid fa-circle-plus"></i>Website response
                    taking time, How to improve?
                  </li>
                  <p>
                    An FAQ is a list of frequently asked questions FAQs and
                    answers on a particular topic also known as Questions and
                    Answers Q&A or Frequently Asked Questions. The format is
                    often used in articles, websites, email lists, and online
                    forums where common questions tend to recur, for example
                    through posts or queries by new users related to common
                    knowledge gaps. The purpose of an FAQ is generally provide
                    information.
                  </p>
                  <li>
                    <i class="fa-solid fa-circle-plus"></i>New update fix all
                    bugs and issues.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
