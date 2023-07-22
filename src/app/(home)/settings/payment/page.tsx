import ConfirmPurchase from "@/components/confirm-purchase";
import HeroIcon from "@/components/heroIcon";

export default function Payment() {
  const planOptions = [
    {
      title: "Pomodoro Timer",
      isCheck: true,
    },
    {
      title: "Motivation Quotes",
      isCheck: true,
    },
    {
      title: "Taking Notes",
      isCheck: false,
    },
    {
      title: "Access to all sounds",
      isCheck: false,
    },
    {
      title: "Customize background",
      isCheck: false,
    },
    {
      title: "Join study groups",
      isCheck: false,
    },
    {
      title: "Create your own group",
      isCheck: false,
    },
  ];

  return (
    <div className=" flex w-full flex-col gap-5">
      <div className="flex w-full flex-col gap-2">
        <h2 className="  text-2xl text-slate-700">Payment</h2>
      </div>
      <>
        {/* <!-- main card --> */}
        <div className="rounded-xl text-slate-700">
          {/* <!-- headers content--> */}
          <div className="flex flex-col">
            <h1>Get the most out of your mobile with the right subscription</h1>
            <div className="mt-2 max-w-lg text-sm font-light text-slate-400">
              All devices come with free delivery or pickup as standard. See
              information on available shopping options for your location.
            </div>
          </div>

          {/* <!-- subscriptions --> */}
          <div className="mt-10 flex w-4/5 flex-col space-x-8 space-y-12 text-slate-700 md:flex-row md:space-y-0">
            {/* <!-- standard --> */}
            <div className="w-full rounded-xl ">
              <div className="flex w-96 flex-col rounded-xl border border-sky-200 bg-white p-8 transition-all md:w-full">
                <h5 className=" text-xl font-medium text-slate-700">
                  Standard plan
                </h5>
                <div className="mb-4 text-sm font-light text-slate-400">
                  Perfect to get started
                </div>
                <div className="flex items-baseline text-slate-700 ">
                  <span className="text-3xl font-bold tracking-tight">
                    Free to use
                  </span>
                </div>
                <ul role="list" className="my-7 space-y-5">
                  {planOptions.map((option) => (
                    <li
                      key={option.title}
                      className={`
                        ${
                          option.isCheck
                            ? ""
                            : "line-through decoration-gray-500"
                        }
                      flex items-center space-x-3`}
                    >
                      {option.isCheck ? (
                        <HeroIcon
                          className="h-5 w-5 flex-shrink-0 text-sky-400"
                          icon="check-circle"
                          outline={false}
                        />
                      ) : (
                        <HeroIcon
                          className="h-5 w-5 flex-shrink-0 text-slate-400"
                          icon="x-circle"
                          outline={false}
                        />
                      )}

                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {option.title}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 w-full rounded-full border border-sky-200 px-3 py-2 text-center font-semibold text-sky-400">
                  Current Plan
                </div>
              </div>
            </div>
            <div className="h-fit w-full rounded-xl bg-amber-100">
              <div className="flex w-96 flex-col rounded-xl border border-amber-200 bg-white p-8 drop-shadow-sd2 transition-all hover:translate-x-3 hover:translate-y-3 md:w-full">
                <h5 className=" text-xl font-medium text-slate-700">
                  Premium plan
                </h5>
                <div className="mb-4 text-sm font-light text-slate-400">
                  Best for productivity
                </div>
                <div className="flex items-baseline text-slate-700 ">
                  <span className="text-3xl font-bold tracking-tight">
                    49,000
                  </span>
                  <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    VNĐ
                  </span>
                </div>
                <ul role="list" className="my-7 space-y-5">
                  {planOptions.map((option) => (
                    <li
                      key={option.title}
                      className="flex items-center space-x-3"
                    >
                      <HeroIcon
                        className="h-5 w-5 flex-shrink-0 text-amber-400"
                        icon="check-circle"
                        outline={false}
                      />
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {option.title}
                      </span>
                    </li>
                  ))}
                </ul>
                <ConfirmPurchase />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
