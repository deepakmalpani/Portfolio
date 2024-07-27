import { BriefcaseIcon } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Experience</h2>
          <p className="text-muted-foreground-dark">
            A timeline of my professional experience.
          </p>
        </div>
        <div className="relative space-y-8">
          <div className="absolute left-0 top-0 h-full w-[2px] bg-muted-dark" />
          <div className="grid grid-cols-[auto_1fr] items-start gap-6">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <BriefcaseIcon className="h-5 w-5" />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Full Stack Software Developer
              </h3>
              <p className="text-muted-foreground-dark">
                ExxonMobil Services and Technology Pvt Ltd
                <span className="mx-4">•</span>
                Jul 2021 - Present
              </p>
              <div className="mt-8">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Modernized a Matlab application into a robust web
                    application using ReactJS, Python-Flask, and Plotly.js for
                    visualizations, enabling users to perform complex
                    calculations and export results in PDF or Excel format
                  </li>
                  <li>
                    Engineered Terraform modules to establish a secure machine
                    learning environment with Databricks on the Azure platform,
                    following industry-leading security protocols and best
                    practices.
                  </li>
                  <li>
                    Created end-to-end ML Flow pipelines in Databricks utilizing
                    Python and integrated version control, testing, and seamless
                    integration with various business units via GitHub actions.
                    This achievement led to a drastic reduction in the timeline
                    for designing company plans, decreasing it from 6 months to
                    just 1 month.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] items-start gap-6">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <BriefcaseIcon className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Software Engineering Intern
              </h3>
              <p className="text-muted-foreground-dark">
                Metacube Pvt. Ltd.
                <span className="mx-4">•</span>
                May 2019 - Jun 2019
              </p>
              <div>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Developed chatbot service to automate the various processes in
                  the company including attendance form, work from home form and
                  leave application form.
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
