"use client";
import Modal from "@/components/modal";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Alert from "../alert";

export default function ConfirmPurchase() {
  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  return (
    <>
      <Alert
        isOpen={isOpenAlert}
        content="Order successfully ! Your purchase will be processed within 24 hours."
        onClose={() => {
          setIsOpenAlert(false);
        }}
      />
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        {/* <!-- component --> */}
        <div className="py-18 container mx-auto mt-10 flex max-w-3xl flex-wrap justify-center rounded-lg bg-white px-5">
          {/* <!-- QR Code Number Account & Uploadfile --> */}
          <div className="flex-wrap md:flex">
            <div className="mx-auto flex flex-col items-center">
              <Image
                src="/assets/image/qr-code.jpeg"
                alt="qr-code"
                width={200}
                height={200}
              />
              <div>
                <p className="mt-2 text-center font-medium text-gray-600">
                  Nguyen Hai Dang
                </p>
                <p className="mt-1 text-center font-medium text-amber-500">
                  0383251335
                </p>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsOpenAlert(true);
                  }}
                  className=" block rounded-xl border bg-sky-400 px-6 py-2 text-white outline-none hover:bg-sky-500"
                >
                  Finish Order
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="block rounded-xl  bg-white px-6 py-2 text-sky-400 hover:bg-sky-50"
                >
                  Cancel
                </button>
              </div>
            </div>
            {/* <!-- Step Checkout --> */}
            <div className="mt-8 max-w-sm md:ml-10 md:mt-0 md:w-2/3">
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4 text-slate-500">
                  <h2 className="title-font mb-1 text-sm font-medium text-sky-500">
                    STEP 1
                  </h2>
                  <p className="font-laonoto leading-relaxed">
                    Scan this <b>QR CODE </b>to process payment via{" "}
                    <b>Momo app</b>
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4 text-slate-500">
                  <h2 className="title-font mb-1 text-sm font-medium text-sky-500">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    Input the premium price{" "}
                    <span className="font-medium text-sky-400">50,000 VNĐ</span>{" "}
                    and add a payment message:
                    <p className="mt-3 bg-sky-100 text-slate-500">
                      {session?.user.email
                        ? session.user.email
                        : "<Your email>"}{" "}
                      mint premium
                    </p>
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4 text-slate-500">
                  <h2 className="title-font mb-1 text-sm font-medium text-sky-500">
                    STEP 3
                  </h2>
                  <p className="font-laonoto leading-relaxed">
                    Click
                    <span className="font-medium text-sky-400">
                      {" "}
                      Finish Order{" "}
                    </span>
                    to complete the payment and wait for the confirmation from
                    admin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="mt-4 w-full rounded-full  bg-amber-400 px-3  py-2 font-semibold text-white hover:bg-amber-500"
      >
        Choose this plan
      </button>
    </>
  );
}
