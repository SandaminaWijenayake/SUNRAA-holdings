import { useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import { LocationOn, Phone, Email, AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import contactBG from '../assets/images/king_coco.jpg';
const theme = createTheme({
  palette: {
    primary: {
      main: "#f97316", // Orange color
    },
  },
});

export const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+94",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="contact-header w-full h-[25vh] md:h-[30vh] lg:h-[35vh] flex flex-col items-center justify-center relative bg-cover bg-center mt-[8.7vh]"
        style={{ backgroundImage: `url(${contactBG})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white relative">Contact Us</h2>
      </div>
      <div className="flex flex-col lg:flex-row bg-[#fcf9f1] p-6 md:p-8 lg:p-12 gap-6 md:gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-orange-500 text-lg md:text-xl font-bold italic">Contact Us</h2>
          <h1 className="text-2xl md:text-3xl font-bold">Get in Touch</h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Your privacy is our priority. We strictly protect your information
            with a no-spam policy and never share, sell, or rent your details.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <LocationOn className="text-orange-500 text-lg md:text-xl" />
              <div>
                <h3 className="font-bold text-sm md:text-base">Location</h3>
                <p className="text-xs md:text-sm">No 137, 3rd cross road, Horagollawatta, Nittambuwa, Sri Lanka</p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <Phone className="text-orange-500 text-lg md:text-xl" />
              <div>
                <h3 className="font-bold text-sm md:text-base">Phone</h3>
                <p className="text-xs md:text-sm">+94 77 727 6417<br />+94 74 073 0612</p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <Email className="text-orange-500 text-lg md:text-xl" />
              <div>
                <h3 className="font-bold text-sm md:text-base">Email</h3>
                <p className="text-xs md:text-sm">info@ceyloneseexports.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <AccessTime className="text-orange-500 text-lg md:text-xl" />
              <div>
                <h3 className="font-bold text-sm md:text-base">Work Hours</h3>
                <p className="text-xs md:text-sm">Mon - Sun : 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 shadow-lg rounded-lg">
          {/* <form className="space-y-4">
            <TextField fullWidth label="Name" required variant="outlined" size="small" color="primary" />
            <TextField fullWidth label="Email" required variant="outlined" size="small" color="primary" />

            <div className="flex flex-col md:flex-row gap-4">
              <TextField select label="Country Code" className="md:w-1/3" size="small" color="primary">
                <MenuItem value={"+94"}>🇱🇰 +94</MenuItem>
              </TextField>
              <TextField fullWidth label="Phone" required variant="outlined" size="small" color="primary" />
            </div>

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              size="small"
              color="primary"
            />

            <Button
              variant="contained"
              fullWidth
              color="primary"
              className="text-white py-2 text-sm md:text-base"
            >
              Send Message
            </Button>
          </form> */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <TextField fullWidth label="Name" required variant="outlined" size="small" name="name" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} />
            <TextField fullWidth label="Email" required variant="outlined" size="small" name="email" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} />

            <div className="flex flex-col md:flex-row gap-4">
              <TextField select label="Country Code" className="md:w-1/3" size="small" name="countryCode" value={formData.countryCode} onChange={handleChange}>
                <MenuItem value={"+94"}>🇱🇰 +94</MenuItem>
              </TextField>
              <TextField fullWidth label="Phone" required variant="outlined" size="small" name="phone" value={formData.phone} onChange={handleChange} error={!!errors.phone} helperText={errors.phone} />
            </div>

            <TextField fullWidth label="Message" multiline rows={4} variant="outlined" size="small" name="message" value={formData.message} onChange={handleChange} error={!!errors.message} helperText={errors.message} />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </ThemeProvider >
  );
};



