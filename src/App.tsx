import MainLayout from "./layouts/main-layout";
import DevelopmentTable from "@/components/shared/development-table";
import CheckTable from "@/components/shared/check-table";
import FourColumnTable from "@/components/shared/four-column-table";
import ComplexTable from "@/components/shared/complex-table";

function App() {
  return (
    <MainLayout>
      <div className="grid md:grid-cols-2 gap-5 w-full">
        <DevelopmentTable />
        <CheckTable />
        <FourColumnTable />
        <ComplexTable />
      </div>
    </MainLayout>
  );
}

export default App;
