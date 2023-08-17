/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import DashboardBox from "@/components/dashboardBox"
import { useGetKpisQuery } from "@/state/api"

type Props = {}

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery()
  console.log("🚀data:", data)

  return (
    <>
      <DashboardBox gridArea='a'></DashboardBox>
      <DashboardBox gridArea='b'></DashboardBox>
      <DashboardBox gridArea='c'></DashboardBox>
    </>
  )
}

export default Row1
