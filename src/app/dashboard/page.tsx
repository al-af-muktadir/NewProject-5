import DashboardComp from "@/Components/DashComp/DashboardComp";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboradPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div>
      <DashboardComp user={session} />
    </div>
  );
};

export default DashboradPage;
