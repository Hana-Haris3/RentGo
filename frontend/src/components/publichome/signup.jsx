import React, { useState } from "react";
import '../../../css/root.css';
import "../../../css/publicHome/signup.css";
import { Form } from "react-router";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function SignUp() {
  const [profileImage, setProfileImage] = useState(null);
  const [dob, setDob] = useState(null);
  const [lvDate, setLvDate] = useState(null);

  const [dobOpen, setDobOpen] = useState(false);
  const [lvOpen, setLvOpen] = useState(false);

  // Format date as DD/MM/YYYY
  const formatDate = (date) => {
    if (!date) return "";
    const d = date.getDate().toString().padStart(2, "0");
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  };

  const handleProfileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Form method="post" encType="multipart/form-data" className="signup-form">
      <div className="signup-wrapper">
        <div className="signup-container">
          <h2>Create Your Account</h2>

          <div className="profile-section">
            <label htmlFor="profileUpload" className="profile-circle">
              {profileImage ? (
                <img src={profileImage} alt="Profile" />
              ) : (
                <span className="profile-icon">👤</span>
              )}
            </label>
            <input
              id="profileUpload"
              type="file"
              accept="image/*"
              onChange={handleProfileChange}
              className="hidden-input"
              required
            />
          </div>

          <div className="d-flex gap-5 flex-wrap">
            {/* Left Side */}
            <div className="left">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" id="phoneInput" name="phoneInput" maxlength="10" pattern="[0-9]{10}" inputmode="numeric" required />
              <input type="password" placeholder="Password"  required />

              {/* Date of Birth */}
              <div className="flex gap-3">
                <Label htmlFor="dob" className="px-1">
                  Date of Birth
                </Label>
                <input
                  type="hidden"
                  name="dateOfBirth" // Use a meaningful name for form data
                  value={dob ? dob.toISOString() : ''} // Value is empty string if null, which triggers the 'required' flag
                  required // The native HTML required attribute
              />
                <Popover open={dobOpen} onOpenChange={setDobOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="dob"
                      className="w-48 justify-between font-normal border rounded-5"
                      
                    >
                      {dob ? formatDate(dob) : "Select date"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto overflow-visible p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={dob}
                      onSelect={(date) => {
                        setDob(date);
                        setDobOpen(false);
                      }}
                      captionLayout="dropdown"
                      defaultMonth={dob || new Date()}
                      max={new Date()} // Prevent future dates
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Gender */}
              <div className="flex gap-3">
                <Label className="px-1">Gender:</Label>
                <RadioGroup defaultValue="Female">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Female" id="r1" />
                    <Label htmlFor="r1">Female</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Male" id="r2" />
                    <Label htmlFor="r2">Male</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Other" id="r3" />
                    <Label htmlFor="r3">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              <input type="text" placeholder="Address" required />
            </div>

            {/* Right Side */}
            <div className="right">

              <label for="dlNumber">Driving License Number:</label>
                <input type="text" id="dlNumber" name="dlNumber"
                      placeholder="e.g., KL1420210123456"
                      maxlength="15"
                      pattern="^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))?((19|20)[0-9][0-9])[0-9]{7}$|^[A-Z]{2}[0-9]{13}$"
                      title="Enter a 15-character alphanumeric ID (SSRR year ID) with optional spaces or hyphens."
                      required />


              {/* Driving Licence Validity */}
                <div className="flex gap-3">
                  <Label htmlFor="lvdate" className="px-1">
                    Driving Licence Validity
                  </Label>
                  <input
                    type="hidden"
                    name="liscence validity" // Use a meaningful name for form data
                    value={lvDate ? lvDate.toISOString() : ''} // Value is empty string if null, which triggers the 'required' flag
                    required // The native HTML required attribute
                />
                  <Popover open={lvOpen} onOpenChange={setLvOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="lvdate"
                        className="w-48 justify-between font-normal border rounded-5"
                      >
                        {lvDate ? formatDate(lvDate) : "Select date"}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-visible p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={lvDate}
                        onSelect={(date) => {
                          setLvDate(date);
                          setLvOpen(false);
                        }}
                        captionLayout="dropdown"
                        defaultMonth={lvDate || new Date()}
                        min={new Date()} // Cannot be in the past
                        max={new Date(new Date().setFullYear(new Date().getFullYear() + 10))} // Max 10 years ahead
                      />
                    </PopoverContent>
                  </Popover>
                </div>


              <label for="aadhaarNumber">Aadhaar Number:</label>
              <input type="text" id="aadhaarNumber" name="aadhaarNumber"
                    placeholder="Aadhaar Number"
                    maxlength="12"
                    pattern="^[2-9]{1}[0-9]{3}\s?[0-9]{4}\s?[0-9]{4}$"
                    title="Enter a 12-digit Aadhaar number starting with 2-9, with optional spaces."
                    inputmode="numeric"
                    required />

              <label>Upload Driving Licence</label>
              <input type="file" accept="image/*" required/>

              <label>Upload Aadhaar</label>
              <input type="file" accept="image/*" required/>

              <button className="create-btn">Create</button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
