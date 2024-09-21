import Link from "next/link";
import { handleSignIn } from "./handleSignIn";
import { useSession } from "next-auth/react";
import { usePlausible } from "next-plausible";

function CTAButton(props) {
  const { plausibleNameBeforeLogin, plausibleNameAfterLogin, ctaName = "Create page", customStyle, personalLink  } = props;

  const { data: session } = useSession();
  const plausible = usePlausible();

  return (
    <>
      {!session?.user ? (
        <Link
          href="#"
          className={`btn btn-primary btn-wide no-underline ${customStyle}`}
          onClick={(e) => {
            e.preventDefault();
            plausible(plausibleNameBeforeLogin);
            handleSignIn(e, personalLink);
          }}
        >
          {ctaName}
        </Link>
      ) : (
        <Link
          href={"/admin" + (personalLink ? `?personalLink=${personalLink}` : "")}
          className={`btn btn-primary btn-wide no-underline ${customStyle}`}
          title="Admin page"
          rel="nofollow"
          onClick={() => {
            plausible(plausibleNameAfterLogin);
          }}
        >
          {ctaName}
        </Link>
      )}
    </>
  );
}

export default CTAButton;
