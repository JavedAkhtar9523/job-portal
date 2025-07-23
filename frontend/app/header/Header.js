import Image from "next/image";
import LinkButton from "../button/Button";
import "./Header.css";
export default function Header() {
  return (
    <div className="header ">
      <div className="sm:px-7 px-2 mx-3 sm:mx-10 p-2 py-2 flex justify-between items-center">
        <Image
          src="/Finalloo.svg"
          width={40}
          height={40}
          className="mx-4"
          alt="Spreads Logo"
        />
        <div>
          <LinkButton redirection="/signup" name="Sign in" />
          <LinkButton
            redirection="/signup"
            linkclassname="header-button-join-now"
            name="Join Now"
          />
        </div>
      </div>
    </div>
  );
}
