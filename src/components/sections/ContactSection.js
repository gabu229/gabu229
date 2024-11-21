import Link from "next/link";
import ContactForm from "../misc/ContactForm";

const ContactSection = ({ boldFont }) => {
  return (
    <div
      className="w-full bg-[var(--battleship-gray)]"
      id="contactSection"
    >
      <section className="w-full bg-[var(--linen)] rounded-b-3xl border-4o overflow-hidden z-30">
        <div className="w-full min-h-[90svh] py-20 flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full flex-1">
            <p
              className={`${boldFont.className} text-wrap text-7xl xl:text-9xl text-center md:text-left uppercase leading-normal`}
            >
              Get
              <br />
              in
              <br />
              touch
            </p>
          </div>
          <div className="w-full flex-1">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="w-full bg-[var(--battleship-gray)] text-white -z-10">
        <div className="w-full min-h-[10svh] flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="w-full text-center md:text-start py-2 order-last md:order-first">&copy; 2024. Made with 💛 for the game.</div>
          <div className="w-full py-2 flex justify-center md:justify-start gap-4">
            <Link
              href="https://github.com/gabu229"
              target="_blank"
              className="font-semibold"
            >
              Github
            </Link>
            <Link
              href="https://x.com/orie_gabriel"
              target="_blank"
              className="font-semibold"
            >
              X
            </Link>
            <Link
              href="https://linkedin.com/gabrielorie"
              target="_blank"
              className="font-semibold"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
