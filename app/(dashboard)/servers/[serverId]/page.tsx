import { redirect } from "next/navigation";

interface ServerIdPageProps {
  params: {
    serverId: string;
  }
};

const ServerIdPage = async ({
  params
}: ServerIdPageProps) => {

  // const channel = await apiService.get(`getgeneral/${params.serverId}`);
  // return redirect(`/dashboard/servers/${params.serverId}/channels/8680b157-5ab3-419d-b13d-55bb9a5108e6`);
  return(
    <div>
      <p>ServerIdPage</p>
    </div>
  );

  
}
 
export default ServerIdPage;

