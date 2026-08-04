import { useId, useState, type KeyboardEvent } from "react";
import { CheckCircle } from "lucide-react";

import TitleComponent from "../../components/shared/TitleComponent";
import { applicationProcessData } from "../../data/applicationProcessData";

const ApplicationProcess = () => {
  const sectionTitleId = useId();
  const tabsId = useId();

  const [activeStep, setActiveStep] = useState<number>(
    () => applicationProcessData[0]?.id ?? 0,
  );

  const activeIndex = applicationProcessData.findIndex(
    (item) => item.id === activeStep,
  );

  const activeItem =
    activeIndex >= 0
      ? applicationProcessData[activeIndex]
      : applicationProcessData[0];

  if (!activeItem) {
    return null;
  }

  const ActiveIcon = activeItem.icon;
  const lastStepIndex = applicationProcessData.length - 1;
  const safeActiveIndex = Math.max(activeIndex, 0);

  const progressPercentage =
    lastStepIndex > 0 ? (safeActiveIndex / lastStepIndex) * 75 : 0;

  const getNextStepIndex = (
    key: string,
    currentIndex: number,
  ): number | null => {
    switch (key) {
      case "ArrowRight":
      case "ArrowDown":
        return (currentIndex + 1) % applicationProcessData.length;

      case "ArrowLeft":
      case "ArrowUp":
        return (
          (currentIndex - 1 + applicationProcessData.length) %
          applicationProcessData.length
        );

      case "Home":
        return 0;

      case "End":
        return lastStepIndex;

      default:
        return null;
    }
  };

  const handleStepKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    const nextIndex = getNextStepIndex(event.key, currentIndex);

    if (nextIndex === null) {
      return;
    }

    const nextItem = applicationProcessData[nextIndex];

    if (!nextItem) {
      return;
    }

    event.preventDefault();
    setActiveStep(nextItem.id);

    requestAnimationFrame(() => {
      document.getElementById(`${tabsId}-tab-${nextItem.id}`)?.focus();
    });
  };

  return (
    <section
      aria-labelledby={sectionTitleId}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
      className="relative overflow-hidden pb-16 md:pb-20 lg:pb-24 xl:pb-28"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-80 w-80 rounded-full"
      />

      <div
        id="process"
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full"
      />

      <div className="relative mx-auto">
        <div id={sectionTitleId}>
          <TitleComponent
            title="Our Application Process"
            description="A transparent, structured journey toward joining the LSA family."
          />
        </div>

        <div className="mt-16 rounded-4xl border border-slate-200 bg-white shadow-sm md:p-10">
          <div
            role="tablist"
            aria-label="Application process steps"
            className="relative grid gap-6 md:grid-cols-4"
          >
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-10.5 hidden h-0.75 rounded-full bg-[#d8e0f3] md:block"
            />

            <div
              aria-hidden="true"
              className="absolute left-[12.5%] top-10.5 hidden h-0.75 rounded-full bg-linear-to-r from-blue-01 to-red-01 transition-[width] duration-500 ease-out md:block"
              style={{ width: `${progressPercentage}%` }}
            />

            {applicationProcessData.map((item, index) => {
              const Icon = item.icon;
              const isActive = item.id === activeItem.id;
              const isDone = index < safeActiveIndex;
              const tabId = `${tabsId}-tab-${item.id}`;
              const panelId = `${tabsId}-panel-${item.id}`;

              return (
                <button
                  id={tabId}
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveStep(item.id)}
                  onKeyDown={(event) => handleStepKeyDown(event, index)}
                  className="group relative z-10 cursor-pointer rounded-2xl p-4 text-center transition-colors duration-300 ease-out hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-01"
                >
                  <span
                    aria-hidden="true"
                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border-4 shadow-lg transition-[transform,background-color,color,box-shadow] duration-300 ease-out ${
                      isActive
                        ? "scale-110 border-white bg-blue-01 text-white shadow-[0_18px_40px_rgba(30,58,138,0.28)]"
                        : isDone
                          ? "border-white bg-green-800 text-white"
                          : "border-white bg-white text-blue-01"
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle className="h-8 w-8" strokeWidth={2.4} />
                    ) : (
                      <Icon className="h-8 w-8" strokeWidth={2.4} />
                    )}
                  </span>

                  <span
                    className={`mt-5 block text-xs font-bold tracking-[0.25em] ${
                      isActive || isDone ? "text-blue-01" : "text-gray-400"
                    }`}
                  >
                    {item.step}
                  </span>

                  <span
                    className={`mt-2 block text-lg font-bold ${
                      isActive ? "text-blue-01" : "text-gray-700"
                    }`}
                  >
                    {item.title}
                  </span>

                  <span className="mt-1 block text-sm text-gray-500">
                    {item.shortDescription}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id={`${tabsId}-panel-${activeItem.id}`}
            role="tabpanel"
            aria-labelledby={`${tabsId}-tab-${activeItem.id}`}
            tabIndex={0}
            className="mt-10 rounded-3xl bg-blue-01 p-8 text-white shadow-[0_20px_50px_rgba(30,58,138,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-01 md:p-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div
                aria-hidden="true"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15"
              >
                <ActiveIcon className="h-8 w-8 text-white" strokeWidth={2.4} />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                  {activeItem.step}
                </span>

                <h3 className="mt-2 text-3xl font-bold">
                  {activeItem.title}
                </h3>

                <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;