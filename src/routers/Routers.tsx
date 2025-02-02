import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { DashBoard } from "../component/layout/DashBoard/DashBoard";
import { NotFound } from "../component/common/NotFound/NotFound";

import { Sales } from "../pages/Sales/Sales";

import { EmpSalePlan } from "../pages/Business/EmpSalePlan";

import { EmpGrade } from "../pages/Employee/EmpGrade";
import { Unpaid } from "../pages/Accounting/Unpaid";
import { BizPartner } from "../pages/Business/BizPartner";
import { EstMng } from "../pages/Business/EstMng";
import { VctnApprove } from "../pages/Business/VctnApprove";
import { VctnCalendar } from "../pages/Employee/VctnCalendar";
import { BmSalePlan } from "../pages/Business/BmSalePlan";
import { DailyRevenue } from "../pages/Sales/DailyRevenue";

import { YearlyRevenue } from "../pages/Sales/YearlyRevenue";

import { DisbApply } from "../pages/Accounting/DisbApply";
import { Disbursement } from "../pages/Accounting/Disbursement";
import { AccSlip } from "../pages/Accounting/AccSlip";
import { Notice } from "../pages/System/Notice";
import { ComnCodMgr } from "../pages/System/ComnCodMgr";
import { ComnCodeMgrDetailMain } from "../component/page/System/ComnCodMgr/ComnCodeMgrDetailMain/ComnCodeMgrDetailMain";

const routers: RouteObject[] = [
    { path: "*", element: <NotFound /> },
    { path: "/", element: <Login /> },
    {
        path: "/react",
        element: <DashBoard />,
        children: [
            {
                path: "system",
                children: [
                    { path: "notice.do", element: <Notice /> },
                    { path: "comnCodMgr.do", element: <ComnCodMgr /> },
                    { path: "comnCodMgr.do/:grpCod", element: <ComnCodeMgrDetailMain /> },
                ],
            },
            {
                path: "employee",
                children: [
                    { path: "empGrade.do", element: <EmpGrade /> },
                    { path: "vctnApprove.do", element: <VctnApprove /> },
                    { path: "vctnCalendar.do", element: <VctnCalendar /> },
                ],
            },
            {
                path: "accounting",
                children: [
                    { path: "unpaid.do", element: <Unpaid /> },
                    { path: "disbApply.do", element: <DisbApply /> },
                    { path: "disbursement.do", element: <Disbursement /> },
                    { path: "accSlipF.do", element: <AccSlip /> },
                ],
            },
            {
                path: "business",
                children: [
                    { path: "bizPartner.do", element: <BizPartner /> },
                    { path: "estMng.do", element: <EstMng /> },
                    { path: "empSalePlan.do", element: <EmpSalePlan /> },
                    { path: "bmSalePlan.do", element: <BmSalePlan /> },
                ],
            },
            {
                path: "sales",

                children: [
                    { path: "dailyRevenue.do", element: <DailyRevenue /> },
                    { path: "yearlyRevenue.do", element: <YearlyRevenue /> },
                    { path: "monthlyRevenue.do", element: <Sales /> },
                ],
            },
        ],
    },
];

export const Routers = createBrowserRouter(routers);
