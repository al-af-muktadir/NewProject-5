/* eslint-disable @typescript-eslint/no-explicit-any */
import Details from "@/Components/Details";

const ProjDetailsPage = async ({ params }: { params: any }) => {
  const pId = await params.projectId;

  return (
    <div>
      <Details id={pId} />
    </div>
  );
};

export default ProjDetailsPage;
