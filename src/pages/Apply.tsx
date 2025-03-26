import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const programs = [
  "Data Science & Analytics",
  "Digital Marketing Mastery",
  "Leadership Development",
  "UX Design Fundamentals",
  "Web Development Bootcamp",
  "Business Entrepreneurship"
];

const educationLevels = [
  "High School Diploma",
  "Some College",
  "Associate's Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate",
  "Other"
];

const Apply = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    
    // Program Selection
    program: '',
    startDate: '',
    
    // Education & Experience
    educationLevel: '',
    institution: '',
    major: '',
    graduationYear: '',
    workExperience: '',
    
    // Additional Info
    goals: '',
    referral: '',
    questionsComments: '',
    
    // Terms
    termsAgreed: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Calculate date limits
  const today = new Date();
  const maxDate = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate()).toISOString().split('T')[0];
  const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate()).toISOString().split('T')[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (name === 'dob') {
      // Validate date of birth
      const selectedDate = new Date(value);
      const age = today.getFullYear() - selectedDate.getFullYear();
      const monthDiff = today.getMonth() - selectedDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < selectedDate.getDate())) {
        age--;
      }

      if (age < 16) {
        toast({
          title: "Age Restriction",
          description: "You must be at least 16 years old to apply.",
          variant: "destructive"
        });
        return;
      }

      if (age > 100) {
        toast({
          title: "Invalid Date",
          description: "Please enter a valid date of birth.",
          variant: "destructive"
        });
        return;
      }
    }

    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({
      ...prev,
      [name]: val
    }));
  };

  // Function to format date for display
  const formatDate = (date: string) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Validate first step before proceeding
  const validateFirstStep = () => {
    if (!formData.firstName.trim()) {
      toast({
        title: "Required Field",
        description: "Please enter your first name.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.lastName.trim()) {
      toast({
        title: "Required Field",
        description: "Please enter your last name.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.phone.trim()) {
      toast({
        title: "Required Field",
        description: "Please enter your phone number.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.dob) {
      toast({
        title: "Required Field",
        description: "Please enter your date of birth.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (step === 1 && !validateFirstStep()) {
      return;
    }
    setStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(5); // Success step
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying to Innovation Academy. We'll review your application and contact you soon.",
      });
    }, 2000);
  };

  const formClasses = "bg-card text-card-foreground rounded-2xl shadow-sm p-8 md:p-10 border border-border/50";
  const inputClasses = "w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

  // Add specific date input classes
  const dateInputClasses = cn(
    inputClasses,
    "appearance-none",
    !formData.dob && "text-muted-foreground",
    "[&::-webkit-calendar-picker-indicator]:opacity-100",
    "[&::-webkit-calendar-picker-indicator]:dark:invert",
    "[&::-webkit-calendar-picker-indicator]:dark:hover:opacity-70",
    "[&::-webkit-calendar-picker-indicator]:cursor-pointer",
    "[&::-webkit-calendar-picker-indicator]:p-1"
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16 md:py-40 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Apply Now</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Begin your journey with Innovation Academy and take the first step toward your future.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto px-4">
            {/* Progress indicator */}
            {step < 5 && (
              <div className="mb-12">
                <div className="flex justify-between items-center mb-2">
                  {['Personal Info', 'Program Selection', 'Education & Experience', 'Additional Info'].map((label, index) => (
                    <span 
                      key={index} 
                      className={cn(
                        "text-sm font-medium",
                        step > index + 1 ? "text-primary" : 
                        step === index + 1 ? "text-foreground" : 
                        "text-muted-foreground"
                      )}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
                    style={{ width: `${(step / 4) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            {step === 1 && (
              <div className={formClasses}>
                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-muted-foreground mb-2">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-muted-foreground mb-2">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-muted-foreground mb-2">
                      Date of Birth <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        max={maxDate}
                        min={minDate}
                        required
                        className={dateInputClasses}
                      />
                      {formData.dob && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                          {formatDate(formData.dob)}
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      You must be at least 16 years old to apply
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn btn-primary px-8 py-3"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {step === 2 && (
              <div className={formClasses}>
                <h2 className="text-2xl font-bold mb-6">Program Selection</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-muted-foreground mb-2">Preferred Program</label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    >
                      <option value="" disabled>Select a Program</option>
                      {programs.map((program, index) => (
                        <option key={index} value={program}>{program}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-muted-foreground mb-2">Preferred Start Date</label>
                    <select
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    >
                      <option value="" disabled>Select a Start Date</option>
                      <option value="Spring 2023">Spring 2023</option>
                      <option value="Summer 2023">Summer 2023</option>
                      <option value="Fall 2023">Fall 2023</option>
                      <option value="Winter 2024">Winter 2024</option>
                    </select>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="btn btn-secondary px-8 py-3"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn btn-primary px-8 py-3"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {step === 3 && (
              <div className={formClasses}>
                <h2 className="text-2xl font-bold mb-6">Education & Experience</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="educationLevel" className="block text-sm font-medium text-muted-foreground mb-2">Highest Education Level</label>
                    <select
                      id="educationLevel"
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    >
                      <option value="" disabled>Select Education Level</option>
                      {educationLevels.map((level, index) => (
                        <option key={index} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="institution" className="block text-sm font-medium text-muted-foreground mb-2">Institution Name</label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="major" className="block text-sm font-medium text-muted-foreground mb-2">Field of Study/Major</label>
                      <input
                        type="text"
                        id="major"
                        name="major"
                        value={formData.major}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="graduationYear" className="block text-sm font-medium text-muted-foreground mb-2">Graduation Year</label>
                    <input
                      type="text"
                      id="graduationYear"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      placeholder="e.g., 2021"
                      className={inputClasses}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="workExperience" className="block text-sm font-medium text-muted-foreground mb-2">Relevant Work Experience</label>
                    <textarea
                      id="workExperience"
                      name="workExperience"
                      value={formData.workExperience}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe your relevant work experience"
                      className={cn(inputClasses, "resize-none")}
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="btn btn-secondary px-8 py-3"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn btn-primary px-8 py-3"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {step === 4 && (
              <div className={formClasses}>
                <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-muted-foreground mb-2">Educational & Career Goals</label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your educational and career goals"
                      className={cn(inputClasses, "resize-none")}
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="referral" className="block text-sm font-medium text-muted-foreground mb-2">How did you hear about us?</label>
                    <input
                      type="text"
                      id="referral"
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="questionsComments" className="block text-sm font-medium text-muted-foreground mb-2">Questions or Comments</label>
                    <textarea
                      id="questionsComments"
                      name="questionsComments"
                      value={formData.questionsComments}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any questions or additional information you'd like to share"
                      className={cn(inputClasses, "resize-none")}
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="termsAgreed"
                        name="termsAgreed"
                        type="checkbox"
                        checked={formData.termsAgreed}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="termsAgreed" className="text-muted-foreground">
                        I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="btn btn-secondary px-8 py-3"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.termsAgreed}
                      className="btn btn-primary px-8 py-3 flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {step === 5 && (
              <div className={formClasses}>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-center">Application Submitted!</h2>
                <p className="text-lg text-muted-foreground mb-8 text-center">
                  Thank you for applying to Innovation Academy. We've received your application and will review it shortly. You'll receive an email confirmation with next steps.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/" className="btn btn-secondary px-8 py-3">
                    Return to Home
                  </a>
                  <a href="/programs" className="btn btn-primary px-8 py-3">
                    Explore Programs
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Apply;
