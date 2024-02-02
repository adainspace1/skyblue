
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link to={"/"} className="text-3xl">
              <span className="text-adainyellow">SKY</span>BLUE.
            </Link>
            <p className="max-w-xs mt-4 text-sm">
              Quality Products At Its Best
            </p>
            <div className="flex mt-8 space-x-6">
              <Link
                to=""
                target="_blank"
              >
                {/* <FacebookOutlinedIcon className="hover:text-green-600 hover:-translate-y-1 transition-all" /> */}
              </Link>
             
              <Link
                to=""
                target="_blank"
              >
                {/* <LinkedInIcon className="hover:text-green-600 hover:-translate-y-1 transition-all" /> */}
              </Link>
              <Link href="" target="_blank">
                {/* <TwitterIcon className="hover:text-green-600 hover:-translate-y-1 transition-all" /> */}
              </Link>
              <Link
                to=""
                target="_blank"
              >
                {/* <InstagramIcon className="hover:text-green-600 hover:-translate-y-1 transition-all" /> */}
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  to="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About
                </Link>
              
                <Link
                  to="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  History
                </Link>
                <Link
                  to="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Careers
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  to="/purewater"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Sachette Water
                </Link>
                <Link
                  to="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  SkyBread
                </Link>
                <Link
                  to="/purewater"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                 Bottle/Table Water
                </Link>
                <Link
                  to="/printing"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  SkyPrinting
                </Link>
               
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  to="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Contact
                </Link>
                <Link
                  to="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  FAQs
                </Link>
                <Link
                  to="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Live Chat
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  to="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  to="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Returns Policy
                </Link>
                <Link
                  to="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Accessibility
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© 2024 SKYBLUE - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
