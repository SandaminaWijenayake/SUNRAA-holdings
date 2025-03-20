import { useEffect, useState } from "react";
import { TextField, Button, CircularProgress, Autocomplete } from "@mui/material";
import { LocationOn, Phone, Email, AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import contactBG from '../assets/images/king_coco.jpg';
import contactDetails from '../Constants/contactUs';

const theme = createTheme({
  palette: {
    primary: {
      main: "#f97316",
    },
  },
});
const iconMap = {
  LocationOn: <LocationOn className="text-orange-500 text-lg md:text-xl" />,
  Phone: <Phone className="text-orange-500 text-lg md:text-xl" />,
  Email: <Email className="text-orange-500 text-lg md:text-xl" />,
  AccessTime: <AccessTime className="text-orange-500 text-lg md:text-xl" />
};
export const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+94",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoadingCountries(true);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryList = data.map((country) => ({
          name: country.name.common,
          dialCode: country.idd.root ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}` : '',
          flag: country.flags && country.flags.png ? country.flags.png : "",
        })).filter(c => c.dialCode !== '');
        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

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
            {contactDetails.map((item) => (
              <div key={item.id} className="flex items-center gap-3 md:gap-4">
                {iconMap[item.icon]}
                <div>
                  <h3 className="font-bold text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 shadow-lg rounded-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <TextField fullWidth label="Name" required variant="outlined" size="small" name="name" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} />
            <TextField fullWidth label="Email" required variant="outlined" size="small" name="email" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} />

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-2/5">
                <Autocomplete
                  options={countries}
                  loading={loadingCountries}
                  getOptionLabel={(option) => `${option.name} (${option.dialCode})`}
                  value={countries.find(c => c.dialCode === formData.countryCode) || null}
                  onChange={(event, newValue) => {
                    if (newValue) {
                      setFormData({ ...formData, countryCode: newValue.dialCode });
                    }
                  }}
                  renderOption={(props, option) => (
                    <li {...props} className="flex items-center gap-2">
                      <img src={option.flag} alt="" className="w-5 h-4" />
                      {option.name} ({option.dialCode})
                    </li>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Country Code"
                      size="small"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {loadingCountries ? <CircularProgress color="inherit" size={16} /> : null}
                            {params.InputProps.endAdornment}
                          </>
                        )
                      }}
                    />
                  )}
                  isOptionEqualToValue={(option, value) => option.dialCode === value.dialCode}
                />
              </div>
              <div className="w-full sm:w-3/5">
                <TextField
                  fullWidth
                  label="Phone"
                  required
                  variant="outlined"
                  size="small"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
              </div>
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
    </ThemeProvider>
  );
};
