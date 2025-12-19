import { memo, useState, useMemo } from "react";
import CommonForm from "../common/CommonForm";

const FORM_CONTROLS = [
  {
    name: "name",
    label: "Name",
    placeholder: "Ex - Arunya",
    componentType: "input",
    type: "text",
    icon: "user",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your Email",
    componentType: "input",
    type: "email",
    icon: "email",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Ex - +91 76959 50724",
    componentType: "input",
    type: "tel",
    icon: "call",
  },
  {
    name: "message",
    label: "Message",
    componentType: "textarea",
  },
];

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  // Memoize controls for safety (optional since it's const)
  const formControls = useMemo(() => FORM_CONTROLS, []);

  return (
    <div className="z-[3]">
      <CommonForm
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
        defaultOnSubmit
        btnclass="pt-12 justify-center"
        formClass="grid grid-cols-1 md:grid-cols-2 gap-8"
        btntype="submit"
      />
    </div>
  );
};

export default memo(ContactForm);
