import { Navigate, Outlet, Route, Router, Routes, useNavigate } from "react-router-dom";
import { useTranslation, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Signin from "./themes/user/pages/Signin";
import Manage from "./themes/manage/pages/Manage";
import ManageAccount from "./themes/manage/pages/ManageAccount";
import store from "./lib/app/store";
import { Provider } from "react-redux";
import Shoppe from "./themes/user/pages/Shoppe";
import RegisterManage from "./themes/manage/pages/RegisterManage";

const PrivateOutlet = () => {

  const isAuthenticated = sessionStorage.getItem('isLoggedIn') ? true : false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/signup" />;
  
}

const selectedLanguage = localStorage.getItem('selectedLanguage');

// Cấu hình i18next
i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    lng: selectedLanguage || 'vi', // Sử dụng ngôn ngữ đã lưu hoặc ngôn ngữ mặc định nếu chưa có giá trị
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });


function App() {

  const { t } = useTranslation();
  console.clear();

  return (

    <div className="App">
      <Provider store={store}>

        <Routes>
          <Route path="" element={<Shoppe />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<RegisterManage />}/>

          <Route path="/admin" element={<PrivateOutlet />}>
            <Route path="/admin" element={<Manage />}>
              <Route index element={<ManageAccount />}/>
            </Route>
          </Route>

        </Routes>

      </Provider>
    </div >
  );
}

export default App;
