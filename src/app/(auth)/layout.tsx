interface IAuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <div className="flex flex-row">
      <div className="bg-red-300 md:basis-5/12">{children}</div>
      <div className="bg-cyan-200 md:basis-7/12">fhjdkh</div>
    </div>
  );
}
