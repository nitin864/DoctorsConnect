import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/dashboard' , "./screens/Dashboard.tsx"),           
    route('/patients' , "./screens/Patients.tsx"),
    route('/appointments' , "./screens/Appointments.tsx"),
    route('/ehr' , "./screens/Ehr.tsx"), 
    route('/billing' , "./screens/Billing.tsx"), 
    route('/inventory' , "./screens/Inventtory.tsx"),
    route('/reports' , "./screens/Reports.tsx"),
    route('/settings' , "./screens/Settings.tsx"),  
] satisfies RouteConfig;
 