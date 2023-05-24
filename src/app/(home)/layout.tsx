import Sidebar from "@/components/sidebar";

interface IHomeHomeLayoutProps {
  children?: React.ReactNode;
}
export default function HomeLayout({ children }: IHomeHomeLayoutProps) {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      {children}
    </>
  );
}
