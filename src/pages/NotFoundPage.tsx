import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import ButtonComponent from "../components/shared/ButtonComponent";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handlePreviousPage = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/", { replace: true });
  };

  return (
    <main className="relative left-1/2 flex min-h-[70vh] w-screen -translate-x-1/2 items-center overflow-hidden bg-[#f6f8fc]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[#1F3F93]/10"
      />

      <div className="relative mx-auto flex w-full max-w-7xl items-center px-5 py-20 sm:px-8 md:py-24 lg:min-h-[70vh] lg:px-12 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 lg:right-3 lg:left-auto lg:translate-x-0 xl:right-5"
        >
          <span className="animate-404 block select-none whitespace-nowrap text-[125px] leading-none font-bold tracking-[-0.1em] text-[#1F3F93] sm:text-[175px] md:text-[225px] lg:text-[275px] xl:text-[335px]">
            404
          </span>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
          <div className="mb-6 flex items-center justify-center gap-4 lg:justify-start">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-[#1F3F93] sm:w-12"
            />

            <span className="text-xs font-semibold tracking-[0.22em] text-[#1F3F93] uppercase sm:text-sm">
              Error 404
            </span>

            <span
              aria-hidden="true"
              className="h-px w-10 bg-[#1F3F93] sm:w-12 lg:hidden"
            />
          </div>

          <h1 className="text-4xl leading-tight font-bold text-[#102344] sm:text-5xl lg:text-6xl">
            This page is currently
            <span className="block text-[#1F3F93]">unavailable</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
            The page may have been moved, removed, or the address may be
            incorrect. You can return to the homepage or go back to the previous
            page.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <ButtonComponent
              to="/"
              icon={<GoArrowRight aria-hidden="true" className="text-xl" />}
              iconPosition="right"
              bg="bg-[#1F3F93]"
              hoverBg="hover:bg-[#183578]"
              textColor="text-white"
              rounded="rounded-lg"
              height="h-12"
              padding="px-6"
              fontSize="text-sm sm:text-base"
              fontWeight="font-semibold"
              className="shadow-[0_10px_25px_rgba(31,63,147,0.18)] hover:shadow-[0_14px_30px_rgba(31,63,147,0.25)]"
            >
              Back to Home
            </ButtonComponent>

            <ButtonComponent
              onClick={handlePreviousPage}
              icon={<GoArrowLeft aria-hidden="true" className="text-xl" />}
              iconPosition="left"
              bg="bg-white/80"
              hoverBg="hover:bg-white"
              textColor="text-[#102344]"
              rounded="rounded-lg"
              height="h-12"
              padding="px-6"
              fontSize="text-sm sm:text-base"
              fontWeight="font-semibold"
              className="border border-[#102344]/15 shadow-none backdrop-blur-sm hover:border-[#1F3F93]/30 hover:text-[#1F3F93]"
              withShine={false}
            >
              Previous Page
            </ButtonComponent>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;