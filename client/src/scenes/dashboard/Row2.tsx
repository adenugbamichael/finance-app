/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import DashboardBox from "@/components/dashboardBox"

type Props = {}

const Row2 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea='d'></DashboardBox>
      <DashboardBox gridArea='e'></DashboardBox>
      <DashboardBox gridArea='f'></DashboardBox>
    </>
  )
}

export default Row2
