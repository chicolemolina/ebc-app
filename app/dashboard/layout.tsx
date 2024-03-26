import { Sidebar } from '../../components';
import Navbar from '@/components/Navbar';

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

      <div className="flex">
        <Navbar />
        <Sidebar />

        <div className="w-full text-slate-900">
          { children }
        </div>

      </div>
    </div>
  );
}