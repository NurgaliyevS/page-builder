import Link from "next/link";
import { handleSignIn } from "./handleSignIn";
import { useSession } from "next-auth/react";
import { usePlausible } from "next-plausible";

function CTAButton(props) {
  const { plausibleNameBeforeLogin, plausibleNameAfterLogin, ctaName = "Create page in 30 seconds"  } = props;

  const { data: session } = useSession();
  const plausible = usePlausible();

  return (
    <>
      {!session?.user ? (
        <Link
          href="#"
          className="btn btn-primary btn-wide no-underline"
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
          href="/meal"
          className="btn btn-primary btn-wide no-underline"
          title="Meal page"
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
