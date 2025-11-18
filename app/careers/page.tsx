'use client';

import { useState } from 'react';
import { MapPin, Clock, ArrowRight, X } from 'lucide-react';
import { BoxedPageLayout } from '@/components/boxed-page-layout';

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const departments = ['All', 'Design', 'Development', 'Marketing', 'Management'];

  const jobs = [
    { 
      title: 'Senior Graphic Designer', 
      dept: 'Design', 
      location: 'Puducherry', 
      type: 'Full-time',
      description: 'We are looking for a talented Senior Graphic Designer to join our design team and create stunning visual content.',
      responsibilities: [
        'Create visual concepts and designs for various media',
        'Collaborate with marketing and creative teams',
        'Develop brand guidelines and ensure consistency',
        'Mentor junior designers'
      ],
      requirements: [
        '5+ years of professional graphic design experience',
        'Expert proficiency in Adobe Creative Suite',
        'Strong portfolio demonstrating branding skills',
        'Excellent communication skills'
      ]
    },
    { 
      title: 'Full Stack Developer', 
      dept: 'Development', 
      location: 'Puducherry', 
      type: 'Full-time',
      description: 'Join our development team to build cutting-edge web applications using modern technologies.',
      responsibilities: [
        'Develop and maintain web applications',
        'Write clean, maintainable code',
        'Collaborate with designers and backend developers',
        'Optimize applications for performance'
      ],
      requirements: [
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, and databases',
        'Experience with modern web technologies',
        'Strong problem-solving skills'
      ]
    },
    { 
      title: 'Digital Marketing Specialist', 
      dept: 'Marketing', 
      location: 'Puducherry', 
      type: 'Full-time',
      description: 'Drive digital marketing campaigns and help our clients grow their online presence.',
      responsibilities: [
        'Plan and execute digital marketing campaigns',
        'Manage social media accounts',
        'Analyze campaign performance and optimize',
        'Create content strategies'
      ],
      requirements: [
        '2-3 years of digital marketing experience',
        'Knowledge of SEO, SEM, and social media',
        'Experience with analytics tools',
        'Creative and analytical mindset'
      ]
    },
    { 
      title: 'UI/UX Designer', 
      dept: 'Design', 
      location: 'Puducherry', 
      type: 'Full-time',
      description: 'Design intuitive and beautiful user interfaces for web and mobile applications.',
      responsibilities: [
        'Create wireframes and prototypes',
        'Conduct user research and testing',
        'Design user interfaces and experiences',
        'Collaborate with developers'
      ],
      requirements: [
        '2-4 years of UI/UX design experience',
        'Proficiency in Figma or Sketch',
        'Strong portfolio of design work',
        'Understanding of user-centered design'
      ]
    },
    { 
      title: 'Project Manager', 
      dept: 'Management', 
      location: 'Puducherry', 
      type: 'Full-time',
      description: 'Lead project teams and ensure successful delivery of client projects.',
      responsibilities: [
        'Manage project timelines and resources',
        'Coordinate with clients and team members',
        'Ensure quality and timely delivery',
        'Handle project documentation'
      ],
      requirements: [
        '4-6 years of project management experience',
        'PMP or similar certification preferred',
        'Excellent organizational skills',
        'Strong leadership abilities'
      ]
    },
    { 
      title: 'Content Writer', 
      dept: 'Marketing', 
      location: 'Remote', 
      type: 'Part-time',
      description: 'Create compelling content for websites, blogs, and marketing materials.',
      responsibilities: [
        'Write clear, compelling copy for various mediums',
        'Create blog posts and articles',
        'Develop content strategies',
        'Edit and proofread content'
      ],
      requirements: [
        '2+ years of professional writing experience',
        'Excellent writing and editing skills',
        'Understanding of SEO best practices',
        'Portfolio of published work'
      ]
    }
  ];

  const filtered = selectedDept === 'All' ? jobs : jobs.filter(j => j.dept === selectedDept);

  return (
    <BoxedPageLayout>
      {/* Hero */}
      <section className="relative pt-32 md:pt-36 pb-20 overflow-hidden">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-orange-500 text-sm font-semibold mb-3">Careers</p>
          <h1 className="text-white text-[36px] md:text-[48px] font-bold mb-4 leading-tight">
            Come build with us
          </h1>
          <p className="text-[#939DB8] text-[18px] leading-[160%]">
            We're always looking for talented, passionate people to join our team.
          </p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-12 px-6">
        <div className="max-w-[900px] mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedDept === dept
                    ? 'bg-white text-background'
                    : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div className="space-y-3">
            {filtered.map((job, index) => (
              <button
                key={index}
                onClick={() => setSelectedJob(job)}
                className="w-full block p-6 rounded-xl bg-card border border-border hover:border-orange-500/50 transition-all duration-300 group text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-white text-[18px] font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-[#939DB8] text-[14px]">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="px-2 py-1 rounded-md bg-orange-500/10 text-orange-500 text-[12px] font-medium">
                        {job.dept}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#939DB8] group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#939DB8] text-[16px]">No openings in this department right now.</p>
            </div>
          )}
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && !showApplicationForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedJob(null)}>
          <div className="bg-card rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-border" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-start">
              <div>
                <h2 className="text-white font-bold text-[24px] mb-2">{selectedJob.title}</h2>
                <div className="flex flex-wrap gap-3 text-[14px]">
                  <span className="flex items-center gap-1.5 text-[#939DB8]">
                    <MapPin className="w-4 h-4" />
                    {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-[#939DB8]">
                    <Clock className="w-4 h-4" />
                    {selectedJob.type}
                  </span>
                  <span className="px-2 py-1 rounded-md bg-orange-500/10 text-orange-500 text-[12px] font-medium">
                    {selectedJob.dept}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-muted-foreground hover:text-foreground transition p-2 hover:bg-muted rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-white font-semibold text-[18px] mb-3">About the Role</h3>
                <p className="text-[#939DB8] text-[15px] leading-[170%]">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-[18px] mb-3">Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((item: string, index: number) => (
                    <li key={index} className="text-[#939DB8] text-[14px] flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-[18px] mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((item: string, index: number) => (
                    <li key={index} className="text-[#939DB8] text-[14px] flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Apply for this Position
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => { setShowApplicationForm(false); setSelectedJob(null); }}>
          <div className="bg-card rounded-xl max-w-xl w-full max-h-[85vh] overflow-y-auto border border-border" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-center">
              <div>
                <h2 className="text-white font-bold text-[22px]">Apply for {selectedJob.title}</h2>
                <p className="text-[#939DB8] text-[14px] mt-1">Fill out the form below</p>
              </div>
              <button
                onClick={() => { setShowApplicationForm(false); setSelectedJob(null); }}
                className="text-muted-foreground hover:text-foreground transition p-2 hover:bg-muted rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-[14px] font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-white text-[14px] font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-[14px] font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-white text-[14px] font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 transition"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-[14px] font-medium mb-2">LinkedIn Profile</label>
                  <input
                    type="url"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 transition"
                    placeholder="linkedin.com/in/..."
                  />
                </div>
                <div>
                  <label className="block text-white text-[14px] font-medium mb-2">Portfolio/Website</label>
                  <input
                    type="url"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 transition"
                    placeholder="yourportfolio.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-[14px] font-medium mb-2">Resume/CV *</label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-[14px] text-foreground file:mr-3 file:py-2 file:px-4 file:rounded file:border-0 file:text-[13px] file:bg-orange-500 file:text-white file:cursor-pointer hover:file:bg-orange-600 transition"
                />
                <p className="text-[#939DB8] text-[12px] mt-2">PDF, DOC, or DOCX (Max 5MB)</p>
              </div>

              <div>
                <label className="block text-white text-[14px] font-medium mb-2">Cover Letter *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 transition resize-none"
                  placeholder="Tell us why you're a great fit for this role..."
                ></textarea>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="flex-1 bg-muted text-foreground font-medium py-3 px-4 text-[14px] rounded-lg hover:bg-muted/80 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-4 text-[14px] rounded-lg hover:opacity-90 transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-white text-[30px] md:text-[36px] font-bold mb-4">Don't see a role for you?</h2>
          <p className="text-[#939DB8] text-[16px] mb-8">
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@creatographics.com"
            className="inline-flex items-center justify-center px-5 py-3 bg-white text-background text-[15px] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Send your resume
          </a>
        </div>
      </section>
    </BoxedPageLayout>
  );
}
