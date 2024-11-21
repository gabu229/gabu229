import { Bowlby_One } from "next/font/google";

const boldFont = Bowlby_One({ subsets: ["latin"], weight: "400" });

const PrimaryButton = ({ children }) => {
  return (
    <button
      className={`w-auto ${boldFont.className} text-nowrap text-base md:text-xl`}
    >
      {children}
    </button>
  );
};

export { PrimaryButton };
