import { Link } from "react-router-dom";
import "../publics/css/signin.css";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useTranslation } from "react-i18next";
import { useCreateAccountMutation } from "../../../lib/apis/apisAccount";
import { Iaccount } from "../../../lib/interface/account";
import { render } from "react-dom";

type Props = {};

const Signin = (props: Props) => {
  const [createAccount, { isLoading }] = useCreateAccountMutation();

  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng); // Lưu ngôn ngữ đã chọn vào localStorage
  };

  const { t } = useTranslation();

  const onFinish = (values: Iaccount) => {
    createAccount(values);
    message.success(`${t("success")}`);
  };

//   const validateEmail = (_:any, value:any) => {
//     // Regular expression to check for valid email format
//     const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//     if (!value || emailRegex.test(value)) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error("Tài khoản không tồn tại, vui lòng nhập lại!"));
//   };

  const onFinishFailed = (errorInfo: any) => {};

  return (
    <div className="login-page">
      <div className="form-login">
        <div className="content-form">
          <div className="item-left">
            <div className="logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/1000px-Shopee.svg.png"
                className="desk"
                width="100%"
                alt="Facebook"
              />
              <img
                src="https://logodix.com/logo/2015085.png"
                className="mob"
                width="100%"
                alt="Facebook"
              />
            </div>
            <h2>{t("title")}</h2>
          </div>

          <div className="item-right">
            <div className="form">
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: `${t("errorEmail")}`,
                    },
                    // { validator: validateEmail }
                  ]}
                >
                  <Input placeholder={t("horderName")} />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: `${t("errorPass")}`,
                    },
                  ]}
                >
                  <Input.Password placeholder={t("horderPass")} />
                </Form.Item>

                <Form.Item>
                  <Button htmlType="submit">{t("textLogin")}</Button>
                </Form.Item>
              </Form>

              <div className="link">
                <Link
                  id="forgot-password"
                  to="https://vi-vn.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
                >
                  {t("textForgot")}
                </Link>
                <div className="line">
                  <span>{t("textOr")}</span>
                </div>
                <Link
                  className="signin"
                  to="https://www.facebook.com/r.php?locale=vi_VN&display=page"
                >
                  {t("textAccount")}
                </Link>
              </div>
            </div>

            <div className="col-11 create-page">
              <p>
                <b>
                  <a href="https://vi-vn.facebook.com/pages/create/?ref_type=registration_form">
                    {t("textNewpage")}
                  </a>
                </b>{" "}
                {t("textDescpage")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="content-footer">
          <div className="footer-top lang">
            <a href="" onClick={() => changeLanguage("vi")}>
              Tiếng Việt
            </a>
            <a href="" onClick={() => changeLanguage("en")}>
              English (UK)
            </a>
            <a href="" onClick={() => changeLanguage("tw")}>
              中文(台灣)
            </a>
            <a href="" onClick={() => changeLanguage("kr")}>
              한국어
            </a>
            <a href="" onClick={() => changeLanguage("jp")}>
              日本語
            </a>
            <a href="" onClick={() => changeLanguage("fr")}>
              Français (France)
            </a>
            <a href="" onClick={() => changeLanguage("th")}>
              ภาษาไทย
            </a>
            <a href="" onClick={() => changeLanguage("es")}>
              Español
            </a>
            <a href="./">Português (Brasil)</a>
            <a href="./">Deutsch</a>
            <a href="./">Italiano</a>
          </div>

          <div className="line"></div>

          <div className="footer-bottom lang">
            <Link to="https://vi-vn.facebook.com/reg/">{t("signIn")}</Link>
            <Link to="https://vi-vn.facebook.com/login/">{t("signUp")}</Link>
            <Link to="https://www.messenger.com/">{t("messenger")}</Link>
            <Link to="https://vi-vn.facebook.com/lite/">
              {t("facebookLite")}
            </Link>
            <Link to="https://vi-vn.facebook.com/watch/">{t("video")}</Link>
            <Link to="https://vi-vn.facebook.com/places/">{t("location")}</Link>
            <Link to="https://vi-vn.facebook.com/gaming/play/">
              {t("game")}
            </Link>
            <Link to="https://vi-vn.facebook.com/login/?next=%2Fmarketplace%2F">
              {t("market")}
            </Link>
            <Link to="https://pay.facebook.com/">{t("meta")}</Link>
            <Link to="https://www.meta.com/">{t("metaMarket")}</Link>
            <Link to="https://www.meta.com/quest/">{t("metaQuest")}</Link>
            <Link to="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F">
              {t("insta")}
            </Link>
            <Link to="https://www.threads.net/">{t("threads")}</Link>
            <Link to="https://vi-vn.facebook.com/fundraisers/">
              {t("voting")}
            </Link>
            <Link to="https://vi-vn.facebook.com/biz/directory/">
              {t("service")}
            </Link>
            <Link to="https://vi-vn.facebook.com/votinginformationcenter/">
              {t("vote")}
            </Link>
            <Link to="https://vi-vn.facebook.com/privacy/policy/?entry_point=facebook_page_footer">
              {t("policy")}
            </Link>
            <Link to="https://vi-vn.facebook.com/privacy/center/?entry_point=facebook_page_footer">
              {t("privicy")}
            </Link>
            <Link to="https://vi-vn.facebook.com/groups/discover/">
              {t("group")}
            </Link>
            <Link to="https://about.meta.com/">{t("about")}</Link>
            <Link to="https://vi-vn.facebook.com/login.php?next=https%3A%2F%2Fvi-vn.facebook.com%2Fads%2Fcreate%2F%3Fnav_source%3Dunknown%26campaign_id%3D402047449186%26placement%3Dpflo%26extra_1%3Dnot-admgr-user">
              {t("ads")}
            </Link>
            <Link to="https://vi-vn.facebook.com/pages/create/?ref_type=site_footer">
              {t("page")}
            </Link>
            <Link to="https://developers.facebook.com/?ref=pf">{t("dev")}</Link>
            <Link to="https://vi-vn.facebook.com/careers/?ref=pf">
              {t("caree")}
            </Link>
            <Link to="https://vi-vn.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">
              {t("cookie")}
            </Link>
            <Link to="https://www.facebook.com/help/568137493302217">
              {t("selectAds")}
            </Link>
            <Link to="https://vi-vn.facebook.com/policies_center/">
              {t("policyes")}
            </Link>
            <Link to="https://vi-vn.facebook.com/help/?ref=pf">
              {t("support")}
            </Link>
            <Link to="https://vi-vn.facebook.com/help/637205020878504">
              {t("heft")}
            </Link>
          </div>
          <div className="coppyright">
            <div className="mob">
              <Link to="https://about.meta.com/">{t("about")}</Link> .
              <Link to="https://vi-vn.facebook.com/help/?ref=pf">
                {t("support")}
              </Link>
            </div>
            <span>Meta © 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
