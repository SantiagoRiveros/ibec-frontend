import { useState } from "react";
import { useNavigate } from "react-router";
import "./styles/Register.css";
import { GoBackArrow, PersonIcon, PadlockIcon, AtIcon } from "../assets";
import { Button, Heading, Input, Paragraph } from "../components/atoms";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateUsername,
} from "../validations";
import LoadingScreen from "../components/molecules/LoadingScreen";

export default function Register({ user_queries }) {
  const [register, setRegister] = useState({
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordRepeat: "",
  });
  const [alerts, setAlerts] = useState({
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordRepeat: "",
  });
  const [loading_showIt, setLoading_showIt] = useState(false);
  const [loading_chageDotAnimation, setLoading_chageDotAnimation] =
    useState(false);
  const [loading_showDots, setLoading_showDots] = useState(true);
  const [loading_message, setLoading_message] = useState("");
  const [loading_button, setLoading_button] = useState({
    text: "",
    onClick: () => {},
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
    if (Object.values(alerts).some((valor) => valor !== "")) {
      validateRegister();
    }
  };

  const validateRegister = () => {
    const newAlerts = {
      email: !register.email.trim()
        ? "Email is required."
        : !validateEmail(register.email)
          ? "Please provide a valid email format."
          : "",
      userName: !register.userName.trim()
        ? "User Name is required."
        : register.userName.length < 3
          ? "User Name must have at least 4 characters long."
          : register.userName.length > 20
            ? "User Name must have less than 20 characters long."
            : !validateUsername(register.userName)
              ? "Username can only contain letters and numbers."
              : "",
      firstName: !register.firstName.trim()
        ? "First Name is required."
        : !validateName(register.firstName)
          ? "First Name can only contain letters."
          : "",
      lastName: !register.lastName.trim()
        ? "Last Name is required."
        : !validateName(register.lastName)
          ? "Last Name can only contain letters."
          : "",
      password: !register.password.trim()
        ? "Password is required."
        : register.password.length < 8
          ? "Password must have at least 8 characters long."
          : register.password.length > 32
            ? "Password must have less than 32 characters long."
            : !validatePassword(register.password)
              ? "Password must contain at least 1 Uppercase letter, 1 Lowercase Letter, 1 Number and 1 Special Character."
              : "",
      passwordRepeat: !register.passwordRepeat.trim()
        ? "Password is required."
        : register.password !== register.passwordRepeat
          ? "Passwords are different"
          : "",
    };

    setAlerts(newAlerts);
    const hasAlerts = Object.values(newAlerts).some(
      (alert) => alert.trim() !== "",
    );
    return !hasAlerts;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateRegister()) {
      setLoading_showIt(true);
      user_queries.post(register, (res) => {
        setLoading_chageDotAnimation(true);
        if (!res.error) {
          setTimeout(() => {
            setLoading_showDots(false);
            setLoading_message("Successfully created!");
            setLoading_button({
              text: "Continue",
              onClick: () => navigate("/verifying-email"),
            });
          }, 1200);
        } else {
          setTimeout(() => {
            setLoading_showDots(false);
            setLoading_message(
              res.error +
                ", it might be your email, check every entry before upload them",
            );
            setLoading_button({
              text: "Ok",
              onClick: () => {
                setLoading_chageDotAnimation(false);
                setLoading_showIt(false);
                setLoading_showDots(true);
              },
            });
          }, 1200);
        }
      });
    }

    setTimeout(() => {}, 3000);
  };

  const page = (
    <div className="pages-with-only-form registerPage">
      <form className="general-form-of-pages">
        <GoBackArrow />

        <Heading text="Register" size="h1" />
        <Paragraph>
          Create an <span>account</span> to access all the features of
          <span> kpitalink</span>
        </Paragraph>

        <Input
          id="userName"
          icon={PersonIcon()}
          placeholder="Ex. SRamirez14"
          label="Your User Name"
          title="User Name is required, must have between 4 and 20 characters long, and only contain letters and numbers."
          alerts={alerts.userName}
          type="text"
          name="userName"
          onChange={handleChange}
        />
        <Input
          id="firstName"
          icon={PersonIcon()}
          placeholder="Ex. Saul"
          label="Your First Name"
          title="First Name is required, and can only contain letters."
          alerts={alerts.firstName}
          type="text"
          name="firstName"
          onChange={handleChange}
        />
        <Input
          id="lastName"
          icon={PersonIcon()}
          placeholder="Ex. Ramirez"
          label="Your Last Name"
          title="Last Name is required, and can only contain letters."
          alerts={alerts.lastName}
          type="text"
          name="lastName"
          onChange={handleChange}
        />

        <Input
          id="email"
          icon={AtIcon()}
          placeholder="Ex: abc@example.com"
          label="Email"
          title="Email is required and must be a valid email format."
          alerts={alerts.email}
          type="text"
          name="email"
          onChange={handleChange}
        />
        <Input
          id="password"
          icon={PadlockIcon()}
          placeholder="#########"
          label="Your Password"
          title="Password is required, must have between 8 and 32 characters, and must contain at least 1 Uppercase letter, 1 Lowercase letter, 1 Number and 1 Special Character. "
          alerts={alerts.password}
          type="password"
          name="password"
          onChange={handleChange}
        />
        <Input
          id="passwordRepeat"
          icon={PadlockIcon()}
          placeholder="#########"
          label="Confirm password"
          title="Password is required, must have between 8 and 32 characters, and must contain at least 1 Uppercase letter, 1 Lowercase letter, 1 Number and 1 Special Character. "
          alerts={alerts.passwordRepeat}
          type="password"
          name="passwordRepeat"
          onChange={handleChange}
        />

        <Button onClick={handleRegister}>Register</Button>
      </form>

      <Paragraph>
        Already have an account? <a href="/login">Login</a>
      </Paragraph>

      <LoadingScreen
        showIt={loading_showIt}
        message={loading_message}
        button={loading_button}
        chageDotAnimation={loading_chageDotAnimation}
        showDots={loading_showDots}
      />
    </div>
  );

  return user_queries.redirect(navigate, "/register", page);
}
