import React from "react";
import { useAppDispatch } from "../../hooks";
import { updateInputText } from "../../store/slices/mainSlice";

const SignUp = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>
        <div>
          <p>Welcome back!</p>
          <Link to="login">
            <button type="button">Sig in</button>
          </Link>
        </div>
        <div>
          <form>
            <p>Create account</p>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => dispatch(updateInputText(e.target))}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
