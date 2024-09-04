import Link from "next/link";
import { handleSignIn } from "./handleSignIn";
import { useSession } from "next-auth/react";
import { usePlausible } from "next-plausible";

function CTAButton(props) {
  const { plausibleNameBeforeLogin, plausibleNameAfterLogin, ctaName = "Create page in 30 seconds", customStyle  } = props;

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
            handleSignIn(e);
          }}
        >
          {ctaName}
        </Link>
      ) : (
        <Link
          href="/admin"
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
