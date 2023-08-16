/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */

import DashboardBox from "@/components/dashboardBox"

type Props = {}

const Row3 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea='g'></DashboardBox>
      <DashboardBox gridArea='h'></DashboardBox>
      <DashboardBox gridArea='i'></DashboardBox>
      <DashboardBox gridArea='j'></DashboardBox>
    </>
  )
}

export default Row3
