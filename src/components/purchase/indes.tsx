"use client";
import Image from "next/image";
import Input from "@/components/input";
import qrCode from "@/public/assets/image/qr-code-purchase.jpeg";

export default function Purchase() {
  return (
    <div className="flex">
      <Image src={qrCode} alt="qr-code" className="w-32" />
      <div className="ml-5 flex  flex-col">
        <h3 className="text-lg font-medium text-slate-700">Nguyễn Hải Đăng</h3>
        <p className="text-slate-500">0383251335</p>
        <p className="text-slate-500">49,000đ</p>
        <div className="mt-6 flex items-baseline gap-2">
          <Input id="transaction-code" label="Transaction code" type="number" />
          <button className="rounded-xl p-3 font-medium text-sky-400 hover:bg-sky-50">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
