import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import Faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments position">
      <ApprovalCard>
        <h4>Warning</h4>
        Are you sure!!
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Dan"
          time="today at 6:00 pm"
          post="nice"
          src={Faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Doe"
          time="today at 1:00 am"
          post="great"
          src={Faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Fui"
          time="yesterday at 5:00 pm"
          post="blow"
          src={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
